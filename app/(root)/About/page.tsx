"use client"
import { Button } from "@material-tailwind/react";
import React from 'react'

const page = () => {
  return (
    <main>

      <header className="p-10 py-32 pb-20 border lg:p-32 text-center flex flex-col justify-center items-center space-y-5 lg:h-[100vh] md:h-[100vh] sm:h-[100vh] ">
        <div className="text-4xl md:text-3xl lg:text-6xl font-semibold">
          Creative Workforce <br />
          Behind Successful Journey!
        </div>
        <div className="text-md lg:text-2xl lg:w-5/6">
          Artimization’s core specialties are website design, UI, SEO and lead generation,
          which we offer as custom-made solutions to drive your business growth.
        </div>
      </header>



      <section className="p-10 py-20 lg:p-20 lg:px-44 space-y-3">
        <div className="text-md lg:text-xl text-red-500 font-semibold">ABOUT US</div>
        <div className="text-2xl lg:w-3/5">
          Artimization is a digital marketing agency that offers technology-driven and strategic solutions
          to enhance your company’s performance in the market.
        </div>
      </section>


      <section className="sm:p-0 flex flex-col lg:flex-row md:p-10 lg:p-20 gap-10 md:first-letter:gap-0 ">
        <div className="lg:w-2/6 md:w-[100%]">
          <img src="logo.png" alt="" className='w-3/6 m-auto md:w-auto ' />

          <div className="relative bottom-10 lg:bottom-0 grid grid-cols-2 lg:left-52 py-20">
            <div className="border p-10 flex flex-col justify-center items-center">
              <div className="text-4xl">2011</div>
              <div className="text-md lg:text-xl text-red-500 font-semibold">Founded</div>
            </div>
            <div className="border p-10 flex flex-col justify-center items-center relative top-32 right-5">
              <div className="text-4xl">11</div>
              <div className="text-md lg:text-xl text-red-500 font-semibold">Years</div>
            </div>
          </div>
        </div>
        <div className="p-10 lg:w-4/6 space-y-5">
          <div className="text-sm lg:text-lg lg:pl-10">
            Our story began with a simple thought: “Reformation needs to be part of our culture. Customers are transforming faster than we are, and if we don’t succeed in reaching them, we’re in misfortune.” We needed one brand that we could go to for trusted products and information. And when we couldn’t find what we were on the lookout for — and realized we weren’t without help — the idea for Artimization was brought forth.
          </div>

          <div className="text-sm lg:text-lg text-red-500 font-semibold">
            With rich affluence of experience in the digital world, Artimization can provide a solution to any of your business’s marketing issues. We are more than capable of providing a professional and quality service.
          </div>

          <div className="text-sm lg:text-lg lg:pl-10">
            Artimization was founded in 2011 by Haris Siddique and Omer Nadeem as a full service, integrated and official Digital marketing firm, offering services to individuals and businesses. Depending upon the individual needs and challenges of each sector we serve, we have articulated our services such that we are able to help our clients excel in their niche. This way, we deliver not just a service but value and experience to our clients.
          </div>
        </div>
      </section>


      <section className="p-10 lg:p-44 flex flex-col justify-center lg:items-center space-y-5">
        <div className="text-3xl lg:text-2xl font-semibold lg:text-7xl font-semibold">Meet The Founders</div>
        <div className="text-md lg:w-4/6">
          Artimization was born out of a desire to provide safe and effective solutions that deliver real results. We knew that customers shouldn’t have to choose between what works and what’s good for them, so we set out to create products that are both effective and safe.
          <br />
          <br />
          Managing strategic goals while dealing with operational processes can be a challenge, but our team’s unique combination of skills and the trust of our customers in our company, made it possible. Together, we form a dynamic and powerful force, united by mutual support, knowledge sharing, trust and shared values.
          <br />
          <br />
          We are proud of the positive impact we are making for our customers and the difference we are creating and we will continue to do so in the future.
        </div>
      </section>


      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20 gap-7">
        <div className="space-y-5">
          <img src="https://www.artimization.com/wp-content/uploads/2018/07/h.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Haris Siddique</div>
          <div className="text-md">
            Haris Siddique is serving as Co – Founder and Head of Business Development for Artimization. He has been associated with company since beginning. Artimization believes success wouldn’t be possible without its dedication, honesty and skillset. His management services and clients discussion leads towards conclusion and actual requirements. His business planning skills and client communication established long-term partnership with many local and international companies all around the world.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Co – Founder | Head of Business Development</div>
        </div>
        <div className="space-y-5 pt-32">
          <img src="https://www.artimization.com/wp-content/uploads/2018/07/omer-nadeem.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Omer Nadeem</div>
          <div className="text-md">
            After pursuing a Higher education and having worked at a corporate environment for few years, in the year 2011, Omer gave up his career to pursue his passion for entrepreneurship, designing, and management as a full-time career. Artimization has been a significant contribution to his life.
            <br />
            <br />
            The company model is built on Omer’s design vision and entrepreneurial spirit. Omer believes that each client is worthy of supreme quality marketing solutions and the full attention of an expert and agile team—and he has the skills and drives to bring the best talent to take on every task.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Co – Founder | Head of Business Development</div>
        </div>
      </div>



      <div className="p-10 lg:p-20 lg:px-52 flex flex-col justify-cener space-y-5">
        <div className="text-2xl font-semibold lg:text-7xl">Our Family</div>
        <div className="text-sm lg:text-md lg:w-4/5">
          Single-handedly we can do so little, together with the art of thinking independently, we can work well for our shared vision– towards organizational objectives. We are a talented team with sound judgment and best professional profiles. None of us is as intelligent and well-turned out as all of us. This is us, and we are the pride of Artimization.
        </div>
      </div>


      <section className="flex flex-col lg:flex-row gap-10 p-10 lg:p-20">
        <div className="lg:w-2/6 flex flex-col items-center text-center flex-col space-y-3">
          <img src="https://www.artimization.com/wp-content/uploads/2023/01/award.png" alt="" />
          <div className="text-3xl text-red-500 font-semibold">
            Senior <br />
            Content Manager
          </div>
        </div>
        <div className="lg:w-4/6 space-y-5">
          <img src="https://www.artimization.com/wp-content/uploads/2023/02/5.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Farah Khan</div>
          <div className="text-md lg:w-4/5 lg:pr-10">
            As Content Manager, Farah Khan is a driving force in providing creative and innovative strategies and content for the company. She has an in-depth understanding of the latest trends and technologies leading to relevant content that resonates with multiple target audiences. Her ability to generate content, manage projects, meet deadlines and work within budget constraints have been invaluable in effectively increasing visibility and boosting engagement rates.
          </div>
          <div className="text-lg text-red-500 font-semibold">Content Manager</div>
        </div>
      </section>




      <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-20 lg:px-32 gap-7">

        <div className="space-y-5">
          <img src="https://www.artimization.com/wp-content/uploads/2023/02/3.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Mahnur Iqbal</div>
          <div className="text-md">
            As a senior content writer, Mahnur has extensive experience writing for multiple industries. She also crafts compelling copy that engages readers and drives action. With an unwavering commitment to quality, Mahnur consistently delivers top-notch work that resonates with audiences from all backgrounds.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Senior Content Writer</div>
        </div>
        <div className="space-y-5 pt-32">
          <img src="https://www.artimization.com/wp-content/uploads/2023/02/hafsa.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Hafsa Nadeem</div>
          <div className="text-md">
            Hafsa is well recognized by her amazing talent to manage most difficult projects. Throughout journey of Artimization she has worked with dedication and provided services in many fields including business development, graphic designing, sales management and relationship building with other organizations and clients. She has assisted 200+ local and international projects. Artimization takes Hafsa Nadeem as a true asset because she has art of assisting and satisfying client's requirements.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Senoir Project Manager</div>
        </div>


        <div className="space-y-5">
          <img src="https://www.artimization.com/wp-content/uploads/2020/07/Areeba-Khan.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Areeba Khan</div>
          <div className="text-md">
            Areeba is a creative content writer and the latest addition to Artimization’s team. With an experience of over 2 years, she is well-versed in creating interesting and engaging content for our clients. Areeba is dedicated to assisting our clients in reaching new heights of success through her impactful words that stand out from the crowd.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Creative Content Writer</div>
        </div>
        <div className="space-y-5 pt-32">
          <img src="https://www.artimization.com/wp-content/uploads/2019/03/ali.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Aly Zulfiqar</div>
          <div className="text-md">
            Aly loves to play with keywords to achieve ranking and traffic for websites. His passion brings great value to Artimization. He has vast experience of finding backlink opportunities and indexing keywords on search engines like Google, Bing and Yahoo!
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Seo Specialist</div>
        </div>


        <div className="space-y-5">
          <img src="https://www.artimization.com/wp-content/uploads/2023/02/2.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Shayan Nadeem</div>
          <div className="text-md">
            Shayan Nadeem is a highly skilled Content Editor, with extensive proofreading abilities and impressive knowledge in content management systems. He has an intuitive understanding of editing that makes him an invaluable asset to our team, as he constantly strives to ensure that all content is of the highest quality. Additionally, his experience with CMSs allows him to quickly create user-friendly and visually attractive webpages that adhere to our company’s standards.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Content Editor</div>
        </div>
        <div className="space-y-5 pt-32">
          <img src="https://www.artimization.com/wp-content/uploads/2023/02/4.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Hareem Palwasha</div>
          <div className="text-md">
            Hareem Palwasha is a creative content writer with an impressive doctorate degree. She has been a valuable asset to the companyproviding expert opinions and writing pieces that have helped create great success for our clients. She always brings creative ideas to the table with her diverse background and knowledge in SEO, and social media strategies.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Creative Content Writer</div>
        </div>

        <div className="space-y-5">
          <img src="https://www.artimization.com/wp-content/uploads/2023/02/1.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Sidra Khalid</div>
          <div className="text-md">
            Sidra Khalid is a creative content writer with an impressive portfolio of captivating stories, articles and blog posts crafted for her clients. With her eye for detail and knack for communicating complex ideas in a simple yet engaging way, she has become a trusted associate who consistently delivers high-quality work that surpasses expectations.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">Creative Content Writer</div>
        </div>

        <div className="space-y-5 pt-32">
          <img src="https://www.artimization.com/wp-content/uploads/2023/02/Siadat-Ali.jpg" alt="" />
          <div className="text-2xl lg:text-5xl font-semibold">Siadat Ali</div>
          <div className="text-md">
            Siadat Ali is an experienced and creative content writer who specializes in creating engaging digital marketing content. He has a knack for delivering captivating narratives and compelling messaging to reach the target audience. With his deep understanding of the industry, Siadat is able to craft SEO-savvy copy that helps businesses increase their online presence significantly.
          </div>
          <div className="text-md lg:text-xl text-red-500 font-semibold">SEO Content Writer</div>
        </div>

      </div>




      <section className="p-10 lg:p-20 lg:px-32 space-y-5">
        <div className="text-3xl lg:text-4xl font-semibold">Want To Join Our Team?</div>
        <div className="text-md lg:text-xl text-red-500 font-semibold">Looking for the next career move?</div>
        <div className="text-md lg:text-lg">
          Join us and soak yourself in the world of digital marketing. Working at Artimization is more than just a routine job—it’s a good fortune to be a part of something high and mighty. Our work is flying into a rage and making a difference in the lives of millions with life-changing solutions. Holding a belief that our people are central to our continued success and reformation, we invite you to join, bring fresh ideas, acumens, and wow us. Send your CV with a letter of application and portfolio to
        </div>
        <div className="text-3xl text-red-500 font-semibold">Career@artimization.com</div>
        <div className="text-lg">don’t miss the boat on the latest opportunities.</div>
      </section>




      <section className="p-10 lg:p-20 lg:px-44 flex flex-col justify-center items-center space-y-5">
        <img src="https://www.artimization.com/wp-content/uploads/2018/07/Layer-11.jpg" alt="" />
        <div className="text-3xl lg:text-5xl text-center font-semibold">
          We are located in karachi, Pakistan
        </div>
        <div className="text-md lg:text-lg text-center">
          Welcome to the most trustworthy Digital Marketing Agency. We are located in the fifth-most-populous city in the world, Karachi. The mini-Pakistan and home to numerous ethnic and language groups with the incorporation of distinct cosmopolitan and urban populace, interesting architecture, shoppers’ paradise, and the epitome of resilience.  Karachi is known to be the monetary and financial resources of Pakistan and the hub of entrepreneurship where Business cannot fail.
        </div>
        <Button className="p-3 rounded bg-red-500 px-6">DOWNLOAD OUR COMPANY PROFILE</Button>
      </section>
    </main>
  )
}

export default page