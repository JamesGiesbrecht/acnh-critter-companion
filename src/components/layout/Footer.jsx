import { Paper, Tooltip, Button, Link, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  footer: {
    display: 'inline-block',
    margin: '20px auto 0 auto',
    fontSize: '12px',
    padding: '0',
  },
  link: {
    color: '#90caf9',
  },
})

const Footer = () => {
  const classes = useStyles()
  /* eslint-disable prettier/prettier */
  const tooltipText = (
    <>
      If you liked using my site please <Link key="link" href="https://www.paypal.me/JamesGiesbrecht" className={classes.link}>consider buying me a coffee</Link> 😃
    </>
  )

  return (
    <Paper className={classes.footer} elevation={7}>
      <Tooltip title={tooltipText} placement="top">
        <Button>Created by James Giesbrecht</Button>
      </Tooltip>
    </Paper>
  )
}

export default Footer
