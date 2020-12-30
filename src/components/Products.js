import React from "react";
import { shoesData } from "../shoesData";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <div className="body-container">
      <h1>Our Products</h1>
      <div className='product-container'>
      <div className="productContainer">
        {Object.entries(shoesData).map(([id, { name, img }]) => (
          <li key={id}>
            <Link to={`/Product/${id}`}>
              <h3 id="products-names">{name}</h3>
              <img src={img} alt={name} />
            </Link>
          </li>
        ))}
      </div>
      </div>
    </div>
  );
};
