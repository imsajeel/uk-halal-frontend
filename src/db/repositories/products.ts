// import db config
import db from "../index";

// collection name
const COLLECTION_NAME = "Products";

// mapping the product document
export type Product = {
  name: string;
  brand: string;
  volume: string;
  price: number;
  pricePrevious?: number;
  rating?: number;
  sold?: number;
  image: string;
};

// retrieve all products
export const all = async (): Promise<Array<Product>> => {
  const snapshot = await db.collection(COLLECTION_NAME).get();
  const data: Array<any> = [];

  snapshot.docs.map((_data) => {
    data.push({
      id: _data.id, // because id field in separate function in firestore
      ..._data.data(), // the remaining fields
    });
    return 0;
  });

  // return and convert back it array of todo
  return data as Array<Product>;
};
