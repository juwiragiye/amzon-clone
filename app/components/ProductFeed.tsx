import type { Product } from "../routes/index";
import ProductComponent from "./Product";
function ProductFeed(props: { products: Product[] }) {
  const shift = Math.floor(Math.random() * 3 + 2);
  return (
    <div className="relative lg:-mt-32  md:grid grid-cols-2  2xl:grid-cols-5 lg:grid-cols-3 xl:grid-cols-4">
      {props.products.slice(0, shift).map((product: Product) => (
        <ProductComponent p={product} key={product.id} />
      ))}

      <img
        className="md:col-span-2 lg:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      {props.products
        .slice(5, Math.floor(Math.random() * 10 + 3))
        .map((product: Product) => (
          <ProductComponent p={product} key={product.id} />
        ))}
    </div>
  );
}

export default ProductFeed;
