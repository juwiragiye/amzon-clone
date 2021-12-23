import type { Product } from "~/routes";
import { StarIcon } from "@heroicons/react/solid";

function ProductComponent(props: { p: Product }) {
  const rating = Math.floor(Math.random() * 5 + 1);

  return (
    <div className="relative flex flex-col font-semibold text-gray-500  m-5 px-10  p-4 z-30 bg-white ">
      <p className="absolute top-2 md:hidden right-2 text-sm italic text-gray-500 capitalize">
        {props.p.category}
      </p>
      <div className="flex justify-center">
        <img
          className=""
          src={props.p.image}
          alt={props.p.image}
          height={200}
          width={150}
        />
      </div>
      <h1 className="mb-1">{props.p.title}</h1>
      <div className="flex">
        {Array(rating)
          .fill(0, 0, Math.floor(Math.random() * 5 + 1))
          .map((_, i) => (
            <StarIcon key={i} className=" w-5  h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-sm font-medium line-clamp-2 mb-2">
        {props.p.description}
      </p>

      <div className="">
        <p>${props.p.price}</p>
        <p className="">FREE Next-day Delivery</p>
      </div>
      <button className="inline-block mt-4 p-2 text-xs font-bold border border-yellow-200 rounded-sm hover:cursor-pointer focus:outline-none  focus:ring-2 focus:ring-yellow-500 active:from-green-800  md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400">
        Add to cart
      </button>
    </div>
  );
}

export default ProductComponent;
