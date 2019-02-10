import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/core/Icon';
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import WrappedIcon from "./WrappedIcon";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon"
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  }
});

function NavigationMenu(props) {
  const { classes } = props;
  return (
    <List component="nav" className={classes.root}>
      <ListItem button>
        <Link to="/men">
          <ListItemText primary="Men" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Women" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Kids" />
        <div>
        <ListItemIcon>
          <DraftsIcon/>
        </ListItemIcon>
        </div>
      </ListItem>
      <Divider light />
    </List>
  );
}

NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationMenu);
