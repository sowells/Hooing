import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import NavigationMenu from "./NavigationMenu";
import Modal from "@material-ui/core/Modal";

const getModalStyles = () => {
  let top = 10;
  let left = -12;
  return {
    top: `${top}px`,
    left: `${left}px`,
    transform: `translate(-${top}px, -${left}px)`
  };
};

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
  const [menuToggleOn, setMenuToggleOn] = useState(false);
  const { classes } = props
  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={menuToggleOn}
        onClick={()=>setMenuToggleOn(false)}
        onClose={()=>setMenuToggleOn(false)}
      >
        <NavigationMenu />
      </Modal>
      <AppBar position="static">
        <ToolBar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={()=>setMenuToggleOn(true)}
          >
            <MenuIcon />
          </IconButton>
          <TypoGraphy variant="h6" color="inherit" className={classes.grow}>
            News
          </TypoGraphy>
          <Button onClick={() => console.log("test")} color="inherit">
            Login
          </Button>
        </ToolBar>
      </AppBar>
    </div>
  );
}
MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(MenuBarStyles)(MenuBar);

