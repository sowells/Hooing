import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationMenu from './NavigationMenu';
import Modal from '@material-ui/core/Modal';
import menuReducer, {
  menuDispatch,
  MENU_ACTION_TYPE
} from '../businessLogic/menuReducer';
import { menuCategories } from '../testData/Menu';
import { Link } from 'react-router-dom';

const MenuBarStyles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function MenuBar(props) {
  const { classes } = props;
  let [isOpen, dispatch] = useReducer(menuReducer, false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {    
    console.log("Effect.")
    /*
    window.FB.getLoginStatus(resp => {
      const { status } = resp;
      switch(status) {
          case 'connected':{
            const {authresponse} = resp
            setLogin(true)
            break
          }
          default: {
            setLogin(false)
          }          
      }
    });
    */
  });

  const open = () => dispatch({ type: MENU_ACTION_TYPE.OPEN_MENU });
  const close = () => dispatch({ type: MENU_ACTION_TYPE.CLOSE_MENU });
<<<<<<< HEAD
  const logOff = () => {    
    window.FB.logout(r => {
      console.log(r);
    });
  };
=======
  const logOff = () =>  {
    localStorage.removeItem("login") 
    window.FB.logout( (r)=> {
        console.log(r);
    })
  }
>>>>>>> aa30d105d67804ce4203b600105bc0799e06be9a

  const auth = () => {
    if (isLogin) {
      return (
        <Button
          component={Link}
          onClick={() => logOff()}
          to={`/logoff`}
          color="inherit"
        >
          {localStorage.getItem('login')} logOff
        </Button>
      );
    } else {
      return (
        <Button component={Link} to={`/login`} color="inherit">
          Login
        </Button>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={() => close()}
      >
        <menuDispatch.Provider value={dispatch}>
          <NavigationMenu menuCategories={menuCategories} />
        </menuDispatch.Provider>
      </Modal>
      <AppBar position="static">
        <ToolBar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => open()}
          >
            <MenuIcon />
          </IconButton>
          <TypoGraphy variant="h6" color="inherit" className={classes.grow}>
            News
          </TypoGraphy>
          {auth()}
        </ToolBar>
      </AppBar>
    </div>
  );
}
MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(MenuBarStyles)(MenuBar);
