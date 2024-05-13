import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import video from "../../public/video.mp4"

const API = import.meta.env.VITE_API;
function Tours() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${API}/book`);
        console.log(res.data);
        setBook(res.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 ${
        loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"
      }`}
    >
      <div className="mt-16 font-serif items-center justify-center text-center">
        <h1 className="text-2xl pt-5 md:text-4xl">
        Welcome to Your Stylish Hideaway!{" "}
        </h1>
        <p className="mt-12">
        Get ready to immerse yourself in a world of chic sophistication and
    unparalleled comfort. Our rooms are meticulously designed to offer you a
    haven of relaxation and indulgence. From plush bedding to state-of-the-art
    amenities, every detail is tailored to elevate your stay to new heights of
    luxury. Whether you're here for business or leisure, our hotel promises to
    exceed your expectations at every turn, ensuring a truly remarkable
    experience that you'll cherish forever.
        </p>
        <Link to="/">
          <button className="btn mt-6 btn-secondary bg-stone-500 border-stone-500 hover:bg-black hover:border-black transform hover:scale-105 transition duration-300 ease-in-out">
            Back
          </button>
        </Link>
      </div>
      <div
      className={`max-w-screen-2xl mt-10 mb-10 container mx-auto md:px-20 px-4 ${
        loading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"
      }`}
    >
    <video autoPlay loop muted  className="w-full">
      <source src={`${video}`} type="video/mp4" />
    </video>
  </div>
    </div>
  );
}

export default Tours;
