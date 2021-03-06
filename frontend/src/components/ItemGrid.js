import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: "10px",
    padding: theme.spacing.unit * 2,
    height: "100%",
    color: "red"
  }
});

function ItemGrid(props) {
  const { items } = props;
  const { classes } = props;

  const itemComponent = items.map((item, index) => (
    <Grid item key={index} sm={6} xs={12} >
        {item}
    </Grid>
  ));

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {itemComponent}
      </Grid>
    </div>
  );
}
export default withStyles(styles)(ItemGrid);
