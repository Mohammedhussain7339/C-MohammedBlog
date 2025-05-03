"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";
import { IoBusiness,IoNewspaper  } from "react-icons/io5";
import { MdComputer,MdFlight,MdOutlineSportsBaseball   } from "react-icons/md";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import Footer from "./about/Footer";
import homeimg from "../public/images/homepage.svg"
import photo1 from "../public/images/photo1.jpg"
import photo2 from "../public/images/photo2.jpg"
import photo3 from "../public/images/photo3.jpg"
export default function Home() {
  const categories = [
    { name: "Technology", icon: <MdComputer className="text-4xl text-blue-500" />, link: "/blogCategories/Technology" },
    { name: "Travel", icon: <MdFlight className="text-4xl text-green-500" />, link: "/blogCategories/Travel" },
    { name: "Sport", icon: <MdOutlineSportsBaseball className="text-4xl text-red-500" />, link: "/blogCategories/Sports" },
    { name: "Business", icon: <IoBusiness className="text-4xl text-yellow-500" />, link: "/blogCategories/Business" },
    { name: "Education", icon: <BsFillFileEarmarkBarGraphFill className="text-4xl text-purple-500" />, link: "/blogCategories/Education" },
    { name: "Trends", icon: <FaFire className="text-4xl text-orange-500" />, link: "/blogCategories/Trends" },
    { name: "Startups", icon: <IoNewspaper className="text-4xl text-indigo-500" />, link: "/blogCategories/Startup" },
    { name: "News", icon: <IoNewspaper className="text-4xl text-gray-500" />, link: "/blogCategories/News" },
  ];
  
  return (
    <div className=" w-full h-[100vh]">
    <div className="">
      <main className="flex-1 relative  xl:pt-[5.5rem]">
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">free repository</span> for community
              <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="search"
                  name="query"
                  placeholder="Search Components"
                  required
                  className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
            src={homeimg}
            // src={"https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"}
              alt="tailwind css components"
              className="w-full h-full max-w-md mx-auto"
              width={500}
              height={500}
            />
          </div>
        </section>
        <section className="container  mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Latest components</h3>
          <p className="mt-4 text-gray-500 dark:text-gray-400">The newest featured Tailwind CSS components and templates from the community</p>
          <div className="grid gap-8  md:grid-cols-2 lg:grid-cols-3">
          </div>
        </section>
        </main>
        <main className="p-10">
          <h1 className="font-bold  text-2xl text-center my-4 ">Explore Trending Topics
          </h1>
        <div className="flex items-center cursor-pointer flex-wrap gap-10 justify-center">
        {categories.map((category, index) => (
              <Link href={category.link} className="hover:text-blue-500">
          <div key={index} className="p-4 items-center gap-4 justify-center w-[250px] h-[60px] flex rounded-3xl shadow-md dark:bg-gray-800 bg-gray-200 hover:scale-105 transition">
            <div className=" ">
              {category.icon}
            </div>
            <h3 className="text-lg font-semibold ">
                {category.name}
            </h3>
          </div>
              </Link>
        ))}
      </div>
</main>

<main className="">
  <section className="container px-4 py-10 mx-auto">
  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Price & Plans</h1>
  <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Basic Plan */}
<div className="w-full bg-white hover:border-purple-500 border-2 cursor-pointer hover:scale-105 transition-transform duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:border-blue-800 rounded-lg shadow-lg">
    <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Basic</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">For individuals just starting out.</p>
        <p className="mt-4 text-3xl font-bold text-blue-600">
          $10 <span className="text-lg font-normal">/ month</span>
        </p>
        <ul className="mt-6 space-y-2 text-left text-gray-600 dark:text-gray-400">
          <li>1 User</li>
          <li>5GB Storage</li>
          <li>Email Support</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full w-full">
          Sign Up
        </button>
      </div>
    </div>

    {/* Standard Plan */}
    <div className="w-full bg-white hover:border-purple-500 border-2 cursor-pointer hover:scale-105 transition-transform duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:border-blue-800 rounded-lg shadow-lg">
    <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Standard</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">For growing teams and small businesses.</p>
        <p className="mt-4 text-3xl font-bold text-blue-600">
          $25 <span className="text-lg font-normal">/ month</span>
        </p>
        <ul className="mt-6 space-y-2 text-left text-gray-600 dark:text-gray-400">
          <li>5 Users</li>
          <li>20GB Storage</li>
          <li>Priority Support</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full w-full">
          Sign Up
        </button>
      </div>
    </div>

    {/* Premium Plan */}
    <div className="w-full bg-white hover:border-purple-500 border-2 cursor-pointer hover:scale-105 transition-transform duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:border-blue-800 rounded-lg shadow-lg">
    <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Premium</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">For large organizations and advanced features.</p>
        <p className="mt-4 text-3xl font-bold text-blue-600">
          $50 <span className="text-lg font-normal">/ month</span>
        </p>
        <ul className="mt-6 space-y-2 text-left text-gray-600 dark:text-gray-400">
          <li>Unlimited Users</li>
          <li>100GB Storage</li>
          <li>24/7 Support</li>
        </ul>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full w-full">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</section>
<section className=" ">
<section className="container px-4 py-10 mx-auto ">
  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Our Company Team Member</h1>
  <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Basic Plan */}
<div className="w-full bg-white hover:border-purple-500 border-2 cursor-pointer hover:scale-105 transition-transform duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:border-blue-800 rounded-lg shadow-lg">
    <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">John Doe, CEO</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Chief Executive Officer.</p>
        <p className="mt-4 text-3xl font-bold text-blue-600">$150,000 <span className="text-lg font-normal">/ year</span></p>
        <ul className="mt-6 space-y-2 text-left text-gray-600 dark:text-gray-300">
        <li>Oversees Company Strategy and Growth</li>
        <li>Leads Innovation and Product Development</li>
        <li>Mentors Senior Leadership</li>
        <li>Ensures Long-Term Sustainability and Vision</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full w-full">Learn More</button>
      </div>
    </div>

    {/* Standard Plan */}
    <div className="w-full bg-white hover:border-purple-500 border-2 cursor-pointer hover:scale-105 transition-transform duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:border-blue-800 rounded-lg shadow-lg">
    <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Jane Smith, CMO</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Chief Marketing Officer</p>
        <p className="mt-4 text-3xl font-bold text-green-600">$120,000 <span className="text-lg font-normal">/ year</span></p>
        <ul className="mt-6 space-y-2 text-left text-gray-600 dark:text-gray-300">
      <li>Develops and Executes Marketing Campaigns</li>
      <li>Enhances Brand Awareness</li>
      <li>Leads Digital and Social Media Strategy</li>
      <li>Analyzes Market Trends and Consumer Insights</li>
    </ul>
    <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full w-full">Learn More</button>
      </div>
    </div>

    {/* Premium Plan */}
    <div className="w-full bg-white hover:border-purple-500 border-2 cursor-pointer hover:scale-105 transition-transform duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 dark:hover:border-blue-800 rounded-lg shadow-lg">
    <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">David Johnson, CTO</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Chief Technology Officer features.</p>
        <p className="mt-4 text-3xl font-bold text-purple-600">$140,000 <span className="text-lg font-normal">/ year</span></p>
    <ul className="mt-6 space-y-2 text-left text-gray-600 dark:text-gray-300">
      <li>Leads Technology Strategy and Innovation</li>
      <li>Oversees Product Development and Engineering</li>
      <li>Guides the Technical Team and Ensures System Security</li>
      <li>Aligns Technology with Business Goals</li>
    </ul>
    <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full w-full">Learn More</button>
      </div>
    </div>
  </div>
</section>


</section>
<section className="p-24 container px-4 py-10 mx-auto">
  <h1 className="text-3xl mb-10 font-bold">Top 10 Blog</h1>
<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Blog 1 Card */}
  <div className="bg-white hover:scale-105 transition dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <Image 
      src={photo1}
        // src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        alt="Blog 1"
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 1</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Short description of the blog post that highlights the key points and draws readers in.</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-500 dark:text-gray-400">Jan 20, 2025</span>
        <Link href="blog" className="text-blue-600 hover:text-blue-800">Read More</Link>
      </div>
    </div>
  </div>

  {/* Blog 2 Card */}
  <div className="bg-white hover:scale-105 transition dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <Image
      src={photo2}
        // src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
        alt="Blog 2"
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 2</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">A captivating introduction to another blog post with key takeaways and engaging content.</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-500 dark:text-gray-400">Feb 5, 2025</span>
        <Link href="blog" className="text-blue-600 hover:text-blue-800">Read More</Link>
      </div>
    </div>
  </div>

  {/* Blog 3 Card */}
  <div className="bg-white  hover:scale-105 transition dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
    <div className="relative">
      <Image
      src={photo3}
        // src="https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww" 
        alt="Blog 3"
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-0 left-0 bg-black opacity-50 w-full h-full"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Blog Title 3</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">An insightful summary that will encourage visitors to dive deeper into the article for more knowledge.</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-500 dark:text-gray-400">Feb 10, 2025</span>
        <Link href="blog" className="text-blue-600 hover:text-blue-800">Read More</Link>
      </div>
    </div>
  </div>
</div>

</section>
</main>

<Footer/>

    </div>
    </div>
  );
}
