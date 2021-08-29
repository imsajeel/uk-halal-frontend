import React from "react";
import { Product } from "../../db/repositories/products";
import "./card.css";

type Props = {
  data: Product;
};

const Card: React.FC<Props> = ({ data }) => {
  const AddToCart = () => {
    console.log("Added to Cart ", data.id);
  };
  return (
    <div style={{ margin: "10px" }} className="card">
      <img src={data.image} alt={data.name} style={{ width: "100%" }} />
      <div className="container">
        <div className="product-name">{data.name}</div>
        <div className="product-details">
          <div>
            Brand: <b>{data.brand}</b>
          </div>
          <div>
            Volume: <b>{data.volume}</b>
          </div>
        </div>

        <div className="bottom">
          <div className="price">
            £ {data.price}
            {data.pricePrevious && data.price < data.pricePrevious && (
              <div className="pricePrevious">
                <s>£ {data.pricePrevious}</s>
              </div>
            )}
          </div>
          <button
            onClick={AddToCart}
            className="color-a"
            style={{
              width: "100%",
              padding: "10px",
              margin: "5px 0px 5px 0px",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
