// import React, { Fragment } from "react";
import ProductCard from "./productCard";

const products = [
  {
    id: 1,
    title: "Bugatti",
    category: "vehicles",
    price: 55555,
    description: "the best car in the world maybe",
    link: "https://www.ebay.com/itm/115712462906?hash=item1af100103a:g:wCQAAOSwKmxkEVj6",
    src: "https://cdn.pixabay.com/photo/2016/11/08/21/57/bugatti-1809564_960_720.jpg",
  },
  {
    id: 2,
    title: "Shmugatti",
    category: "vehicles",
    price: 55555,
    description: "the best car in the world maybe",
    link: "https://www.ebay.com/itm/115712462906?hash=item1af100103a:g:wCQAAOSwKmxkEVj6",
    src: "https://cdn.pixabay.com/photo/2016/11/08/21/57/bugatti-1809564_960_720.jpg",
  },
  {
    id: 3,
    title: "Lugatti",
    category: "vehicles",
    price: 55555,
    description: "the best car in the world maybe",
    link: "https://www.ebay.com/itm/115712462906?hash=item1af100103a:g:wCQAAOSwKmxkEVj6",
    src: "https://cdn.pixabay.com/photo/2016/11/08/21/57/bugatti-1809564_960_720.jpg",
  },
];

function ProductList() {
  if (!products.length) {
    return "no products yet";
  }

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          description={product.description}
          link={product.link}
          src={product.src}
        />
      ))}
    </div>
  );
}

// function ProductList() {
//   return (
//     <>
//       {/* <React.Fragment></React.Fragment>
//       <Fragment ></Fragment> */}
//       <ProductCard
//         title="Bugatti"
//         category="vehicles"
//         price={55555}
//         description="the best car in the world maybe"
//         link="https://www.ebay.com/itm/115712462906?hash=item1af100103a:g:wCQAAOSwKmxkEVj6"
//         src="https://cdn.pixabay.com/photo/2016/11/08/21/57/bugatti-1809564_960_720.jpg"
//       />
//       <ProductCard
//         title="Bugatti"
//         category="vehicles"
//         description="the best car in the world maybe"
//         link="https://www.ebay.com/itm/115712462906?hash=item1af100103a:g:wCQAAOSwKmxkEVj6"
//         src="https://cdn.pixabay.com/photo/2016/11/08/21/57/bugatti-1809564_960_720.jpg"
//       />
//       <ProductCard
//         title="Bugatti"
//         category="vehicles"
//         price={55555}
//         description="the best car in the world maybe"
//         link="https://www.ebay.com/itm/115712462906?hash=item1af100103a:g:wCQAAOSwKmxkEVj6"
//         src="https://cdn.pixabay.com/photo/2016/11/08/21/57/bugatti-1809564_960_720.jpg"
//       />
//       <ProductCard
//         title="Bugatti"
//         category="vehicles"
//         price={55555}
//         description="the best car in the world maybe"
//         link="https://www.ebay.com/itm/115712462906?hash=item1af100103a:g:wCQAAOSwKmxkEVj6"
//         src="https://cdn.pixabay.com/photo/2016/11/08/21/57/bugatti-1809564_960_720.jpg"
//       />
//     </>
//   );
// }

export default ProductList;
