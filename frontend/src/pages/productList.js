import React from "react";
import { createRandomItems } from "../testData/Menu";
import { MyPaper } from "../testData/ItemGrid";
import ItemGrid from "../components/ItemGrid";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  const { match } = props;
  const { category } = match.params;
  const itemList = createRandomItems(category);
  const itemComponents = itemList.map(item => (
    <Link to={`${match.url}/products/${item.name}`}>
      <MyPaper key={item.name} text={item.name} />
    </Link>
  ));
  
  return (
    <div>
      <h2> Product Collection : {match.params.category} </h2>
      <ItemGrid items = {itemComponents}/>
    </div>
  );
}

