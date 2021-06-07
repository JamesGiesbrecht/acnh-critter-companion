import { SyntheticEvent, useEffect, useState } from 'react'
import { useAuth } from 'context/Auth'
import { AuthError } from 'firebase/error'
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  Slide,
  Snackbar,
  Typography,
} from '@material-ui/core'
import { Color, LoadingButton } from '@material-ui/lab'
import Form from 'components/common/Form'
import AccountButton from 'components/auth/AccountButton'
import useFiltersStore, { FormType } from 'store/filtersStore'
import FormLink from './FormLink'

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    width: 600,
    margin: theme.spacing(1),
  },
  formActions: { display: 'flex', flexDirection: 'column' },
  submitError: {
    color: theme.palette.error.main,
  },
}))

const inputs = {
  email: {
    label: 'Email',
    type: 'email',
    validation: {
      required: true,
      email: true,
    },
  },
  password: {
    label: 'Password',
    type: 'password',
    validation: {
      required: true,
      minLength: 6,
    },
  },
  confirmPassword: {
    label: 'Confirm Password',
    type: 'password',
    validation: {
      required: true,
      matches: { name: 'password' },
      minLength: 6,
    },
  },
}

const LoginSignUpForm = () => {
  const classes = useStyles()
  const activeFormName = useFiltersStore<FormType>((state: any) => state.activeForm)
  const setActiveFormName = useFiltersStore((state: any) => state.setActiveForm)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [snackbar, setSnackbar] = useState<{
    open: boolean
    content: string
    severity: Color | undefined
  }>({ open: false, content: '', severity: 'success' })
  const auth = useAuth()

  useEffect(() => {
    setSubmitError('')
  }, [activeFormName])

  const forms = {
    [FormType.Login]: {
      type: FormType.Login,
      title: 'Welcome Back',
      submitText: 'Login',
      inputs: {
        email: inputs.email,
        password: {
          ...inputs.password,
          after: (
            <FormLink key="forgotPassword" to={FormType.ForgotPassword}>
              Forgot Password?
            </FormLink>
          ),
        },
      },
    },
    [FormType.SignUp]: {
      type: FormType.SignUp,
      title: 'New User Sign Up',
      submitText: 'Sign Up',
      inputs: {
        email: inputs.email,
        password: inputs.password,
        confirmPassword: inputs.confirmPassword,
      },
    },
    [FormType.ForgotPassword]: {
      type: FormType.ForgotPassword,
      title: 'Forgot Password',
      submitText: 'Send Password Reset Email',
      inputs: { email: inputs.email },
    },
  }

  const handleClose = () => setActiveFormName(undefined)

  const handleSnackbarClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return
    setSnackbar((prev) => ({ ...prev, open: false }))
  }

  const toggleState = () => {
    setActiveFormName(activeFormName === FormType.Login ? FormType.SignUp : FormType.Login)
  }

  const activeForm = activeFormName && forms[activeFormName]

  const handleSubmit = async (e: SyntheticEvent, form: any) => {
    let result
    const email = form.inputs.email.value
    try {
      setIsLoading(true)
      switch (activeFormName) {
        case FormType.Login:
          result = await auth.login(email, form.inputs.password.value)
          break
        case FormType.SignUp:
          result = await auth.signUp(email, form.inputs.password.value)
          break
        case FormType.ForgotPassword:
          result = await auth.resetPassword(email)
          setSnackbar({
            open: true,
            content: 'Password reset email successfully sent',
            severity: 'success',
          })
          break
        default:
          throw new Error(`Invalid Submission Method: ${activeFormName}`)
      }
      setSubmitError('')
      setActiveFormName(undefined)
    } catch (error) {
      let errorMessage
      switch (error.code) {
        case AuthError.InvalidEmail:
          errorMessage = 'Please enter a valid email address.'
          break
        case AuthError.UserDisabled:
          errorMessage = `The account associated with ${email} has been disabled. Contact support for help with this issue.`
          break
        case AuthError.UserNotFound:
          errorMessage = (
            <>
              An account with this email does not exist, did you mean to{' '}
              <FormLink to={FormType.SignUp}>sign up.</FormLink>
            </>
          )
          break
        case AuthError.WrongPassword:
          errorMessage = 'Incorrect password provided.'
          break
        case AuthError.EmailAlreadyInUse:
          errorMessage = (
            <>
              An account already exists with this email, did you mean to{' '}
              <FormLink to={FormType.Login}>login?</FormLink>
            </>
          )
          break
        case AuthError.OperationNotAllowed:
        case AuthError.MissingContinueUri:
        case AuthError.MissingIOSBundleId:
        case AuthError.MissingAndroidPkgName:
        case AuthError.InvalidContinueUri:
        case AuthError.UnauthorizedContinueUri:
          errorMessage =
            'There is an error with the app configuration, please notify the administrator.'
          break
        case AuthError.WeakPassword:
          errorMessage = error.message
          break
        default:
          errorMessage = 'Something went wrong, try again later.'
      }
      setSubmitError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {auth.user ? (
        <AccountButton />
      ) : (
        <>
          <Button variant="contained" onClick={() => setActiveFormName(FormType.Login)}>
            Login
          </Button>
          <Button variant="contained" onClick={() => setActiveFormName(FormType.SignUp)}>
            Sign Up
          </Button>
        </>
      )}
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        open={Boolean(activeForm)}
        onClose={handleClose}
        aria-labelledby={activeForm?.type}>
        {activeForm && (
          <>
            <DialogTitle id={activeForm.type}>{activeForm.title}</DialogTitle>
            <DialogContent>
              {submitError && (
                <Typography className={classes.submitError} align="center">
                  {submitError}
                </Typography>
              )}
              <Form inputs={activeForm.inputs} type={activeForm.type} onSubmit={handleSubmit}>
                <DialogActions className={classes.formActions}>
                  <LoadingButton loading={isLoading} type="submit" color="primary" size="large">
                    {activeForm.submitText}
                  </LoadingButton>
                  <Button
                    type="button"
                    size="small"
                    color="inherit"
                    disabled={isLoading}
                    onClick={toggleState}>
                    {`Switch to ${activeForm.type === FormType.Login ? 'Sign Up' : 'Login'}`}
                  </Button>
                </DialogActions>
              </Form>
            </DialogContent>
          </>
        )}
      </Dialog>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={(props) => <Slide {...props} direction="up" />}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.content}
        </Alert>
      </Snackbar>
    </>
  )
}

export default LoginSignUpForm
