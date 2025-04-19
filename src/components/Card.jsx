import React from "react";

function ProductCard (props) {
    return(
        <div style={{ border: '1px solid black', padding: '10px', width: '300px' }}>
      <h2>{props.name1}</h2>
      <p>Harga: {props.price}</p>
      <p>Deskripsi: {props.description}</p>
    </div>

    )
}

export default ProductCard;