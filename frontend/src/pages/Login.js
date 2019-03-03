import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Divider, Avatar } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const basicStyle = {
  margin: '2rem auto',
  maxWidth: '400px',
  color: 'red'
};

const themeStyles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlgin: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    width: 400
  },
  facebookAvatar: {
    margin: '1rem auto',
    width: 50,
    height: 50,
    color: `#fff`,
    backgroundColor: deepPurple[600]
  }
});

function login(props) {
  const { classes } = props;
  const openFbLoginPopup = () => {
<<<<<<< HEAD
    console.log('open popup');
    window.FB.login(
      function(response) {
        // handle the response
        const { authResponse } = response;
        console.log(authResponse);
      },
      {
        scope: 'email, name',
        return_scopes: true,
        enable_profile_selector: true
      }
    );
  };
=======
    console.log("open popup");
    window.FB.login(function(response) {
      // handle the response
      const {authResponse} = response
      //localStorage.setItem("accessToken",authResponse.accessToken)
      console.log(authResponse);
      /*
      window.FB.api(
        '/me',
        'GET',
        {"fields":"id,name"},
        function(response) {
            // Insert your code here
            localStorage.setItem("login",response.name)
            console.log(response)
            let r = response
        }
      );
      */
    })
    return (
      <script>{
        `
        console.log("FB LOGIN");
        FB.login(function(response) {
  // handle the response
}, {scope: 'public_profile,email'}); `
}
      </script>
    )

  }
>>>>>>> aa30d105d67804ce4203b600105bc0799e06be9a
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
      <Divider style={{ marginTop: `3rem`, color: `black` }} />
      <div style={{ display: `inline` }}>
        <Button onClick={() => openFbLoginPopup()}>
          <Avatar className={classes.facebookAvatar}>페북</Avatar>
        </Button>
        <Avatar className={classes.facebookAvatar}>넵버</Avatar>
      </div>
    </div>
  );
}

export default withStyles(themeStyles)(login);

/*
AppId : 2538070096219712
Secret Key : b3c59198327c8fdfa0d4f1fa5682f681
Clinet Token(?) : 20cb343ab47b514dc7c37563b3d888b8

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2538070096219712',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.2'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>
*/
