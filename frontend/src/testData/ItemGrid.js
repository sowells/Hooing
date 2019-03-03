import React from "react";
import Detail from "../components/product/ProductDetail";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ProductThumbnail from './../components/product/ProductThumbnail';
import ProductInfo from './../components/product/ProductInfo';

const styles = theme => ({
  paper: {
    align: "center",
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function MyPaper(props) {
  return (
    <Button>
      <Paper className={props.classes.paper}>
        <ProductThumbnail url={props.thumbnailUrl} alt={props.alt}/>
        <ProductInfo name={props.name} price={props.price}/>    
      </Paper>
    </Button>
  );
}
MyPaper = withStyles(styles)(MyPaper);

export const sampleGridItems = Array(10).fill(<Detail />);
export const samplePaperItems = Array(10).fill(<MyPaper text="Test" />);
export  {MyPaper}