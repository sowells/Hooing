import React from "react";
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

const getModalStyles = () => {
  let top = 10;
  let left = -12;
  return {
    top: `${top}px`,
    left: `${left}px`,
    transform: `translate(-${top}px, -${left}px)`
  };
};

function HeaderClick() {
  console.log("Icon Button Clicked");
}
/*
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.isMenuToggleOn}
            >
        </Modal>  
*/
class CHeader extends React.Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.classes = classes;
    this.state = {
      isMenuToggleOn: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(state => ({
      isMenuToggleOn: !state.isMenuToggleOn
    }));
    console.log("Menu Toggle : " + this.state.isMenuToggleOn);
  }

  openMenu = () => {
    this.setState({ isMenuToggleOn: true });
  };

  closeMenu = () => {
    this.setState({ isMenuToggleOn: false });
  };

  render() {
    const classes = this.classes;
    return (
      <div className={classes.root}>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.isMenuToggleOn}
          onClose={this.closeMenu}
        >
        <NavigationMenu />
        </Modal>
        <AppBar position="static">
          <ToolBar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.openMenu}
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
}

CHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default
CHeader = withStyles(MenuBarStyles)(CHeader);
export default CHeader;
