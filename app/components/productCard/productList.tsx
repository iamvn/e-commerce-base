import React from "react";
import ProductCard from "./productCard";

const giftList = {
  category: {
    name: "Gift Set",
  },
  products: [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aroma Mist Diffuser 500ml  with Remote",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "495",
      ratings: "2.5",
      currency: "ruppes",
    },

    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jasmine Fragrance Oil  (1 Litre)",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "435",
      ratings: "5",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lemon Grass Fragrance Oil  (1 Litre)",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "425",
      ratings: "3.5",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Anti-Stress Ocean Fragrance Oil (1 Litre)",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "455",
      ratings: "4.5",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "candles",
      price: "1450",
      link: "candles",
      id: 5555,
      ratings: "3.5",
      ratingsCount: "45",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "candles",
      price: "1450",
      link: "candles",
      id: 5555,
      ratings: "5",
      ratingsCount: "451",
      currency: "ruppes",
    },
  ],
};

const diffusersList = {
  category: {
    name: "Diffusers",
  },
  products: [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Aroma Mist Diffuser 500ml  with Remote",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "495",
      ratings: "2.5",
      currency: "ruppes",
    },

    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jasmine Fragrance Oil  (1 Litre)",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "435",
      ratings: "5",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lemon Grass Fragrance Oil  (1 Litre)",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "425",
      ratings: "3.5",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Anti-Stress Ocean Fragrance Oil (1 Litre)",
      price: "1450",
      link: "candles",
      id: 5555,
      ratingsCount: "455",
      ratings: "4.5",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "candles",
      price: "1450",
      link: "candles",
      id: 5555,
      ratings: "3.5",
      ratingsCount: "45",
      currency: "ruppes",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1712935547661-4fe0b2de98bf?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "candles",
      price: "1450",
      link: "candles",
      id: 5555,
      ratings: "5",
      ratingsCount: "451",
      currency: "ruppes",
    },
  ],
};

const getProductListByCategoryId = (categoryId) => {
  switch (categoryId) {
    case "677": {
      return giftList;
    }
    case "678": {
      return diffusersList;
    }
  }
};

function ProductList(props) {
  const { categoryId } = props;
  const productList = getProductListByCategoryId(categoryId);
  return (
    <div className="p-5 b bg-gray-100">
      <div className="text-4xl flex items-center justify-center p-5">
        {productList && productList.category.name}
      </div>
      <div className="flex flex-wrap">
        {productList &&
          productList.products.map((product, index) => (
            <ProductCard productDetails={product} />
          ))}
      </div>
      <div className="flex justify-center">
        <button className="flex text-white bg-black border-0 py-2 px-6 focus:outline-none rounded">
          {"Shop more"}
        </button>
      </div>
    </div>
  );
}

export default ProductList;
