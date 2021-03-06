import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
//components
import ItemCount from "../ItemCount/ItemCount";
//context
import  CartContext from "../../context/CartContext";
//bootstrap
import Button from 'react-bootstrap/Button'

 function ItemDetail({detail}) {
  
  //const
  const minStock = 1;
  const initial = 0;
  const item = {
    id: detail.id,
    title: detail.title,
    category: detail.categoryId,
    description: detail.description,
    stock: detail.stock,
    url: detail.image,
    price: detail.price
  }

  //useState
  const [ stock, setStock] = useState(detail.stock);
  const [ viewBtn, setViewBtn] = useState ("hide");
  const [ viewCount, setViewCount] = useState ("show");
  const [ itemQuantity, setItemQuantity] = useState (initial);

  //context
  const { addItem} = useContext(CartContext);

  useEffect(() => {
    setStock(detail.stock - itemQuantity);
   });

  const onAdd = (e, q) => {
    e.preventDefault();
    if(stock < minStock){
      alert('no hay stock');
    }else if(q <= stock){
      setStock(stock - q);
      
      setItemQuantity(itemQuantity + q);
      console.log("setItemQuantity " + (itemQuantity + q));

      console.log("setStock " + (stock - q));
      addItem (item, itemQuantity + q);
      setViewBtn("show");
      if((stock - q) <= 0){
        setViewCount("hide");
      }
      }
  }

  return (
    <React.Fragment>

      <div className="card pt-5" id={detail.id}>
        <img  src={detail.image} alt="" />
        
        <div className= {detail.categoryId + " card-body"}>
          <h5 className="card-title">{detail.title}</h5>
          
          <div class="itemDetail mt-3">
            <p className="card-text">{detail.description}</p>
            <p className="card-text">Precio: ${detail.price}</p>
          </div>
          <p>Stock: {stock}</p>
          
          <div className={viewCount}><ItemCount stock={stock} initial={1} onAdd={onAdd}/></div>
          <NavLink className="nav-link mx-5" to ="/Cart">
            <div className={`${viewBtn} mt-2`}><Button>Terminar mi compra</Button></div>
          </NavLink>
        </div> 
      </div>

    </React.Fragment>
  );
     }

  
  export default ItemDetail;