import React, { useState } from "react";
import FormComponent from "./FormComponent"; // Assuming the FormComponent file path
import Login from "./Login";

function Cards({ item }) {
  const { image, title, width, height } = item;
  const [showForm, setShowForm] = useState(false);

  const handleBuyNow = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative mt-4 w-96  font-serif h-3/5 my-3 p-3  transform transition-transform hover:scale-105 duration-300">
      <div className="w-92 shadow-xl bg-stone-200 hover:bg-stone-400 dark:text-black dark:border">
        <figure>
          <img src={item.image} alt={title} style={{ width: width, height: height }} />
        </figure>
        <div className="card-body text-black p-4">
          <h2 className="card-title ">
            {item.name}
            <div className="badge badge-secondary bg-stone-500 text-white border-stone-500">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline">${item.price}</div>
            {/* <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200" onClick={handleBuyNow}>
              Buy Now
            </div> */}
            <div className="hover:scale-105 transition duration-300 cursor-pointer ease-in-out">
                <a
                  className="bg-stone-500 text-white rounded-md px-3 py-1 hover:bg-black duration-200"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Book Now
                </a>
                <FormComponent />
              </div>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700" onClick={handleCloseForm}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <FormComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
