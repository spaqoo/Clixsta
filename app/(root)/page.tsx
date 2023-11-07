"use client"
import { Button } from "@material-tailwind/react";
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowDown } from "react-icons/hi"

export default function Home() {
  return (
    <main>




      {/* Header */}
      <header className="grid grid-cols-1 h-[100vh] lg:grid-cols-2 p-10 lg:p-20 lg:py-10 text-white md:h-[100vh] bg-[url('https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-center bg-cover no-repeat">
        <div className="space-y-7 flex flex-col justify-center  pt-14">
          <div className="text-2xl lg:text-5xl font-semibold">Ready For Next</div>
          <div className="text-5xl lg:text-8xl font-bold">Big Thing?</div>
          <div className="text-md lg:text-3xl font-semibold">
            We are data-driven digital marketing agency who knows how to elevate your online business ranking and create beautiful visuals that works best.
          </div>
          <ul className="flex gap-5">
            <Button className="p-3 bg-red-500 px-5 rounded">ABOUT COMPANY</Button>
            <Button className="p-3 border-2 px-5 rounded">CONTACT US</Button>
          </ul>
          <div className="text-sm font-bold flex items-center gap-3">
            <Link
              href="#about"
              aria-activedescendantlass="active"
            >
              <HiArrowDown size={35} className="animate-bounce" />
            </Link>
            SCROLL TO EXPLORE
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="clircle bg-red-500 p-10 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </header>
      {/* Header */}


      {/* section */}
      <section id='about' className="p-10 lg:p-20 lg:px-44 text-center space-y-5 flex flex-col justify-center items-center">
        <div className="text-md lg:text-xl text-red-500 font-semibold">12 Years of Brilliance</div>
        <div className="text-3xl lg:text-6xl ">
          1000+ Customers & 500+
          Online Reviews Being The Best
          Digital Marketing Company
        </div>
        <div className="text-lg w-5/6">
          Artimization is a digital marketing company that offers web design, website development,
          social media marketing, and SEO services globally. Our goal is to help your brand succeed
          on social media platforms and engage with your audience.
        </div>
        <div className="text-7xl lg:text-[130px] text-red-500 font-semibold font-bold">Projects</div>
      </section>
      {/* section */}



      {/* section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20 gap-10">
        <img src="https://www.artimization.com/wp-content/uploads/2023/01/lifestyle-redesign.jpg" alt="" className='rounded-2xl' />
        <div className="space-y-5">
          <span className="text-sm border-2 rounded-full p-1 px-3">E-COMMERCE, WEBSITE DESIGN</span>
          <div className="text-3xl lg:text-4xl">Lifestyle Collection</div>
          <div className="text-lg">
            LifeStyle Collection is well known for its extensive assortment of branded, 100% authentic and genuine products, a one stop solution to associate the consumer with the brand savvy world.
          </div>
          <div className="text-md lg:text-lg text-red-500 font-semibold">SOLUTION OFFERINGS</div>
          <div className="">
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Redesign & Development</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Worpress with Wocommerce</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Improve UI/UX</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Vultr High Frequency Server</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Content Delivery Network (CDN)</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Optimize Speed & Security</div>
          </div>
          <div className="text-lg text-red-500 font-semibold">Visit Live Website</div>
        </div>
      </div>
      {/* section */}


      {/* section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20 lg:gap-10">
        <div className="space-y-5">
          <span className="text-sm border-2 rounded-full p-1 px-3">SOFTWARE, APPLICATION DESIGN</span>
          <div className="text-3xl lg:text-4xl font-semibold">Teamenia, Project & Chat</div>
          <div className="text-lg">
            The Teamenia Project Management System aims to serve managers by providing them with an easy-to-use digital system that assists in simple navigation, payment processing, and real time chat.
          </div>
          <div className="">
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Design & Development</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              PHP, Ajax chat, Reporting, Reporting</div>
          </div>
          <div className="text-md lg:text-lg text-red-500 font-semibold">Visit Live Website</div>
          <div className="p-10 space-y-3 shadow-xl">
            <div className="text-sm">
              “Our team has found great success in being able to collaborate, share information and updates, and keep ourselves organized with the use of the teamenia project management system.”
            </div>
            <div className=" flex gap-2">
              <img src="https://www.artimization.com/wp-content/uploads/2022/12/teamenia-icon.jpg" alt="" className='rounded-full' />
              <div className="">
                <div className="text-sm font-bold">Jasica</div>
                <div className="text-sm">Director of Teamenia</div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://www.artimization.com/wp-content/uploads/2023/01/teamenia.jpg" alt="" className='rounded-2xl my-5' />
      </div>
      {/* section */}

      <div className="flex justify-center items-center">
        <Button className="p-3 px-10 rounded bg-black text-white">SHOW ALL PORTFOLIO</Button>
      </div>

      {/* section */}
      <section className="flex text-center flex-col justify-center items-center p-10 lg:p-20 space-y-5">
        <div className="text-2xl lg:text-5xl lg:w-4/6 font-semibold">
          Excellent Services &
          Innovative Branding Strategies
        </div>
        <div className="text-md lg:text-xl lg:w-4/6">
          Our state-of-the-art strategies are designed to take your business’s success to the
          next level, backed by industry experts with extensive experience in creating and
          executing winning strategies.
        </div>lg:
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="text-start p-10 gap-2 flex flex-col border-r justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/brand-development-icon.png.webp" alt="" />
            <div className="text-md lg:text-3xl font-semibold">Branding
              Development</div>
            <div className="text-sm text-gray-500">
              Visual Identity <br />
              Brand Assets <br />
              Brand Guidelines
            </div>
            <div className="text-md lg:text-lg text-red-500 font-semibold">Explore Now</div>
          </div>
          <div className="text-start pt-10 pl-10 gap-2 flex flex-col border-r justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/digital-marketing.png.webp" alt="" />
            <div className="text-md lg:text-3xl font-semibold">Digital <br />
              Marketing</div>
            <div className="text-sm text-gray-500">
              Search Engine Optimization
              Social media marketing
              Improvement in ROI
            </div>
            <div className="text-md lg:text-lg text-red-500 font-semibold">Explore Now</div>
          </div>
          <div className="text-start p-10 gap-2 flex flex-col border-r justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/website-development-icon.png.webp" alt="" />
            <div className="text-md lg:text-3xl font-semibold">Website
              Development</div>
            <div className="text-sm text-gray-500">
              Front-end Development
              CMS Development
              Web Apps
            </div>
            <div className="text-md lg:text-lg text-red-500 font-semibold">Explore Now</div>
          </div>
          <div className="text-start p-10  gap-2 flex flex-col  justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/graphic-design-icon.png.webp" alt="" />
            <div className="text-md lg:text-3xl font-semibold">Graphic <br />
              Design</div>
            <div className="text-sm text-gray-500">
              Logo Design
              Borchure Design
              Flyer Design, Many more
            </div>
            <div className="text-md lg:text-lg text-red-500 font-semibold">Explore Now</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button className="p-3 px-10 rounded  bg-black text-white">VIEW ALL SERVICES</Button>
        </div>
      </section>
      {/* section */}





      {/* section */}
      <div className="p-10 lg:p-20">
        <section className="grid lg:grid-cols-2 border bg-gray-800 text-white">
          <div className=" space-y-10 p-5 lg:p-10">
            <div className="text-md lg:text-lg text-red-500 font-semibold">WATCH NOW</div>
            <div className="text-3xl lg:text-4xl font-semibold">
              I Got My First Order With SEO Services Taken From Artimization
            </div>
            <div className="text-sm text-gray-500">
              Online Jewelry Store Owner Expresses Her Feedback & Experience About Our Branding & Marketing Services. In Just 3 Months, She have got her first order through our Targetted SEO services.
            </div>
            <div className="text-md lg:text-lg text-red-500 font-semibold">Hear From Happy Client</div>
          </div>
          <div className="bg-gray-700 h-[76vh] p-10 bg-[url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-center bg-cover no-repeat">
          </div>
        </section>

      </div>
      {/* section */}


      <section className=" p-10 lg:p-20 flex py-10 flex-col lg:flex-row lg:gap-24 bg-gray-900 text-white">
        <div className="lg:w-3/5 space-y-5">
          <div className="text-3xl lg:text-4xl font-semibold">Let’s Get You Ranked!</div>
          <div className="text-md lg:text-xl">Measure Your Websites Performance</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <input type="text" placeholder='Your Name*' className="p-3 rounded bg-white text-black" />
            <input type="text" placeholder='Your Email*' className="p-3 rounded bg-white text-black" />
            <input type="text" placeholder='Phone*' className="p-3 rounded bg-white text-black" />
            <input type="text" placeholder='Website URL*' className="p-3 rounded bg-white text-black" />
          </div>
          <select name="" id="" className='text-gray-500 w-full p-3 text-md rounded bg-white text-black'>
            <option value="">What are you interested in?</option>
          </select>
          <Button className="rounded p-3 px-6 bg-red-500 font-semibold text-white">INCREASE MY SALES</Button>
          <div className="text-lg">
            Will contact you in 1 working day*
          </div>
        </div>

        <div className="lg:w-2/5 py-10 space-y-5">
          <div className="text-3xl lg:text-4xl font-semibold">
            Want to speak with an
            SEO strategist? Reach us here!
          </div>
          <div className="text-md lg:text-lg text-red-500 font-semibold">CALL US:</div>
          <div className="text-lg">+1234567890</div>
          <div className="text-md lg:text-lg text-red-500 font-semibold">Email</div>
          <div className="text-lg">email@gmail.com</div>
          <div className="text-md lg:text-lg text-red-500 font-semibold">FAX</div>
          <div className="text-3xl font-semibold">Seriously?</div>
        </div>
      </section>


      {/* section */}
      <section className="P-10 lg:p-20  text-black bg-white flex flex-col justify-center items-center">
        <div className="text-2xl lg:text-5xl text-center font-semibold">Technology Partners</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-10">

          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/adobe.png" alt="" />
            <div className="text-md lg:text-xl text-center">Adobe Solution Partner Program</div>
          </div>


          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/aws.png" alt="" />
            <div className="text-md lg:text-xl text-center">Amazon Web Services Certified Partner</div>
          </div>



          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/google.jpg" alt="" />
            <div className="text-md lg:text-xl text-center">Google Developer Certified Agency</div>
          </div>



          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/wordpress.jpg" alt="" />
            <div className="text-md lg:text-xl text-center">WordPress VIP Developer Partner</div>
          </div>


        </div>


        <div className="text-2xl lg:text-5xl text-center font-semibold">Technologies We Work With</div>
        <div className=" py-10 lg:w-3/5">
          <div className="grid grid-cols-5">
            <div className="text-md lg:text-xl text-center">Front End</div>
            <div className="text-md lg:text-xl text-center">Backend</div>
            <div className="text-md lg:text-xl text-center">CMS</div>
            <div className="text-md lg:text-xl text-center">Servers</div>
            <div className="text-md lg:text-xl text-center">Software</div>
          </div>
          <div className="flex justify-center items-center py-10 gap-10">
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/angular.svg" className='h-20' alt="" />
              <div className="text-md lg:text-xl text-center">Angular Js</div>
            </div>
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/ts.svg" className='h-20' alt="" />
              <div className="text-md lg:text-xl text-center">Typescript</div>
            </div>
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/vue.svg" className='h-20' alt="" />
              <div className="text-md lg:text-xl text-center">Vue Js</div>
            </div>
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/html.svg" className='h-20' alt="" />
              <div className="text-md lg:text-xl text-center">Html5</div>
            </div>
          </div>
        </div>


      </section>
      {/* section */}


      {/* section */}
      <section className="p-10 bg-red-500 text-white text-center space-y-5 flex flex-col justify-center items-center">
        <div className="text-2xl lg:text-5xl text-center font-semibold">Do you have any Question?</div>
        <div className="text-md w-4/5">
          Artimization team believes in entertaining our visitors and is ready to answer your questions.
          Type down your thoughts and get perfect possible solutions to your questions.
        </div>
        <span className="flex gap-5">
          <Button className="p-3 px-6 rounded text-white bg-black">CONTACT US</Button>
          <Button className="p-3 px-6 rounded  border-2">BUSINESS PROFILE</Button>
        </span>
      </section>
      {/* section */}


    </main>
  )
}
