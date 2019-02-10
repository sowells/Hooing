import React, { useState, useReducer, useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  AccessAlarm,
  Drafts,
  Menu,
  ExpandLess,
  ExpandMore
} from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import WrappedIcon from "./WrappedIcon";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { withStyles, Collapse } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import menuReducer,{menuDispatch, MENU_ACTION_TYPE} from '../businessLogic/menuReducer';

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

const menItem = {
  name: "HIGH WAIST",
  url: "/men"
};
const hooingItem = {
  name: "후잉 후잉",
  url: "/men"
}

const menuCategory = {
  name: "귀욤후링",
  items: [menItem, hooingItem]
};

function MenuItem(props){
  const { items, classes } = props;
  const dispatch = useContext(menuDispatch)
  function close() {
    dispatch({type:MENU_ACTION_TYPE.CLOSE_MENU})
  }
  return items.map(item => {
    return (
      <ListItem button divider onClick={()=>close()} className={classes.nested}>
        <Link to={item.url}>
          <ListItemText primary={item.name} />
        </Link>
      </ListItem>
    );
  });
};
MenuItem =  withStyles(styles)(MenuItem);

function MenuCategory(props) {
  const { categories} = props;
  const [open, setOpen] = useState(false);
  return categories.map(category => {
    return (
      <div>
        <ListItem button onClick={() => setOpen(!open)}>
          <ListItemText primary={category.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <MenuItem items={category.items} />
          </List> 
        </Collapse>
      </div>
    );
  });
}
MenuCategory =  withStyles(styles)(MenuCategory);

function NavigationMenu(props) {
  const { categories, classes } = props;
  return (
    <List component="nav" className={classes.root}>
      <MenuCategory categories={[menuCategory]}  />
    </List>
  );
}

/*
NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired
};
*/

export default withStyles(styles)(NavigationMenu);
