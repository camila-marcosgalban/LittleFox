import React from "react";
import { NavLink } from "react-router-dom";
//bootstrap
import Button from 'react-bootstrap/Button'

 function Item({item}) {

  return (
    <React.Fragment>

      <div className="card pt-5" id={item.id}>
        <img  src={item.image} alt="" />

        <div className= {item.categoryId + " card-body"}>
          <h5 className="card-title">{item.title}</h5>
          
            <NavLink className="nav-link" to ={`Item/${item.id}`}>
              <Button>Ver Detalle</Button>
            </NavLink>
        </div> 
      </div>

    </React.Fragment>
  );
     }

  
  export default Item;