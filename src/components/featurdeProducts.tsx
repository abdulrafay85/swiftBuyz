// "use client";
// import React from "react";
// import Line from "./line";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import BestSellingCard from "./bestSellingCard";

// const FeaturdeProducts = () => {
//   //   data
//   const bestSelling = [
//     {
//       src: "/p1.jpg",
//       alt: "T-hirt",
//       title: "White Printed T-Shirt",
//       description: "Best Quality -Sirt for Women",
//       price: 150,
//       category: "tShirt",
//       slug: "white-tshirt",
//     },
//     {
//       src: "/p1.jpg",
//       alt: "Pant",
//       title: "Damiged Pant",
//       description: "Best Quality Pant for Women",
//       price: 200,
//       category: "pant",
//       slug: "damiged-pant",
//     },
//     {
//       src: "/p1.jpg",
//       alt: "Swater",
//       title: "Black Printed Swater",
//       description: "Best Quality waer for Women",
//       price: 100,
//       category: "swater",
//       slug: "black-swater",
//     },
//     {
//       src: "/p1.jpg",
//       alt: "Jacket",
//       title: "Lather Jacket",
//       description: "Best Quality Jacket for Women",
//       price: 200,
//       category: "jacket",
//       slug: "lather-jacket",
//     },
//     {
//       src: "/p1.jpg",
//       alt: "Swater",
//       title: "Black Printed Swater",
//       description: "Best Quality waer for Women",
//       price: 100,
//       category: "swater",
//       slug: "black-swater",
//     },
//   ];
//   //   carousel setting
//   var settings = {
//     arrow: false,
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: false,
//           arrow: false,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//           dots: false,
//           arrow: false,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: false,
//           arrow: false,
//         },
//       },
//     ],
//   };
//   return (
//     <section className="mb-[100px] mt-[100px]">
//       {/* Heading */}
//       <div className="flex flex-col mb-10 items-center justify-center">
//         <h1
//           className="scroll-m-20 text-2xl 
//      font-semibold tracking-tight mb-3 text-center"
//         >
//           Featured Products
//         </h1>
//         <Line />
//       </div>
//       {/* Carousel */}
//       <Slider {...settings}>
//         {bestSelling.map((item, i) => (
//           <BestSellingCard
//            key={item.slug} // Use a unique property like 'slug' if available
//             src={item.src}
//             alt={item.alt}
//             title={item.title}
//             description={item.description}
//             price={item.price}
//             category={item.category}
//             slug={item.slug}
//           />
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default FeaturdeProducts;
