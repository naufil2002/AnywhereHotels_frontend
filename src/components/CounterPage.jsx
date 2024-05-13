import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faEarthAsia, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterPage = () => {
  const [counterOn, setCounteron] = useState(false);

  return (
    <>
      <ScrollTrigger onEnter={() => setCounteron(true)} onExit={() => setCounteron(false)}>
        <div id="projectFacts" className="flex font-serif flex-wrap dark:border justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-4 flex justify-center">
            <div className="  bg-stone-400 p-6 text-black text-center w-full">
              <FontAwesomeIcon className="text-3xl text-black mb-4" icon={faUser} />
              <p id="number1" className="text-2xl ">
                {counterOn && <CountUp start={10} end={100} delay={0} duration={2} />}
                k+
              </p>
              <p>Customer Serve</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-stone-300 text-black  mb-4 flex justify-center">
            <div className=" p-6 text-center w-full">
              <FontAwesomeIcon className="text-3xl text-black mb-4" icon={faUsers} />
              <p id="number2" className="text-2xl">
                {counterOn && <CountUp start={15} end={85} delay={0} duration={2} />}
                %
              </p>
              <p>Customers Recommend Us</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-stone-400 text-black mb-4 flex justify-center">
            <div className=" p-6 text-center w-full">
              <FontAwesomeIcon className="text-3xl text-black mb-4" icon={faEarthAsia} />
              <p id="number3" className="text-2xl ">
                {counterOn && <CountUp start={10} end={92} delay={0} duration={2} />}
                %
              </p>
              <p>Websites Support</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 bg-stone-300 text-black mb-4 flex justify-center">
            <div className=" p-6 text-center w-full">
              <FontAwesomeIcon className="text-3xl text-black mb-4" icon={faStarHalfAlt} />
              <p id="number4" className="text-2xl">
                {counterOn && <CountUp start={1200} end={2518} delay={0} duration={2} />}
              </p>
              <p>Our Company's Rating</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default CounterPage;
