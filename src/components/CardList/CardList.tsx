import React from "react";
import { Product } from "../../db/repositories/products";
import Card from "./Card";

type Props = {
  data: Product[];
};

const CardList: React.FC<Props> = ({ data }) => {
  if (data.length > 0) {
    return (
      <div>
        {data.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </div>
    );
  } else {
    return <div>Loading.....</div>;
  }
};

export default CardList;
