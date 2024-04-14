import React from "react";
import Ratings from "../ratings/ratings";

function ProductCard(props) {
  const { productDetails } = props;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={productDetails.image}
        />
      </a>
      <div className="mt-4 text-center">
        <h3 className="text-gray-500 text-sm tracking-widest title-font mb-1 font-semibold">
          {productDetails.name}
        </h3>
        <div className="flex justify-center">
          <Ratings rating={productDetails} />
        </div>
        <p className="mt-1">₹​ {productDetails.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
