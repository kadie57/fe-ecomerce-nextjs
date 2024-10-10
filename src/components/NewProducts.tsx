import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "https://i.pinimg.com/564x/c6/2f/09/c62f09b9311ffa01d099576cc809c7c4.jpg",
    title: "Shirt",
    desc: "Pure Garmen Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "https://i.pinimg.com/564x/e7/22/b1/e722b1aa01c233a69544cecdf08662bf.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "https://i.pinimg.com/564x/d8/db/63/d8db634fe90c2614ad444840fcb9cdaf.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 5,
    price: "100.00",
  },
  {
    img: "https://i.pinimg.com/564x/ac/e4/92/ace492e1efaddfd58fc70e7d79a1d2b4.jpg",
    title: "Sunglasses",
    desc: "Modern Sunglasses",
    rating: 5,
    price: "100.00",
  },
  {
    img: "https://i.pinimg.com/564x/30/9b/5f/309b5fc60615f84f116e84e7bb03ccc8.jpg",
    title: "Trousers",
    desc: "Trousers",
    rating: 5,
    price: "100.00",
  },
  {
    img: "https://i.pinimg.com/564x/07/b9/a7/07b9a7f597c61df659d80f122609446a.jpg",
    title: "Shoes",
    desc: "Shoes",
    rating: 5,
    price: "100.00",
  },
  {
    img: "https://i.pinimg.com/564x/69/bf/b9/69bfb9f2ccd05c2c0bd3591589f6c61c.jpg",
    title: "Pants",
    desc: "Pants",
    rating: 5,
    price: "100.00",
  },
  {
    img: "https://i.pinimg.com/564x/d7/62/be/d762be8a1f0cb2985767695dcecafb56.jpg",
    title: "Bracelet",
    desc: "Bracelet",
    rating: 5,
    price: "100.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewProducts;
