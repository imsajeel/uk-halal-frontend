import React from "react";
import { Product } from "../../db/repositories/products";
import "./card.css";

type Props = {
  data: Product;
};

const Card: React.FC<Props> = ({ data }) => {
  return (
    <div style={{ margin: "10px" }} className="card">
      <img src={data.image} alt={data.name} style={{ width: "100%" }} />
      <div className="container">
        <h4>
          <b>{data.name}</b>
        </h4>
        <p>
          <s>£{data.pricePrevious}</s>&nbsp;&nbsp;£{data.price}
        </p>
      </div>
    </div>
  );
};

export default Card;
