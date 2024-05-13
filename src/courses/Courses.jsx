import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Tours";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Tours from "../components/Tours";

function Courses() {
  
  const items = [
    {
      name: "SMALL ROOM",
      category: "@ Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "200 / Night",
      image: "https://preview.colorlib.com/theme/samira/images/room_9.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "ROYAL ROOM",
      category: "6 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "500 / Night",
      image: "https://preview.colorlib.com/theme/roberto/img/bg-img/45.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "FAMILY ROOM",
      category: "8 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "300 / Night",
      image: "https://preview.colorlib.com/theme/roberto/img/bg-img/46.jpg",
      width : "100%",
      height : "280px"
    },
    // Add more items as needed
  ];

  const itemss = [
    {
      name: "5 STAR ROOM",
      category: "5 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "1100 / Night",
      image: "https://preview.colorlib.com/theme/roberto/img/bg-img/43.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "7 STAR ROOM",
      category: "7 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "1500 / Night",
      image: "https://preview.colorlib.com/theme/roberto/img/bg-img/47.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "8 STAR ROOM",
      category: "8 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "2000 / Night",
      image: "https://preview.colorlib.com/theme/suites/images/img_4.jpg",
      width : "100%",
      height : "280px"
    },
    // Add more items as needed
  ];

  const itemsss = [
    {
      name: "SINGLE ROOM",
      category: "2 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "200 / Night",
      image: "https://preview.colorlib.com/theme/hotel/img/room/rooms-1.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "DELUXE ROOM",
      category: "6 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "500 / Night",
      image: "https://preview.colorlib.com/theme/hotel/img/room/rooms-4.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "LUXURY ROOM",
      category: "8 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "1000 / Night",
      image: "https://preview.colorlib.com/theme/hotel/img/room/rooms-5.jpg",
      width : "100%",
      height : "280px"
    },
  ];
  const itemssss = [
    {
      name: "STANDARD ROOM",
      category: "5 Person",
      // title: "TRUE LOVE NEVER DIES",
      price: "300 / Nihght",
      image: "https://preview.colorlib.com/theme/hotel/img/room-footer-pic/room-2.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "PREMIUIM ROOM",
      category: "5 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "500 / Night",
      image: "https://preview.colorlib.com/theme/hotel/img/room-footer-pic/room-4.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "FAMILY ROOM",
      category: "12 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "400 / Night ",
      image: "https://preview.colorlib.com/theme/major/images/rooms_2.jpg",
      width : "100%",
      height : "280px"
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-stone-300 dark:bg-gray-700 ">
        <Tours />
        <div className="max-w-screen-2xl justify-center gap-10 flex container mx-auto md:px-20 px-4">
          {/* Render Cards component for each item */}
          {items.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
        <div className="max-w-screen-2xl justify-center gap-10 flex container mx-auto md:px-20 px-4">
          {/* Render Cards component for each item */}
          {itemss.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
        <div className="max-w-screen-2xl justify-center gap-10 flex container mx-auto md:px-20 px-4">
          {/* Render Cards component for each item */}
          {itemsss.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
        <div className="max-w-screen-2xl justify-center gap-10 flex container mx-auto md:px-20 px-4">
          {/* Render Cards component for each item */}
          {itemssss.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}



export default Courses;
