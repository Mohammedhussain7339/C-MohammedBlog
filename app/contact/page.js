import React from 'react'
import Footer from "../about/Footer";
import Contactbg from "../../public/images/contactbg.jpg"
import Contactbg1 from "../../public/images/contactbg1.jpg"
import Contactbg2 from "../../public/images/contactbg2.jpg"
import { MdLocationPin,MdDialerSip  } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

import Image from 'next/image'
function page() {
  return (
    <div>
      <section
             className="relative flex items-end bg-cover bg-center h-96 bgimg dark:opacity-50" 
      >
        <div className="container mx-auto px-4">
         <div className="flex flex-col items-start mb-12">
           <h1 className="text-4xl font-bold text-white mb-4 dark:text-black">Contact Us</h1>
           <nav>
             <ul className="flex space-x-2 text-white text-lg dark:text-black">
               <li>
                 <a href="/" className="hover:text-gray-300">Home</a>
                 <span className="mx-2">-</span>
               </li>
               <li>
                 <a href="#" className="hover:text-gray-300">Contact</a>
               </li>
             </ul>
          </nav>
         </div>
      </div>
      </section>
           <section className="pt-36 pb-28 md:pt-24 md:pb-20 sm:pt-24 sm:pb-20">
       <div className="container mx-auto px-4">
         <div className="flex flex-wrap items-center">
           <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
             <div className="contact-img">
               {/* <img className="w-full h-auto" src" alt="Contact" /> */}
               <Image src={Contactbg1} alt='contactbg'></Image>
             </div>
           </div>
           <div className="w-full lg:w-1/2 lg:p-3 ">
   <div className="contact-wrapper dark:bg-black p-4 shadow-lg bg-slate-100 rounded-md">
     <div className="mb-3">
       <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold">Get In Touch With Us</h2>
       <p className="text-gray-600 text-md sm:text-lg">Lorem ipsum dolor sit amet, consetetur eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
     </div>

     <div className="flex flex-wrap md:flex-nowrap items-center mb-3 shadow-md dark:bg-red-950 bg-red-100 h-auto md:h-28 w-full md:w-[80%] p-4">
       <div className="w-14 h-14 sm:w-16 sm:h-16 mx-4 flex justify-center items-center bg-red-300 rounded-full">
         <i className="text-3xl sm:text-[50px] text-red-400"><MdLocationPin /></i>
       </div>
       <h5 className="font-semibold text-xl sm:text-2xl">27/2b, Street Road -04, New York, USA</h5>
     </div>

     <div className="flex flex-wrap md:flex-nowrap items-center mb-3 shadow-md dark:bg-blue-950 bg-blue-200 h-auto md:h-28 w-full md:w-[80%] p-4">
       <div className="w-14 h-14 sm:w-16 sm:h-16 mx-4 flex justify-center items-center bg-blue-300 rounded-full">
         <i className="text-3xl sm:text-[50px]  text-blue-400"><MdDialerSip /></i>
       </div>
       <div>
         <h5 className="text-xl sm:text-2xl font-semibold">+000 (125) 3654 34</h5>
         <h5 className="text-xl sm:text-2xl font-semibold">+000 (125) 3654 34</h5>
       </div>
     </div>

     <div className="flex flex-wrap md:flex-nowrap items-center shadow-md dark:bg-green-950 bg-green-200 h-auto md:h-28 w-full md:w-[80%] p-4">
       <div className="w-14 h-14 sm:w-16 sm:h-16 mx-4 flex justify-center items-center bg-green-300 rounded-full">
         <i className="text-3xl sm:text-[50px] text-green-400"><IoMdMail /></i>
       </div>
       <div>
        <h5 className="text-xl sm:text-2xl font-semibold">info@example.com</h5>
         <h5 className="text-xl sm:text-2xl font-semibold">info2@example.com</h5>
      </div>    </div>
   </div>
 </div>

        </div>
       </div>
     </section>
    <section className="pt-36 pb-28 md:pt-24 md:pb-20 sm:pt-24 sm:pb-20 dark:bg-gray-800 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap   items-center">
          <div className="w-full lg:w-1/2 mb-8 p-4 lg:mb-0">
            <div className="contact-form-wrapper  bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
                <input type="text" placeholder="Last Name" className="p-3 border rounded-lg" />
                <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg" />
                <input type="text" placeholder="Address" className="p-3 border rounded-lg" />
                <input type="text" placeholder="Email" className="col-span-2 p-3 border rounded-lg" />
                <textarea placeholder="Write a Message" className="col-span-2 p-3 border rounded-lg h-32"></textarea>
                <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-full  rounded-md bg-slate-400 overflow-hidden lg:w-1/2">
          <Image src={Contactbg2} className='hover:scale-125 cursor-pointer transition-all'></Image>
              {/* <img className="w-full h-1/2 rounded-lg shadow-lg" src="https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/contact/02.jpg" alt="Contact" /> */}
          </div>
        </div>
      </div>
    </section>
    <section className="dark:bg-gray-900 bg-gray-400 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to our Newsletter & Get Updates</h2>
            <div className="relative flex flex-col sm:flex-row items-center justify-center">
              <input
                type="email"
                placeholder="Write Your E-mail"
                className="w-full sm:w-auto p-3 rounded-lg text-gray-900 border-none focus:outline-none"
              />
              <button className="mt-4 sm:mt-0 sm:ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    <Footer/>

    </div>
//     <div>
//             <section 
//       className="relative cursor-pointer  flex items-end bg-cover bg-center h-96 bgimg " 
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-start mb-12">
//           <h1 className="text-4xl font-bold text-white mb-4 dark:text-black">Contact Us</h1>
//           <nav>
//             <ul className="flex space-x-2 text-white text-lg dark:text-black">
//               <li>
//                 <a href="/" className="hover:text-gray-300">Home</a>
//                 <span className="mx-2">-</span>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-300">Contact</a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </section>
//     <section className="pt-36 pb-28 md:pt-24 md:pb-20 sm:pt-24 sm:pb-20">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap items-center">
//           <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//             <div className="contact-img">
//               {/* <img className="w-full h-auto" src" alt="Contact" /> */}
//               <Image src={Contactbg1} alt='contactbg'></Image>
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 lg:p-3 ">
//   <div className="contact-wrapper dark:bg-black p-4 shadow-lg bg-slate-100 rounded-md">
//     <div className="mb-3">
//       <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold">Get In Touch With Us</h2>
//       <p className="text-gray-600 text-md sm:text-lg">Lorem ipsum dolor sit amet, consetetur eirmod tempor invidunt ut labore et dolore magn aliq erat.</p>
//     </div>

//     <div className="flex flex-wrap md:flex-nowrap items-center mb-3 shadow-md dark:bg-red-950 bg-red-100 h-auto md:h-28 w-full md:w-[80%] p-4">
//       <div className="w-14 h-14 sm:w-16 sm:h-16 mx-4 flex justify-center items-center bg-red-300 rounded-full">
//         <i className="text-3xl sm:text-[50px] text-red-400"><MdLocationPin /></i>
//       </div>
//       <h5 className="font-semibold text-xl sm:text-2xl">27/2b, Street Road -04, New York, USA</h5>
//     </div>

//     <div className="flex flex-wrap md:flex-nowrap items-center mb-3 shadow-md dark:bg-blue-950 bg-blue-200 h-auto md:h-28 w-full md:w-[80%] p-4">
//       <div className="w-14 h-14 sm:w-16 sm:h-16 mx-4 flex justify-center items-center bg-blue-300 rounded-full">
//         <i className="text-3xl sm:text-[50px]  text-blue-400"><MdDialerSip /></i>
//       </div>
//       <div>
//         <h5 className="text-xl sm:text-2xl font-semibold">+000 (125) 3654 34</h5>
//         <h5 className="text-xl sm:text-2xl font-semibold">+000 (125) 3654 34</h5>
//       </div>
//     </div>

//     <div className="flex flex-wrap md:flex-nowrap items-center shadow-md dark:bg-green-950 bg-green-200 h-auto md:h-28 w-full md:w-[80%] p-4">
//       <div className="w-14 h-14 sm:w-16 sm:h-16 mx-4 flex justify-center items-center bg-green-300 rounded-full">
//         <i className="text-3xl sm:text-[50px] text-green-400"><IoMdMail /></i>
//       </div>
//       <div>
//         <h5 className="text-xl sm:text-2xl font-semibold">info@example.com</h5>
//         <h5 className="text-xl sm:text-2xl font-semibold">info2@example.com</h5>
//       </div>
//     </div>
//   </div>
// </div>

//         </div>
//       </div>
//     </section>
    // <section>
    // <div className="absolute inset-0 z-30 p-0 m-0 border-0 touch-pan-x touch-pan-y">
    //   <div className="absolute inset-0 z-40 flex items-center justify-center transform">
    //     <div className="absolute inset-0 z-50 w-full"></div>
    //     <div className="absolute inset-0 z-50 w-full"></div>
    //     <div className="absolute inset-0 z-50 w-full">
    //       <slot></slot>
    //       <span id="F3606F14-24F8-4044-BE04-862BBE946697" className="hidden">
    //         To navigate, press the arrow keys.
    //       </span>
    //     </div>
    //     <div className="absolute inset-0 z-50 w-full"></div>
    //   </div>
    // </div>
    // </section>
    // <section className="pt-36 pb-28 md:pt-24 md:pb-20 sm:pt-24 sm:pb-20 dark:bg-gray-800 ">
    //   <div className="container mx-auto px-4">
    //     <div className="flex flex-wrap   items-center">
    //       <div className="w-full lg:w-1/2 mb-8 p-4 lg:mb-0">
    //         <div className="contact-form-wrapper  bg-white p-6 shadow-lg rounded-lg">
    //           <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
    //           <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //             <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
    //             <input type="text" placeholder="Last Name" className="p-3 border rounded-lg" />
    //             <input type="text" placeholder="Phone Number" className="p-3 border rounded-lg" />
    //             <input type="text" placeholder="Address" className="p-3 border rounded-lg" />
    //             <input type="text" placeholder="Email" className="col-span-2 p-3 border rounded-lg" />
    //             <textarea placeholder="Write a Message" className="col-span-2 p-3 border rounded-lg h-32"></textarea>
    //             <button className="col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-4">
    //               Send Message
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //       <div className="w-full  rounded-md bg-slate-400 overflow-hidden lg:w-1/2">
    //       <Image src={Contactbg2} className='hover:scale-125 cursor-pointer transition-all'></Image>
    //           {/* <img className="w-full h-1/2 rounded-lg shadow-lg" src="https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/contact/02.jpg" alt="Contact" /> */}
    //       </div>
    //     </div>
    //   </div>
    // </section>

//       {/* Subscribe Section */}
    //   <section className="dark:bg-gray-900 bg-gray-400 text-white py-24">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-2xl mx-auto text-center">
    //         <h2 className="text-3xl font-bold mb-6">Subscribe to our Newsletter & Get Updates</h2>
    //         <div className="relative flex flex-col sm:flex-row items-center justify-center">
    //           <input
    //             type="email"
    //             placeholder="Write Your E-mail"
    //             className="w-full sm:w-auto p-3 rounded-lg text-gray-900 border-none focus:outline-none"
    //           />
    //           <button className="mt-4 sm:mt-0 sm:ml-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
    //             Subscribe Now
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // <Footer/>
//     </div>
  )
}

export default page
