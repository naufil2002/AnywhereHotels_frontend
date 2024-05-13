// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cards from "./Cards";

// function Freebook() {
//     const [book, setBook] = useState([]);

//     useEffect(() => {
//         const getBook = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4001/book");
//                 const data = res.data.filter(data => data.category === "Free");
//                 setBook(data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getBook();
//     }, []);

//     return (
//         <>
//             <div className="max-w-screen-2xl text-black dark:bg-slate-900 -mt-4 pt-5 dark:text-white container mx-auto md:px-20 px-4">
//                 <div>
//                     <h1 className="font-semibold text-4xl md:text-5xl pb-2">Unleash Your Wanderlust</h1>
//                     <p className="text-lg md:text-xl leading-relaxed">
//                         Dive into a world of awe-inspiring adventures and unlock the hidden treasures of our planet. Our handpicked selection of exhilarating journeys and serene retreats promises to ignite your passion for exploration. From scaling majestic peaks to basking in the sun-kissed shores of tropical paradises, we cater to every traveler's dreams. Embrace the thrill of discovery and let us craft your next epic adventure. Begin your journey towards unforgettable memories today!
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Freebook;
