import Product from "./Product";
import { products } from "./data";
function Body() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {products.map((product) => {
        const { name, price, image } = product;

        return <Product name={name} price={price} image={image} />;
      })}
    </div>
  );
}

export default Body;
