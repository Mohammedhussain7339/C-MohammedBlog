import React from 'react'
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-red-300'>
      <footer className="w-full p-10 shadow-xl shadow-blue dark:text-white bg-gray-100 dark:bg-black relative ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 text-center md:text-left">
            <img
              src="http://kits.themegum.com/igue/wp-content/uploads/sites/6/elementor/thumbs/igue_logo-plbt3g4rneskv3ov87b4nnpaty1dwiaohlaidx1tds.png"
              alt="igue_logo"
              className="mx-auto md:mx-0"
            />
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor sed nunc sed pulvinar.
            </p>
          </div>
          
          {/* Pages Section */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h6 className="text-lg font-bold mb-3">Pages</h6>
            <ul className="space-y-2">
              {["Home", "About Us", "Our Team", "Sponsors", "Package", "Contact"].map((item, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Utility Pages Section */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h6 className="text-lg font-bold mb-3">Utility Pages</h6>
            <ul className="space-y-2">
              {["About Us", "Corporate Profile", "Our Team", "Portfolio", "Our Office"].map((item, index) => (
                <li key={index} className="hover:text-gray-400 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Quick Connect Section */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <h6 className="text-lg font-bold mb-3">Quick Connect</h6>
            <div className="flex space-x-4">
              {[FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp].map((Icon, index) => (
                <Icon key={index} className="text-2xl cursor-pointer hover:text-gray-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Latest Episodes */}
        <div className="text-center">
          <h6 className="text-lg font-bold mb-3">Latest Episodes</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">25 Best Books For Business Owners And Entrepreneurs You Should Read In 2021</a></li>
            <li><a href="#" className="hover:text-gray-400">Ep 1: How to build a world-class business brand</a></li>
            <li><a href="#" className="hover:text-gray-400">Cras malesuada elit leo, id ultrices felis porttitor convallis</a></li>
          </ul>
        </div>

        {/* Theme Toggle Button */}

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <span>© 2023 iGue Template Kit – All rights reserved.</span>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
