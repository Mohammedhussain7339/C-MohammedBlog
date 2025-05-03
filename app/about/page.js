import React from "react";
import Footer from "./Footer"
function page() {
  return (
    <div>
<section className="flex flex-col lg:flex-row gap-7 p-10">
  <div className="w-full lg:w-[400px]">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
      Great Deals <br /> For You
    </h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      There are many variations of passa of Lorem Ipsum available, but the majority have suffered.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
    {[
      {
        icon: "https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/icon/manager.svg",
        title: "Learn New Skills",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, reprehenderit molestias nesciunt nam maiores mollitia.",
      },
      {
        icon: "https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/icon/puzzle.svg",
        title: "Master Your Potential",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quo non voluptatem, vel quidem rem.",
      },
      {
        icon: "https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/icon/notepad.svg",
        title: "Enhance Your Knowledge",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse excepturi distinctio incidunt repudiandae ullam.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="w-full bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300"
      >
        <div className="w-20 h-20 flex justify-center items-center rounded-full bg-blue-400 dark:bg-red-400">
          <img src={item.icon} alt={item.title} className="w-12 h-12" />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold my-2 text-gray-800 dark:text-gray-200">
          {item.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0">
              <div className="relative">
                <img
                  className="pl-28 animate-spin-slow"
                  src="https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/slider/earth-bg.svg"
                  alt="about-img"
                />
                <img
                  className="absolute top-10 left-10"
                  src="https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/about/01.png"

                  alt="about-img"
                />
                <img
                  className="absolute bottom-10 right-10"
                  src="https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/about/02.png"

                  alt="about-img"
                />
                <img
                  className="absolute inset-0 m-auto" src="https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/slider/01.png"
                  alt="about-img"
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div>
                <h5 className="text-blue-600 text-lg font-semibold mb-4">
                  About Us
                </h5>
                <h2 className="text-3xl font-bold mb-4">
                  The act or experience of one that learns a computer program
                  that makes learning fun
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                  erat.
                </p>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  di nonumy eirmod tempor invidunt ut labore et dolore magn aliq
                  erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed di nonumy.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-4xl font-bold text-blue-600">100+</h2>
              <h5 className="text-gray-600">Specialist Good Teachers</h5>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-4xl font-bold text-blue-600">1000+</h2>
              <h5 className="text-gray-600">Online Learning Courses</h5>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-4xl font-bold text-blue-600">13654+</h2>
              <h5 className="text-gray-600">Online & Offline Students</h5>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-4xl font-bold text-blue-600">364+</h2>
              <h5 className="text-gray-600">Special Awards Winning</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  bg-gray-100 dark:bg-gray-900 p-10">
  <div className="text-center">
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">
      Our Instructor
    </h1>
    <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white mb-8">
      Explore Experienced Instructors
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
    {[
      { name: "Mohammed", course: "Advanced Java", img: "https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/instructor/02.jpg" },
      { name: "Aisha Khan", course: "Data Science", img: "https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/instructor/02.jpg" },
      { name: "John Doe", course: "Web Development", img: "https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/instructor/02.jpg" },
      { name: "Emily Smith", course: "Machine Learning", img: "https://srbthemes.kcubeinfotech.com/zoomy/html/assets/img/instructor/02.jpg" },
    ].map((instructor, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 p-4 transition-all duration-300 hover:shadow-xl"
      >
        <img
          src={instructor.img}
          alt={instructor.name}
          className="w-full h-60 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <h2 className="text-xl font-semibold text-white">{instructor.name}</h2>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{instructor.name}</h2>
          <h1 className="text-lg text-gray-700 dark:text-gray-400">{instructor.course}</h1>
        </div>
      </div>
    ))}
  </div>
</section>

      <Footer/>
    </div>
  );
}

export default page;
