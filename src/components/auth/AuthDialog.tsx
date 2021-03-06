import { FC, ReactNode, SyntheticEvent } from 'react'

import useStore from 'store'
import { FormType, Providers } from 'typescript/enums'
import { FormState, InputCollection } from 'typescript/types'

import { Button, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import { LoadingButton } from '@material-ui/lab'
import Form from 'components/common/Form'

interface AuthDialogProps {
  children?: ReactNode
  disableSwitchButton?: boolean
  error?: boolean
  helperText?: ReactNode | string
  inputs: InputCollection
  isLoading?: boolean | Providers
  providerButtons?: ReactNode
  submitText: string
  title: string
  type?: FormType
  onSubmit: (e: SyntheticEvent, state: FormState) => void
}

export type AuthFormProps = Partial<AuthDialogProps> & {
  onSubmit: (e: SyntheticEvent, state: FormState) => void
}

const useStyles = makeStyles((theme) => ({
  formActions: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    maxWidth: 280,
    paddingTop: theme.spacing(3),
    '& > *': { margin: 0, marginBottom: theme.spacing(2), width: '100%' },
  },
  submitError: {
    color: theme.palette.error.main,
  },
}))

const AuthDialog: FC<AuthDialogProps> = ({
  children,
  disableSwitchButton,
  error,
  helperText,
  inputs,
  isLoading,
  providerButtons,
  submitText,
  title,
  type,
  onSubmit,
}) => {
  const classes = useStyles()
  const activeFormName = useStore<FormType | undefined>((state) => state.activeForm)
  const setActiveFormName = useStore((state) => state.setActiveForm)

  const toggleState = () => {
    setActiveFormName(activeFormName === FormType.Login ? FormType.SignUp : FormType.Login)
  }

  return (
    <>
      <DialogTitle id={type}>{title}</DialogTitle>
      <DialogContent>
        {helperText && (
          <Typography className={error ? classes.submitError : ''} align="center">
            {helperText}
          </Typography>
        )}
        {children && <Typography>{children}</Typography>}
        <Form inputs={inputs} type={type} onSubmit={onSubmit}>
          <div className={classes.formActions}>
            <LoadingButton
              loading={isLoading === true}
              loadingPosition="start"
              // To satisfy the compiler
              startIcon={<></>}
              endIcon={<></>}
              disabled={Boolean(isLoading)}
              variant="contained"
              type="submit"
              color="primary">
              {submitText}
            </LoadingButton>
            {(type === FormType.Login || type === FormType.SignUp) && providerButtons}
            {!disableSwitchButton && (
              <Button
                type="button"
                size="small"
                color="inherit"
                disabled={Boolean(isLoading)}
                onClick={toggleState}>
                {`Switch to ${type === FormType.Login ? 'Sign Up' : 'Login'}`}
              </Button>
            )}
          </div>
        </Form>
      </DialogContent>
    </>
  )
}

export default AuthDialog
