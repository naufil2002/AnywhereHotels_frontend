import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const HotelRoom = ({ theme }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate a delay to display the page slowly
    const delayTimer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Adjust the delay time as needed

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div className='bg-stone-300 dark:bg-gray-700'>
      <Navbar />
      <div className={`py-12 font-serif ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
        <div className={`max-w-4xl mt-16 mx-auto px-4 ${loaded ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
          <section className={`mb-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
            <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
            <img className='mt-5 mb-5' src="https://symbanservices.com/wp-content/uploads/2020/06/hotel-staff-in-lobby-1700x800-1.jpg" alt="" />
            <h2 className="text-xl font-bold mb-4">Our Room</h2>
            <p>
              Welcome to our luxurious hotel room, where comfort meets elegance. Our mission is to provide you with an unforgettable stay filled with relaxation and convenience. From our plush bedding to our modern amenities, we strive to make your experience truly exceptional.
            </p>
          </section>
          <section className={`mb-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
            <h2 className="text-xl font-bold mb-4">What Sets Us Apart</h2>
            <div className="mb-4">
              <p>
                What sets our hotel room apart is our attention to detail and commitment to excellence. We go above and beyond to ensure that every aspect of your stay is perfect, from the cleanliness of the room to the quality of the service. Whether you're here for business or pleasure, we guarantee a memorable experience unlike any other.
              </p>
            </div>
          </section>
          <section className={`${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
            <h2 className="text-xl font-bold mb-4">Our Staff</h2>
            <p>
              Our team consists of dedicated professionals who are passionate about hospitality. From our attentive housekeeping staff to our friendly concierge, every member of our team is committed to ensuring your comfort and satisfaction. Whatever you need during your stay, we're here to make it happen.
            </p>
          </section>
          <section className={`${theme === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
            <h2 className="text-xl font-bold mt-4">Book Your Stay</h2>
            <p>
              Ready to experience luxury at its finest? Book your stay with us today and indulge in the ultimate comfort and convenience. Whether you're traveling for business or leisure, our hotel room is the perfect choice for your next getaway. Contact us now at <a href="mailto:info@hotel.com" className="text-blue-500">info@anywherehotel.com</a> to reserve your room and start planning your dream stay!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HotelRoom;
