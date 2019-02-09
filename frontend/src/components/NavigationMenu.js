import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Men from "./Men";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  }
});

const menu = {
  name: "Men"
};

function NavigationMenu(props) {
  const { classes } = props;
  return (
      <List component="nav" className={classes.root}>
        <ListItem button>
            <ListItemText primary="Men" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Women" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Kids" />
        </ListItem>
        <Divider light />
      </List>
  );
}

NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationMenu);
