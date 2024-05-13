import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../public/Slidermain.jpg";
import banner2 from "../../public/Slidermain2.jpg";
import banner3 from "../../public/Slidermain3.jpg";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import CounterPage from "./CounterPage";
import img1 from "../../public/Screenshot.png";
import img2 from "../../public/Screenshot2.png";
import img3 from "../../public/Screenshot3.png";

function ImageWithText({ imageUrl, initialText, hoverText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageUrl} alt="" />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-black text-white px-4 py-2 opacity-75 transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-center text-3xl">
          {isHovered ? hoverText : initialText}
        </p>
      </div>
    </div>
  );
}

function Banner({ theme }) {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setShowBanner(true);
    }, 500);
  }, []);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sliderClass = theme === "dark" ? "slick-dark" : "";

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    // nextArrow: <NextArrow />, // Use NextArrow component here
    // prevArrow: <PrevArrow />, // Use PrevArrow component here
    className: sliderClass, // Add class for dark mode
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <Slider className={`${sliderClass}`} {...settings}>
          <div className=" ">
            <ImageWithText
              imageUrl={banner1}
              initialText="ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!"
              hoverText="Most Relaxing Place"
            />
          </div>
          <div className="">
            <ImageWithText
              imageUrl={banner2}
              initialText="ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!"
              hoverText="Most Relaxing Place"
            />
          </div>
          <div className="">
            <ImageWithText
              imageUrl={banner3}
              initialText="ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!"
              hoverText="Most Relaxing Place"
            />
          </div>
        </Slider>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div
          className={`absolute top-1/2 -mt-16 font-serif left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white opacity-0 transition-opacity duration-1000 ${
            showText ? "delay-500 opacity-100" : ""
          }`}
        >
          <h4 className="text-xl font-semibold mb-4">
            ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!
          </h4>
          <h1 className="text-7xl font-extrabold">Most Relaxing Place</h1>
          <button
            className={`mt-6 px-8 py-4 ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-slate-50 text-black"
            } rounded-md shadow-md hover:bg-black hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105`}
          >
            <a href="/tours">VIEW ALL ROOMS</a>
          </button>
        </div>
      </div>

      <div className="dark:bg-slate-900 font-serif -mt-2 bg-stone-300 dark:text-white">
        <div
          className={`text-center ${
            theme === "dark" ? "text-white" : "text-black"
          } dark:bg-slate-900 dark:text-white pt-10`}
        >
          <h2 className="text-3xl font-bold">WE OFFER TO OUR GUESTS</h2>

          <div className="flex space-x-10 justify-center hover:cursor-pointer mt-10">
            <div className="relative">
              <ImageWithText
                imageUrl="https://preview.colorlib.com/theme/rolax/assets/img/gallery/guest1.jpg"
                initialText="Free Drinks"
                hoverText="The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite."
              />
            </div>
            <div className="relative">
              <ImageWithText
                imageUrl="https://preview.colorlib.com/theme/rolax/assets/img/gallery/guest2.jpg"
                initialText="Free Breakfast"
                hoverText="The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite."
              />
            </div>
            <div className="relative">
              <ImageWithText
                imageUrl="https://preview.colorlib.com/theme/rolax/assets/img/gallery/guest3.jpg"
                initialText="Free Dinner"
                hoverText="The concept and service of the best luxury hotels in Asturias in our sophisticated Urban Double and Unique Junior Suite rooms, with the possibility of enjoying a furnished terrace in our Double Urban Loft and Unique Junior Loft Suite."
              />
            </div>
          </div>
        </div>
        <div className="mt-16 ml-5">
          <h1 className="text-6xl mb-10 text-center ">
            Joyful experiences for you and your family!
          </h1>
          <img
            className="ml-96 pl-96"
            src={`${img1}`}
            alt="error"
            width={"74.5%"}
          />
        </div>
        <div className="flex">
          <div className="mt-10">
            <img src={`${img2}`} alt="error" width={"100%"} />
          </div>
          <div className="mt-96 ml-5">
            <img src={`${img3}`} alt="error" width={"100%"} />
          </div>
        </div>
        {/* <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <div
            className={`bg-${
              theme === "dark" ? "gray-800" : "white"
            }dark:bg-slate-900 dark:text-white dark:border rounded-lg shadow-md p-6 ml-4 transition duration-300 transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            <h3 className="text-xl font-semibold mb-4">Expert Guides</h3>
            <p className="text-lg">
              Our experienced guides are passionate about sharing their
              knowledge and ensuring you have an enriching travel experience.
            </p>
          </div>
          <div
            className={`bg-${
              theme === "dark" ? "gray-800" : "white"
            }dark:bg-slate-900 dark:text-white dark:border rounded-lg shadow-md p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            <h3 className="text-xl font-semibold mb-4">Flexible Itineraries</h3>
            <p className="text-lg">
              We understand that every traveler is unique. That's why we offer
              flexible itineraries that can be tailored to suit your preferences
              and interests.
            </p>
          </div>
          <div
            className={`bg-${
              theme === "dark" ? "gray-800" : "white"
            }dark:bg-slate-900 dark:text-white dark:border rounded-lg shadow-md mr-4 p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-105 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer`}
          >
            <h3 className="text-xl font-semibold mb-4">Safety & Comfort</h3>
            <p className="text-lg">
              Your safety and comfort are our top priorities. We carefully
              select accommodations, transportation, and activities to ensure a
              worry-free journey.
            </p>
          </div>
        </div> */}
        <div
          className={`mt-16 py-12  dark:bg-slate-900 dark:text-white ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <div className="max-w-6xl  mx-auto px-4">
            <p className="text-center mb-5">TESTIMONIAL</p>
            <h2
              className={`text-3xl font-bold text-center mb-8 ${
                theme === "dark" ? "text-white" : "text-black"
              }dark:bg-slate-900 dark:text-white`}
            >
              Happy Guests!
            </h2>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div
                className={`bg-${
                  theme === "dark" ? "gray-800" : "white"
                }dark:bg-slate-900 dark:text-black dark:border dark:hover:text-white bg-stone-200 rounded-lg shadow-md p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-105  cursor-pointer hover:bg-black hover:text-white`}
              >
                <div>
                  <img
                    className="rounded-full"
                    src="https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_08.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg mt-2 mb-4 ">
                  "My experiences with Anywhere Hotels have been consistently
                  impressive. From the moment I enter, the cleanliness and
                  attention to detail immediately stand out.It's a sanctuary of
                  luxury and relaxation that I always look forward to returning
                  to."
                </p>
                <p className="text-gray-600">- Roger Scott</p>
              </div>
              <div
                className={`bg-${
                  theme === "dark" ? "gray-800" : "white"
                }dark:bg-slate-900 dark:text-black dark:border bg-stone-200 dark:hover:text-white rounded-lg shadow-md p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-105  cursor-pointer hover:bg-black hover:text-white`}
              >
                <div>
                  <img
                    className="rounded-full"
                    src="https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_05.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg mt-2 mb-4 ">
                  " Every time I stay in a Anywhere Hotels, I'm met with a
                  perfect blend of comfort and sophistication. The immaculate
                  cleanliness, cozy bedding, and thoughtful amenities create an
                  atmosphere of luxury and relaxation."
                </p>
                <p className="text-gray-600">- John Doe</p>
              </div>
              <div
                className={`bg-${
                  theme === "dark" ? "gray-800" : "white"
                }dark:bg-slate-900 dark:text-black dark:border bg-stone-200 dark:hover:text-white rounded-lg shadow-md p-6 transition duration-300 transform hover:-translate-y-1 hover:scale-105  cursor-pointer hover:bg-black hover:text-white`}
              >
                <div>
                  <img
                    className="rounded-full"
                    src="https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_09.jpg"
                    alt=""
                  />
                </div>
                <p className="text-lg mt-2 mb-4 ">
                  "Anywhere Hotels consistently impress with their impeccable
                  cleanliness, comfortable amenities, and attention to detail.
                 It's a retreat of luxury and comfort that I
                  always enjoy returning to."
                </p>
                <p className="text-gray-600">- Thomas james</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CounterPage />
    </>
  );
}

export default Banner;
