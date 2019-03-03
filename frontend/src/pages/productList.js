import React, {useState, useEffect} from "react";
import { MyPaper } from "../testData/ItemGrid";
import ItemGrid from "../components/ItemGrid";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductList(props) {
  const { match } = props;
  const [items, setItems] = useState(null);
  
  useEffect(() => {
    axios.get('https://localhost:8080/products').then(
      response => {
        console.log('response');
        setItems(response.data.map(item => (
          <Link to={{
            pathname:`${match.url}/products/${item.id}`,
          }}>
             <MyPaper key={item.name} name={item.name} thumbnailUrl={item.thumbnailUrl} price={item.price} alt={item.alt}/>
           </Link>
        ))
        );
      }
    )
  }, [])

  return (
    <div>
      {items != null && 
        <div>
          <h2> Product Collection : {match.params.category} </h2>
          <ItemGrid items = {items}/>
        </div>
      } 
      {items == null && 
        <div>
          Loading...
        </div>
      }
    </div>
  )
}

