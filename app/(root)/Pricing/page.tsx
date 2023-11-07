"use client"
import {
  Button, Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from 'react'
import { useTheme } from "next-themes"

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const page = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  return (
    <div>
      <div className={`grid grid-cols-1 p-10 md:grid-cols-2 md:px-20 py-10  pt-32  md:h-[100vh] gap-20 ${currentTheme === "dark" ? "bg-[#172d41] text-gray-100" : "bg-gray-200 white text-black"}`}>
        <div className="flex flex-col space-y-5 justify-center">
          <div className="text-4xl font-semibold">
            WordPress Website Design
            & Development Best Packages Plan & Pricing
          </div>
          <div className="text-2xl font-semibold">
            Custom WordPress Business Website Design
          </div>
          <div className="text-md">
            We offers the best WordPress website design & development Packages in affordable budget. The business website is now the backbone and the infrastructure around which you build your business.
          </div>
          <div className="grid grid-cols-2">

            <div className="space-y-3">
              <div className="text-md font-semibold">Custom Website design</div>
              <div className="text-md font-semibold">All Final Master Files</div>
              <div className="text-md font-semibold">Unlimited Revision</div>
            </div>

            <div className="space-y-3">
              <div className="text-md font-semibold">24/7 Design Consultancy</div>
              <div className="text-md font-semibold">100% Ownership Rights</div>
              <div className="text-md font-semibold">100% Money Back Guareentee</div>
            </div>
          </div>
          <ul className="flex gap-5">
            <Button className="p-3 bg-red-500 px-7 rounded">View Packages</Button>
            <Button className="p-3 px-7 ring-1 rounded">Make a Custom Package</Button>
          </ul>

        </div>
        <div className="flex justify-center items-center">
          <img src="https://www.artimization.com/wp-content/uploads/2020/04/Website-Design-Development.jpg.webp" alt="" className='rounded-2xl' />
        </div>
      </div>

      <div className="p-10 md:p-20 flex flex-col md:flex-row gap-20 md:px-44">
        <div className="flex flex-col space-y-5">
          <div className="text-4xl font-semibold">
            Get your business noticed with
            Artimization Web Design Services
          </div>
          <div className="text-md">
            Website Development in view of your client. Modern website style is more required than making an appealing website. Thought of client experience, search engine optimization, usability, and specialized details are only a couple of components that are associated with building up a website that is intended to perform in the present focused market place.
          </div>
        </div>
        <img src="https://www.artimization.com/wp-content/uploads/2020/05/100-satisfaction-1.png.webp" alt="" />
      </div>


      {/* <!-- Container for demo purpose --> */}
      <div className="p-20 ">
        {/* <!-- Section: Design Block --> */}
        <section >
          <h2 className="mb-6 text-center text-3xl font-bold">Pricing</h2>

          <div className="grid gap-6 md:grid-cols-2 text-black lg:grid-cols-3 xl:gap-x-12">


            <div className="mb-6 lg:mb-0">
              <div
                className="block h-full border rounded-lg">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Basic</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 129</strong>
                    <small className="text-sm ">/year</small>
                  </h3>


                  <Button type="Button"
                    className="w-full rounded p-3 hover:bg-gray-800 bg-black text-white"
                    data-te-ripple-init data-te-ripple-color="light">
                    Buy
                  </Button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>One professionally designed website
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Up to 5 web pages
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Basic SEO optimization
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Regular updates and maintenance
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Email support
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div
                className="block h-full rounded-lg border border-primary">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Advanced</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 299</strong>
                    <small className="text-sm ">/year</small>
                  </h3>

                  <Button type="Button"
                    className="w-full rounded p-3 hover:bg-gray-800 bg-black text-white"
                    data-te-ripple-init data-te-ripple-color="light">
                    Buy
                  </Button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>One custom-designed website
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Up to 10 web pages
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Advanced SEO optimization
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Monthly content updates
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Priority email and phone support
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Basic e-commerce functionality
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div
                className="block h-full border rounded-lg">
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Enterprise</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 499</strong>
                    <small className="text-sm ">/year</small>
                  </h3>

                  <Button type="Button"
                    className="w-full rounded p-3 hover:bg-gray-800 bg-black text-white"
                    data-te-ripple-init data-te-ripple-color="light">
                    Buy
                  </Button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Custom-designed website with advanced features
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited web pages
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Enhanced SEO optimization
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Weekly content updates
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>24/7 priority email, phone, and chat support
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Full e-commerce functionality with payment gateway integration
                    </li>
                    <li className="mb-4 flex">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Drag&amp;Drop
                      builder
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}



      <div className="p-10">
        <img src="https://www.artimization.com/wp-content/uploads/2019/12/ecommerce-hover.jpg.webp" alt="" className='w-full' />
      </div>


      <div className="p-10 md:p-20 flex flex-col justify-center items-center">
        <div className="text-5xl font-semibold">
          We design foundations <br />
          with trust and sincerity
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 py-10">

          <div className="flex flex-col justify-center items-center space-y-5 p-14 border-r">
            <div className="text-5xl font-semibold">1000+</div>
            <div className="text-md font-semibold text-red-500">SATISFIED CLIENTS</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5 p-14 px-5 border-r">
            <div className="text-5xl font-semibold">100%</div>
            <div className="text-md font-semibold text-red-500">MONEY BACK GUARANTEE</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5 p-14 border-r">
            <div className="text-5xl font-semibold">11</div>
            <div className="text-md font-semibold text-red-500">YEARS EXPERIENCE</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-5 p-14">
            <div className="text-5xl font-semibold">500 +</div>
            <div className="text-md font-semibold text-red-500">FIVE STAR REVIEWS</div>
          </div>

        </div>
      </div>


      <div className="p-5 md:p-20 flex flex-col md:justify-center md:items-center md:space-y-5">
        <div className="text-xl text-red-500">PORTFOLIO</div>
        <div className="text-5xl font-semibold">
          Our Latest Website Layout
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:py-10 md:gap-3">

          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/ashray-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/matrix-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/tradify-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/cbd-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/cbd-1-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/shanti-1-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/cosmia-1-300x204.jpg')] p-32 h-full rounded bg-no-repeat bg-cover bg-center"></div>

        </div>
        <Button className="p-3 text-white bg-black px-10 rounded">SHOW ALL</Button>

      </div>



      <div className="p-10 md:p-20 flex flex-col justify-center items-center">
        <div className="text-xl text-red-500">WHAT NEED TO MAKE</div>
        <div className="text-5xl font-semibold">
          Website Successful
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-20">

          <div className="flex flex-col p-10 justify-center items-center space-y-5 border-r  border-b">
            <div className="text-3xl font-semibold">Responsive Website</div>
            <div className="text-lg md:text-center">
              Everything begins with responsive website architecture. Quick loading time = happy visitors. Google has clarified that they lean toward sites that respond rapidly. We overview the majority of our customers, the consequences of which go directly to our CEO.
            </div>
          </div>



          <div className="flex flex-col p-10 justify-center items-center space-y-5  border-b border-r">
            <div className="text-3xl font-semibold">Clean Coding</div>
            <div className="text-lg md:text-center">
              A simple to navigate, rational page structure helps your clients, and the web engines find what they are searching for. Our website design, composition and development group uses up-to-date coding practices with clean HTML5 and CSS3.
            </div>
          </div>



          <div className="flex flex-col p-10 justify-center items-center space-y-5 border-b">
            <div className="text-3xl font-semibold">Mobile Friendly</div>
            <div className="text-lg md:text-center">
              With more than 50% of all web movement originating from a mobile device, making a mobile-friendly website is not any more optional: it’s a need.
              <br />
              The majority of our sites are produced to perform flawlessly on each device.
            </div>
          </div>


        </div>
      </div>



      <div className="flex flex-col p-10  md:flex-row md:p-20 md:gap-44 ">
        <div className="md:w-3/5 flex flex-col justify-center space-y-5">
          <div className="text-4xl font-semibold">Finding Ecommerce <br />
            To Sell your Products?</div>
          <div className="text-md">
            Artimization offers a full-suite of Ecommerce business development service, including procedure, incorporations, migration and obviously the working of results driven online stores. We additionally give continuous 24×7 help and support to keep your website live for business and ready to generate income consistently.
          </div>
          <div className="flex gap-5 items-center">
            <Button className="p-3 text-white bg-black px-5 rounded">ABOUT COMPANY</Button>
            <div className="text-md"> Get Free Consultation </div>
          </div>
        </div>
        <div className="md:w-2/5">
          <img src="https://www.artimization.com/wp-content/uploads/2018/09/online-shop-2.png.webp" alt="" className="w-full" />
        </div>
      </div>


      <div className="flex flex-col-reverse p-10  md:flex-row md:p-20 md:gap-44 ">
        <div className="md:w-2/5">
          <img src="https://www.artimization.com/wp-content/uploads/2019/12/custom-website-design.png.webp" alt="" className="w-full" />
        </div>
        <div className="md:w-3/5 flex flex-col justify-center space-y-5">
          <div className="text-4xl font-semibold">
            Top rated custom website <br /> development services
          </div>
          <div className="text-md">
            At the point when the issue as a main priority is that of custom web development then we ensure that our customers get the space that they are looking for in the online world.
            <br />
            <br />
            Their dream of traveling places from the purpose of start to where they need to reach should be acknowledged with us.
          </div>
        </div>
      </div>



      <div className="flex flex-col p-10  md:flex-row md:p-20 md:gap-44  bg-white text-black">
        <div className="md:w-3/5 flex flex-col justify-center space-y-5">
          <div className="text-4xl font-semibold">Finding Ecommerce <br />
            To Sell your Products?</div>
          <div className="text-md">
            Artimization offers a full-suite of Ecommerce business development service, including procedure, incorporations, migration and obviously the working of results driven online stores. We additionally give continuous 24×7 help and support to keep your website live for business and ready to generate income consistently.
          </div>
          <div className="flex gap-5 items-center">
            <Button className="p-2 text-white bg-black px-5 rounded">ABOUT COMPANY</Button>
            <div className="text-md"> Get Free Consultation </div>
          </div>
        </div>
        <div className="md:w-2/5">
          <img src="https://www.artimization.com/wp-content/uploads/2021/02/Web-Design-Packages.jpg" alt="" className="w-full" />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="pl-20 flex flex-col  space-y-5">
          <div className="text-5xl font-semibold text-red-500">Small Business <br />
            Starter kit Package.</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col space-y-3">
              <div className="text-3xl font-semibold">Logo Design</div>
              <div className="text-xl">2 Logo Design Concepts</div>
              <div className="text-xl">Grayscale Format</div>
              <div className="text-xl">Free File Formats (Ai, Jpg, Psd, Png)</div>
              <div className="text-xl">Copyright Protection of the Logo</div>
              <div className="text-xl">2 Dedicated Designers</div>
              <div className="text-3xl font-semibold">Stationery Design</div>
              <div className="text-xl">Business Card Design</div>
              <div className="text-xl">Letterhead Design</div>
              <div className="text-xl">Envelope Design</div>
              <div className="text-xl">Compliment Slip Design</div>
              <div className="text-xl">Identity Card Design</div>
              <div className="text-xl">1 Standy Design</div>
              <div className="text-xl">Email Signature</div>
            </div>


            <div className="flex flex-col space-y-3">
              <div className="text-3xl font-semibold">Website Design</div>
              <div className="text-xl">5 Page Website</div>
              <div className="text-xl">Custom Home Page Design</div>
              <div className="text-xl">10 Stock Photos</div>
              <div className="text-xl">10 Email Addresses</div>
              <div className="text-xl">Responsive Websit</div>
              <div className="text-xl">Cross Browsers Compatibitlityt</div>
              <div className="text-xl">1 Year Domain Name</div>
              <div className="text-xl">1 Year Hosting</div>
              <div className="text-3xl font-semibold">Brochure & Banners</div>
              <div className="text-xl">1 Flyer Design</div>
              <div className="text-xl">4 Pages Brochure Design</div>
              <div className="text-xl">1 Banner Desig</div>
              <div className="text-xl">Social Media Covers</div>
              <div className="text-xl">Logo Design</div>
            </div>
            <div className="text-3xl font-semibold">View Full Package Details </div>

          </div>
        </div>
        <div className="">
          <img src="https://www.artimization.com/wp-content/uploads/2020/04/business-kit-package.jpg.webp" alt="" className="w-full" />
        </div>
      </div>

      <div className="p-10 md:p-20">

        <div className="text-5xl font-semibold ">
          Read more about <br />
          Web Design & Trends.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-7">

          <div className="flex flex-col shadow ">
            <img src="https://www.artimization.com/wp-content/uploads/2023/02/Shopify-vs-WooCommerce-An-Expert-Comparison-of-the-Top-Ecommerce-Platforms-300x167.jpg" alt="" />
            <div className="p-3 space-y-5 border">
              <div className="text-xl">
                Shopify vs WooCommerce: An Expert Comparison of the Top Ecommerce Platforms
              </div>
              <div className="text-lg">
                In this article, we’ll compare WooCommerce vs Shopify to help you decide which platform is the best fit for your needs.
              </div>
              <div className="text-lg text-red-500">Read Full Story</div>
            </div>
          </div>

          <div className="flex flex-col shadow ">
            <img src="https://www.artimization.com/wp-content/uploads/2023/02/Shopify-vs-WooCommerce-An-Expert-Comparison-of-the-Top-Ecommerce-Platforms-300x167.jpg" alt="" />
            <div className="p-3 space-y-5 border">
              <div className="text-xl">
                Shopify vs WooCommerce: An Expert Comparison of the Top Ecommerce Platforms
              </div>
              <div className="text-lg">
                In this article, we’ll compare WooCommerce vs Shopify to help you decide which platform is the best fit for your needs.
              </div>
              <div className="text-lg text-red-500">Read Full Story</div>
            </div>
          </div>

          <div className="flex flex-col shadow ">
            <img src="https://www.artimization.com/wp-content/uploads/2023/02/Shopify-vs-WooCommerce-An-Expert-Comparison-of-the-Top-Ecommerce-Platforms-300x167.jpg" alt="" />
            <div className="p-3 space-y-5 border">
              <div className="text-xl">
                Shopify vs WooCommerce: An Expert Comparison of the Top Ecommerce Platforms
              </div>
              <div className="text-lg">
                In this article, we’ll compare WooCommerce vs Shopify to help you decide which platform is the best fit for your needs.
              </div>
              <div className="text-lg text-red-500">Read Full Story</div>
            </div>
          </div>


        </div>
      </div>


      <div className="p-10 md:p-20 flex flex-col space-y-5">
        <div className="text-2xl">WEBSITE DESIGN</div>
        <div className="text-5xl font-semibold">Frequently asked questions.</div>
        <hr />

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
            ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>

      </div>


      <div className="px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-3">
          <div className="text-4xl font-semibold">Our Services</div>
          <div className="text-lg">
            Either you are a startup business or running a multi million company. You always need change, innovation and creativity. Our digital capabilities knows what makes you great in untouched Space!
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-2xl text-red-500">Digital Marketing</div>
          <div className="text-2xl text-red-500">Graphic Design</div>
          <div className="text-2xl text-red-500">Website Design</div>
          <div className="text-2xl text-red-500">Web Development</div>
          <div className="text-2xl text-red-500">Ecommerce Development</div>
        </div>


        <div className="space-y-3">
          <div className="text-2xl text-red-500">Email Marketing</div>
          <div className="text-2xl text-red-500">Brand Development</div>
          <div className="text-2xl text-red-500">Social Media</div>
          <div className="text-2xl text-red-500">PPC Management</div>
          <div className="text-2xl text-red-500">Blog Writing Services</div>
        </div>

      </div>



      {/* section */}
      <section className="p-10 bg-gray-800 text-center space-y-5 flex flex-col justify-center items-center text-white">
        <div className="text-5xl text-center font-semibold">Do you have any Question?</div>
        <div className="text-md w-4/5">
          Artimization team believes in entertaining our visitors and is ready to answer your questions.
          Type down your thoughts and get perfect possible solutions to your questions.
        </div>
        <span className="flex gap-5">
          <Button className="p-3 px-6 rounded bg-white text-black">CONTACT US</Button>
          <Button className="p-3 px-6 rounded border-2">BUSINESS PROFILE</Button>
        </span>
      </section>
      {/* section */}


    </div>
  )
}

export default page