"use client"
import {
  Button, Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { CForm } from "@/components/CForm";
import Image from "next/image";
import React from 'react'



const page = () => {
  return (
    <main>
      <div className="p-5 gap-10 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 pt-32 md:gap-20  md:h-[100vh]">
        <div className="space-y-5 flex flex-col justify">
          <div className="text-6xl font-semibold">Website Design Services</div>
          <div className="text-2xl lg:pr-32 font-semibold">
            Web design is the supporting mechanism of your business that speaks emphatically about your services.
          </div>
          <ul className="flex space-x-2 md:flex-row md:space-x-2">
            <Button className="shadow-md p-3 bg-red-500 px-6 rounded">View Plans & Pricing</Button>
            <Button className="shadow-md p-3 border-2 px-6 rounded">Custom Quot</Button>
          </ul>
          <div className="text-2xl font-semibold">or call us: +1 617 275 4776</div>
        </div>
        <div className="flex-col md:flex gap-5 p-2 lg:p-10 border-2 rounded-lg">
          <CForm />
        </div>
      </div>



      <section className="p-5 md:p-44 space-y-5">
        <div className="text-3xl font-semibold md:w-5/6">
          Website design is an essential factor to
          determine your business credibility. Around 48%
          of visitors form a decision in 5 seconds when
          they land on your website.
        </div>
        <div className="text-xl text-gray-500  md:w-5/6">
          The website authenticity and credibility majorly depend on how well your website design performs in front of the Visitor. When someone browses your website, they primarily check everything before they make any action and about 30% to 45% undoubtedly make a purchase because of quality website aesthetics.
        </div>
      </section>







      <section className="flex flex-col md:flex-row items-center p-10 gap-20">
        <div className="md:w-2/6">
          <img src="https://www.artimization.com/wp-content/uploads/2019/12/custom-website-1.jpg" className="h-full" />
        </div>
        <div className="md:w-4/6 space-y-5">
          <div className="text-4xl font-semibold">
            You should must read if are you
            a business owner!
          </div>
          <div className="text-lg text-gray-500">
            A competently built website appears to be essential and advantageous, to stand out amongst your competitors and give them a robust competition. In today’s automated and modern age, people are not looking for your services in newspapers anymore. Your potential customers are searching you on internet especially on Google or Bing, to know details about the brand and its products. People mostly search the website to contact or collect the required information; that’s why it is mandatory to have a classy and exclusive website design to grab the attention of your customers. For each business, it is imperative to have a professionally designed website to add worth to your business and be a sign of a modernized yet certified brand.
            <br />
            <br />
            The numbers of gadgets in the market are increasing exponentially; the development of responsive website design is quite complex, but Artimization is the company that is providing most valuable services of web design across the New York, USA, Miami and various other countries. We are grounding the flags of success for reputed brands through our simple yet unique layouts, since years. It does not matter how diminutive or expanded your business is, we warmly welcome every company that needs to invest in a professional website to increase credibility and provide better user experience to their customers.
          </div>
        </div>
      </section>











      <section className="p-5 md:p-44 space-y-5">
        <div className="text-4xl font-semibold md:w-5/6">
          Website theme customization.
        </div>
        <div className="text-md text-gray-600 font-semibold">
          A Custom website design works 60% better than a premade theme.
        </div>
        <div className="text-md text-gray-500  md:w-5/6">
          The expert says, 38% of people will stop engaging with a website if the content/layout is unattractive. That means a customized website design can exponentially increase the chances of sales and customers acquisition. here at artimization, We can help you in prepare a quality website design layout that matches your business requirement and gives customer engagement. It doesn’t matter if you have wordpress, magento or shopify. We handle everything easily!
        </div>
        <div className="flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 gap-5 items-center">
          <Button className="shadow-md bg-black text-white rounded p-4 px-6 text-md">View Plans & Pricing</Button>
          <Button className="shadow-md bg-transparent rounded p-4 px-6 text-md text-red-500"> Request A Custom Quote </Button>
        </div>
      </section>






      <section className="p-5 md:p-20 grid md:grid-cols-2  gap-10">
        <img src="https://www.artimization.com/wp-content/uploads/2019/12/slider-hover.jpg.webp" className="rounded-2xl" alt="" />
        <img src="https://www.artimization.com/wp-content/uploads/2019/12/ecommerce-hover.jpg.webp" className="rounded-2xl" alt="" />
      </section>





      <section className="p-5 md:p-44 space-y-5">
        <p className="text-4xl font-semibold md:w-3/6">
          Our process is completely
          flawless and modern.
        </p>
        <div className="text-md text-gray-500  md:w-3/6">
          Here are some of the best motives that you should consider Artimization to get a professional and effective web design for your company.
        </div>
      </section>




      <section className="p-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">


        <div className="p-5 space-y-3">
          <div className="flex-col md:flex">
            <div className="text-7xl text-gray-200 font-bold">01.</div>
            <div className="text-2xl font-semibold">
              User-friendly <br />
              layout
            </div>
          </div>
          <div className="text-md text-gray-500">
            We present and embrace the uncomplicated and simple website designs that offer less resistance because there is a smaller amount of content for the visitors to map read in order to find what they are looking for.
          </div>
        </div>


        <div className="p-5 space-y-3">
          <div className="flex-col md:flex">
            <div className="text-7xl text-gray-200 font-bold">02.</div>
            <div className="text-2xl font-semibold">
              Prototypical <br />
              web designs
            </div>
          </div>
          <div className="text-md text-gray-500">
            Our website designers bring into play of assured prototypical web design guidelines. The reason we support prototypical design is that it makes a website seem more realistic as it appears the way visitors think it is supposed to appear.
          </div>
        </div>



        <div className="p-5 space-y-3">
          <div className="flex-col md:flex">
            <div className="text-7xl text-gray-200 font-bold">03.</div>
            <div className="text-2xl font-semibold">
              Less friction <br />
              for visitors
            </div>
          </div>
          <div className="text-md text-gray-500">
            We form the layout that lessens the friction for users and makes a more enjoyable user experience. Our goal is not just to create a website that only fascinates visitors but also create a website that should be easy for visitors to use.
          </div>
        </div>


        <div className="p-5 space-y-3">
          <div className="flex-col md:flex">
            <div className="text-7xl text-gray-200 font-bold">04.</div>
            <div className="text-2xl font-semibold">
              No more probable <br />
              downtime
            </div>
          </div>
          <div className="text-md text-gray-500">
            What if something goes off beam with one of the plug-ins? What if there are any fractious compatibility problems? Regardless of the fact, that the layout of your website plays a crucial role in your site’s performance. At Artimization you will be offered a team of professionals and reliable web designers that will put a stop to the problems of your brands’ site.
          </div>
        </div>


        <div className="p-5 space-y-3">
          <div className="flex-col md:flex">
            <div className="text-7xl text-gray-200 font-bold">05.</div>
            <div className="text-2xl font-semibold">
              We highlight <br />
              your brand
            </div>
          </div>
          <div className="text-md text-gray-500">
            It’s no more a surprise for brands that to be on top of the notch you are supposed to create an outstanding image on search engines mainly on Google. Our professional web design team creates a search engine friendly website for your brands, and we apply all kinds of the essential factors that help your brand to get their site indexed and leveled on top.
          </div>
        </div>


        <div className="p-5 space-y-3">
          <div className="flex-col md:flex">
            <div className="text-7xl text-gray-200 font-bold">06.</div>
            <div className="text-2xl font-semibold">
              Flat to run <br />
              on smart-phones
            </div>
          </div>
          <div className="text-md text-gray-500">
            Websites that are highly responsive and optimized endows with a better user occurrence for your visitors. For that reason, it is much more likely that visitor will hang around for a quite long period of time and will surely look at different sections of your site.
          </div>
        </div>

      </section>








      <section className="p-5 md:p-20 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex-col md:flex items-center">
          <div className="text-4xl font-semibold">
            Compatibility
            & compliance
          </div>
        </div>
        <div className="text-lg text-gray-800 md:w-4/5 flex justify-center items-center">
          We make sure that your website is fully compatible on all latest browsers such as Google Chrome, Mozilla Firefox & Internet Explorer.
        </div>
        <div className="">
          <img src="https://www.artimization.com/wp-content/uploads/2019/12/Group@1.png" alt="" />
        </div>
      </section>

      <hr />


      <section className="p-5 md:p-20 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex-col md:flex  items-center">
          <div className="text-4xl font-semibold">
            Platforms
          </div>
        </div>
        <div className="text-lg text-gray-800 md:w-4/5 flex justify-center items-center">
          We are experts in development website on best CMS such as WordPress, Majento, Shopify, Wix and Much more.
        </div>
        <div className="">
          <img src="https://www.artimization.com/wp-content/uploads/2019/12/cms-technology-1.png" alt="" />
        </div>
      </section>






      {/* section */}
      <div className="flex flex-col md:flex-row items-center px-10 md:px-20 gap-10">
        <img src="https://www.artimization.com/wp-content/uploads/2019/12/custom-responsive-website-1.jpg.webp" alt="" className='rounded-2xl md:w-2/5' />
        <div className="space-y-5 md:w-3/5">
          <div className="text-3xl lg:text-4xl font-semibold">Responsive website design</div>
          <div className="text-lg">
            Most of the people don’t give attention to website responsive indicator. The reason is, they don’t know the real fact what they are missing.
            <br />
            <br />
            Yes, they miss almost 50% of their website traffic just because they don’t have a mobile-optimized website. Responsive website design allows your visitors to navigate their desired products or information easily from mobile or tablets.
            <br />
            <br />
            If your website not yet optimized on devices like laptop, PC, Mobile or tablets, then it’s the right time to speak with our experts and get facilitated.
          </div>
          <div className="">
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mobile-friendly
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Design for every device
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Improve UI/UX</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              High Speed
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Content Delivery Network (CDN)</div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Positive UX
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Helps SEO
            </div>
          </div>
        </div>
      </div>
      {/* section */}


      <section className="p-5 md:p-44 space-y-5">
        <div className="text-3xl font-semibold md:w-5/6">
          Googles drives 75.34% of all internet traffic while
          Bing 9.97%, Baido 9.34% and Yahoo 2.77% (2021).
        </div>
        <div className="text-md text-gray-500  md:w-5/6">
          This means if you are not optimizing your website with right SEO technique then probably you will miss the opportunities to grow your business. The statistics are taken from Netmarketshare
          <br />
          <br />
          With careful consideration of color schemes, typography, responsive design layout and standard design principles, our team will work with you every step of the way toward the creation of impressive and affordable website design for that you’ll be proud to represent your brand.
        </div>
        <div className="flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 gap-5 items-center">
          <Button className="shadow-md bg-black text-white rounded p-4 px-6 text-md">View Plans & Pricing</Button>
          <Button className="shadow-md bg-transparent rounded p-4 px-6 text-md shadow-none hover:shadow-none text-red-500"> Request A Custom Quote </Button>
        </div>
      </section>



      <section className="p-5">
        <div className="p-5 md:p-20 md:px-32 space-y-5 md:text-center border">
          <div className="text-4xl font-semibold">
            When is the last time you redesigned your website?
          </div>
          <div className="text-2xl">
            If you dont remember this now then probably you should consider it as it might be
            outdated with the launch of latest website trends
          </div>
          <div className="flex gap-3">
            <Button className="shadow-md p-3 w-full rounded bg-red-500 text-white text-semibold">VIEW PLANS & PRICING</Button>
            <Button className="shadow-md p-3 w-full rounded border-2 text-white text-semibold">CUSTOM QUOTE</Button>
          </div>
        </div>
      </section>




      <div className="p-5 md:p-20 flex flex-col md:justify-center md:items-center space-y-5">
        <div className="text-5xl font-semibold">
          Our Latest Website Layout
        </div>
        <div className="text-lg md:text-center md:w-4/6">
          Check out the finest quality website designs our team has delivered to almost 80 countries.
          Get ideas for inspiration and consult with our website designing experts at Artimization.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 py-10 md:gap-3">
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/anaj-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/ashray-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/matrix-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/tradify-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/cbd-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/cbd-1-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/shanti-1-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>
          <div className="bg-[url('https://www.artimization.com/wp-content/uploads/2022/11/cosmia-1-300x204.jpg')] p-20 lg:p-32 rounded bg-no-repeat bg-cover"></div>

        </div>
        <Button className="shadow-md p-3 text-white bg-black px-10 rounded">SHOW ALL</Button>

      </div>




      <section className="p-5 md:p-44 space-y-5">
        <div className="text-lg text-red-500 font-semibold">
          CONNECT WITH BEST WEBSITE DESIGN COMPANY
        </div>
        <div className="text-3xl font-semibold md:w-5/6">
          Almost 60% of users say they will not recommend a business that has a badly designed mobile site.
        </div>
        <div className="text-md text-gray-500  md:w-5/6">
          Thats true! According to the sources, If your website is not fully optimized OR its not well design based on your products and services. You will start loosing a potential sales and customers. So, Make sure your website is highly optimized or consult with us for more information.
        </div>
      </section>





      {/* section */}
      <div className="flex flex-col md:flex-row items-center px-10 md:px-20 gap-10">
        <img src="https://www.artimization.com/wp-content/uploads/2019/12/custom-responsive-website-1.jpg.webp" alt="" className='rounded-2xl md:w-2/5' />
        <div className="space-y-5 md:w-3/5">
          <div className="text-lg">
            We access the web all the way through virtual reality earpieces, and smart-phones that have permitted the establishment of completely new sorts of applications, for instance, augmented reality games, so there will be no scarcity of new challenges coming to the fore. A professionally built website is a quick and easy mode for customers to find relevant information about your company also, Website Packages help customers in getting aware about your services or offerings, and the existence of your brand on the topmost search engine builds trust in the minds of your customers. If your brand has a perfectly assembled website, then you don’t have to articulate a lot in order to catch your customer’s attention just let your site speak for your brand.
          </div>
          <div className="text-3xl lg:text-4xl font-semibold">We give out in all sorts
          </div>
          <div className="text-lg">
            Do you aim to generate more revenue along with web traffic? The proficient designers and developers of Artimization are experts in creating effective and valuable layouts for all kinds of e-commerce web designs be it, Wix, Shopify, WordPress or Magento we bestow offer complete customer support by offering a qualitative theme, quicker and speedy access, better user experience, and much more.
          </div>
          <div className="text-3xl lg:text-4xl font-semibold">Productively we offer exclusive services of custom web design and development
          </div>
          <div className="">
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Blog or Personal – Websites
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Non-profit and religious Website
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Business – Websites
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Online Communities
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ecommerce Website
            </div>
            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              B2B / B2C Websites
            </div>


            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Auction Websites
            </div>

            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              School – College Websites
            </div>

            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Event – base Websites
            </div>

            <div className="text-lg flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Photography & Portfolio Websites
            </div>

          </div>
        </div>
      </div>
      {/* section */}









      <div className="p-5 md:px-20 py-10 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
      <section className="p-5 bg-red-500 text-center space-y-5 flex flex-col justify-center items-center">
        <div className="text-5xl text-center font-semibold">Do you have any Question?</div>
        <div className="text-md md:w-4/5">
          Artimization team believes in entertaining our visitors and is ready to answer your questions.
          Type down your thoughts and get perfect possible solutions to your questions.
        </div>
        <span className="flex gap-5">
          <Button className="shadow-md p-3 px-6 rounded bg-white text-black">CONTACT US</Button>
          <Button className="shadow-md p-3 px-6 rounded border-2">BUSINESS PROFILE</Button>
        </span>
      </section>
      {/* section */}

    </main>
  )
}

export default page