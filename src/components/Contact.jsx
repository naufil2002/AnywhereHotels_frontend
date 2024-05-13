import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay to display the page slowly
    const delayTimer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Adjust the delay time as needed

    return () => clearTimeout(delayTimer);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement logic to send the form data to your server
    // For now, let's just log the data to the console
    console.log({ name, email, message });
    setSubmitted(true);
  };

  return (
    <div className='bg-stone-300 dark:bg-gray-700'>
      <Navbar />
      <div className={`contact-us-container font-serif  max-w-md mx-auto py-8 ${loaded ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <form onSubmit={handleSubmit} className={`bg-stone-200 dark:text-black shadow-md rounded px-8 pt-6 pb-8 mt-20 mb-24 ${submitted ? 'hidden' : 'block transition-all duration-1000 ease-in-out'}`}>
            <h2 className="text-2xl  dark:text-white- whtext-white-center font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <label className="block dark:text-black text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="shadow appearance-none border rounded w-full py-2 px-3  text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block dark:text-black text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-600"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block dark:text-black text-sm font-bold mb-2" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-600 h-32 resize-none"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-stone-500 hover:bg-black btn-secondary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
          <div className={`bg-stone-100 mt-56 mb-96 border border-stone-400 text-stone-700 px-4 py-3 rounded relative ${submitted ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0 hidden'}`}>
            <strong className="font-bold">Thank you for contacting us!</strong><br />
            <span className="block sm:inline">We'll get back to you as soon as possible.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
