import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API;
// Reusable Input Component
const InputField = ({ label, type, placeholder, register, name, errors }) => (
  <div className="mb-4">
    <label className="block text-black" htmlFor={name}>
      {label}:
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
      {...register(name, { required: true })}
    />
    {errors[name] && (
      <span className="text-sm text-red-500">This field is required</span>
    )}
  </div>
);

function FormComponent() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      address: data.address,
    };

    console.log("userInfo: ", userInfo);

    try {
      const res = await axios.post(
        `${API}/order/place-order`,
        userInfo
      );

      // console.log(process.env.REACT_APP_API_URL);

      if (res.data) {
        toast.success("Booking placed Successfully");
        document.getElementById("my_modal_4").close();
        // setTimeout(() => {
        // 	window.location.reload();
        // 	localStorage.setItem(
        // 		"Users",
        // 		JSON.stringify(res.data.user)
        // 	);
        // }, 1000);
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        // toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box bg-stone-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-black text-lg">Booking Details</h3>
            <Link
              to="/"
              className="btn btn-sm text-black btn-circle btn-ghost"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              ✕
            </Link>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className={submitted ? "hidden" : ""}
          >
            <InputField
              label="Name"
              type="text"
              placeholder="Enter your name"
              register={register}
              name="name"
              errors={errors}
            />

            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              register={register}
              name="email"
              errors={errors}
            />

            <InputField
              label="Mobile No."
              type="tel"
              placeholder="Enter your mobile number"
              register={register}
              name="mobile"
              errors={errors}
            />
			

            <InputField
              label="Address"
              type="text"
              placeholder="Enter your address"
              register={register}
              name="address"
              errors={errors}
            />

            {/* <div className="flex items-center justify-center mt-5">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <a href="https://payments.google.com/gp/w/u/0/home/signup">
                  Pay with UPI
                </a>
              </button>
            </div> */}

            <div className="flex items-center justify-center mt-5">
              <button
                className="bg-stone-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
          {submitted && (
            <div
              className={`bg-stone-100 mt-36 mb-40 border border-stone-400 text-stone-700 px-4 py-3 rounded relative ${
                submitted
                  ? "opacity-100 transition-opacity duration-1000 ease-in-out"
                  : "opacity-0 hidden"
              }`}
            >
              <strong className="font-bold">Thank you for your Booking!</strong>
              <br />
              <span className="block sm:inline">
                Our team will contact you soon!
              </span>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}

export default FormComponent;
