import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const basicStyle = {
  margin: '2rem auto',
  maxWidth: '400px',
  color: 'red'
};

const themeStyles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
      margin: theme.spacing.unit,
      width:200,
  }
});

 function login(props) {
  const {classes} = props
  return (
    <div style={basicStyle}>
      <Typography
        variant="h4"
        component="h3"
        style={{ color: `green`, textAlign: `center` }}
      >
        Login
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField 
          id="account" 
          label="Account" 
          margin="normal" 
          className={classes.textField}
          />
        <TextField 
        id="password" 
        label="Password" 
        margin="normal" 
        type="password"
        className={classes.textField}
        />
        <Button variant="contained" color="primary" className={classes.button}>
        Login
        </Button>
      </form>
    </div>
  );
}

export default withStyles(themeStyles)(login)
