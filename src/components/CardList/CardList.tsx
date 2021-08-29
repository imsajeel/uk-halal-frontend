import React from "react";
import { Product } from "../../db/repositories/products";
import Loading from "../Loading/Loading";
import Card from "./Card";

type Props = {
  data: Product[];
};

const CardList: React.FC<Props> = ({ data }) => {
  if (data.length > 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {data.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default CardList;
