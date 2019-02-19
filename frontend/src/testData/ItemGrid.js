import React from "react";
import Detail from "../pages/detail";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";

const styles = theme => ({
  paper: {
    align: "center",
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function MyPaper(props) {
  const { classes, text } = props;
  return (
    <Button>
      <Paper className={classes.paper}>{text}</Paper>
    </Button>
  );
}
MyPaper = withStyles(styles)(MyPaper);

export const sampleGridItems = Array(10).fill(<Detail />);
export const samplePaperItems = Array(10).fill(<MyPaper text="Test" />);
export  {MyPaper}