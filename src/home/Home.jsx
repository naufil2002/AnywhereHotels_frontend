import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
// import Freebook from "../components/Freebook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../components/Cards";

function Home() {
  const items = [
    {
      name: "STANDARD ROOM",
      category: "5 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "300 / NIGTH",
      image: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel1.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "FAMILY ROOM",
      category: "10 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "400 / Night",
      image: "https://preview.colorlib.com/theme/suites/images/img_2.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "SINGLE ROOM",
      category: "2 PERSON",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "250 / Night",
      image: "https://preview.colorlib.com/theme/suites/images/img_3.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "DELUXE ROOM",
      category: "5 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "450 / Night",
      image: "https://preview.colorlib.com/theme/ocheandeview/assets/img/gallery/rooms1.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "LUXURY ROOM",
      category: "7 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "1000 / Night",
      image: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel3.jpg",
      width : "100%",
      height : "280px"
    },
    {
      name: "PREMIUIM ROOM",
      category: "10 Person",
      // title: "10 Activites  | 📌12 Places |  🗓️1 Week",
      price: "800 / Night",
      image: "https://preview.colorlib.com/theme/rolax/assets/img/gallery/hotel2.jpg",
      width : "100%",
      height : "280px"
    },
    // Add more items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3, // Adjust the number of cards shown per slide
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 1600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex  flex-col h-screen">
      <Navbar />
      <div className="flex-grow">
        <Banner />
        {/* <Freebook /> */}
        
        <div className="bg-stone-300 dark:bg-gray-900">
        <div className="max-w-screen-2xl font-serif text-black -mt-4 pt-5 dark:text-white container mx-auto md:px-20 px-4">
        <div className="-ml-16 text-center">
    <h1 class="font-extrabold text-3xl text-black pb-4 dark:text-stone-300 uppercase"> Our Rooms!</h1>
    <p class="text-lg leading-relaxed text-gray-700 dark:text-stone-300 uppercase font-bold">
    The concept and service of the best luxury hotels in Asturias in our sophisticated.
    </p>
</div>

            </div>
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <Slider className="pt-10 pb-16" {...settings}>
            {items.map((item, index) => (
              <div className="ml-4 md:ml-10" key={index}>
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
