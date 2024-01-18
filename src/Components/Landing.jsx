import { useState, useEffect } from "react";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  //const images = ["1.jpg", "2.jpeg", "3.jpeg"]; // Replace with your own images
  // const events = ["Event 1", "Event 2", "Event 3"]; // Replace with your own events
  const events = [
    {
      date: "16 MAY 2019",
      time: "THU 21:30",
      title: "Event 1",
      description: "Description 1",
      image: "./1.jpg",
    },
    {
      date: "24 MAR 2020",
      time: "TUE 18:00",
      title: "Event 2",
      description: "Description 2",
      image: "./2.jpeg",
    },
    // Add more events as needed
  ];
  const blogs = [
    {
      title: "Are You Open to Spiritual Gifts?",
      excerpt: "Somehow, in the midst of our best attempts as leaders...",
      imgSrc: "./1.jpg",
    },
    {
      title: "Prophecy for Beginners and how to start",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imgSrc: "./3.jpeg",
    },
    {
      title: "The Benefit Of Good Sermons",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imgSrc: "./2.jpeg",
    },
    // Add more blogs as needed
  ];
  const sections = [
    {
      title: "Our Mission",
      description:
        "Our mission is what we do. The avenue we're here is invite God's progress through gracious innovations.",
    },
    {
      title: "Our Vision",
      description:
        "We see our mission as expanding God's kingdom and we seek to help every member find their place.",
    },
    {
      title: "Our Values",
      description:
        "Community is where we most deeply experience God’s love and grace throughout all stages of life.",
    },
    {
      title: "Our Faith",
      description:
        "All peoples are of tremendous value to God! Reaching them with the Gospel is our direct responsibility.",
    },
    // Add more sections as needed
  ];
  //   const groups = ["Group 1", "Group 2", "Group 3"]; // Replace with your own groups
  //   const testimonials = ["Testimonial 1", "Testimonial 2", "Testimonial 3"]; // Replace with your own testimonials

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white pt-12">
      <section className="flex flex-col justify-around items-center p-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-10 lg:p-10 text-black bg-gradient-to-b from-purple-200 to-purple-100 ">
        <div className="lg:w-1/3 sm:w-fit pt-16">
          <h1 className="text-6xl">St Daniel Comboni Parish</h1>
          <hr className="text-black" />
          <p className="mt-8 text-slate-800 font-sans">
            We are a Catholic Church in the Archdiocese of Nairobi. We are
            located in the heart of Embakasi, in Mihabgo. We are a parish in the
            Archdiocese of Nairobi under the Roman Catholic Church. Come and
            join us in our Sunday Masses and other activities.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-200 text-white px-4 py-2 rounded mt-8 hover:bg-gradient-to-l hover:from-white hover:to-purple-950">
            Join Us
          </button>
        </div>
        <div className="w-1/3 items-center sm:w-fit">
          <img
            src="./2.jpeg"
            alt="Church Logo"
            width={320}
            height={320}
            className="rounded-full border-8 border-white sm:mt-8 sm:mb-8 sm:w-fit sm:h-fit sm:mx-auto sm:shadow-xl sm:ring-4 sm:ring-purple-200 sm:ring-opacity-50 sm:ring-offset-4 sm:ring-offset-purple-200 sm:ring-offset-opacity-50"
          />
        </div>
        <div className="w-1/3 items-center sm:w-fit">
          <p className="text-2xl font-bold mb-4">Today&apos;s Reading</p>
          <p className="text-xl">3rd Sunday Ordinary Time</p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-200 text-white px-4 py-2 rounded mt-8 hover:bg-gradient-to-l hover:from-white hover:to-purple-950">
            Read More ...
          </button>
        </div>
      </section>

      <section className="bg-white text-black p-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-10 lg:p-10">
        <div className="flex flex-col col-span-2 items-center justify-center gap-2 mr-16">
          <h1 className="text-3xl font-bold font-serif">Upcoming Events</h1>
          {/* <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut seedor labore. Excepteur sint occaecat.
          </h4> */}
        </div>
        <div className="flex flex-col  space-y-4  p-12">
          {events.map((event, index) => (
            <div key={index} className="flex">
              <div className="w-1/4 text-right px-4 pt-8">
                <div className="inline-block w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
              <div className="w-1/4 p-4">
                <div className="font-bold">{event.date}</div>
                <div>{event.time}</div>
              </div>
              <div className="w-3/4 p-4 bg-white border rounded-md">
                <h3 className="text-2xl font-bold mb-4 pl-4">{event.title}</h3>
                <p className="pl-4">{event.description}</p>
                <div className="pl-4">
                  <button className="bg-gradient-to-r  from-purple-600 to-purple-200 text-white px-4 py-2 rounded mt-8 hover:bg-gradient-to-l hover:from-white hover:to-purple-950">
                    View Event
                  </button>
                </div>
                {/* <div className="w-1/4 justify-end col-span-4">
                <img
                  src={event.image}
                  alt="Church Logo"
                  width={320}
                  height={320}
                  className="rounded-full border-8 border-white sm:mt-8 sm:mb-8 sm:w-fit sm:h-fit sm:mx-auto sm:shadow-xl sm:ring-4 sm:ring-purple-200 sm:ring-opacity-50 sm:ring-offset-4 sm:ring-offset-purple-200 sm:ring-offset-opacity-50"
                />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-16 overflow-x-hidden grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 bg-gradient-to-b from-indigo-900 to-purple-900 text-white p-8 justify-center">
        <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center transform transition duration-500 ease-linear hover:scale-125">
          <span className="text-3xl font-bold mb-2">1523</span>
          <span className="text-sm font-medium">FAMILIES</span>
        </div>
        <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center transform transition duration-500 ease-linear hover:scale-125">
          <span className="text-3xl font-bold mb-2">6</span>
          <span className="text-sm font-medium">PRIESTS</span>
        </div>
        <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center transform transition duration-500 ease-linear hover:scale-125">
          <span className="text-3xl font-bold mb-2">18</span>
          <span className="text-sm font-medium">JUMUIYAS</span>
        </div>
        <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center transform transition duration-500 ease-linear hover:scale-125">
          <span className="text-3xl font-bold mb-2">8</span>
          <span className="text-sm font-medium">GROUPS</span>
        </div>
        <div className="rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center transform transition duration-500 ease-linear hover:scale-125">
          <span className="text-3xl font-bold mb-2">9</span>
          <span className="text-sm font-medium">HOLY MASSES</span>
        </div>
      </section>
      <section className="container mx-auto p-4 md:pt-16">
        <h2 className=" flex items-center justify-center text-3xl font-bold mb-4">
          OUR BLOG
        </h2>
        <p className="flex items-center justify-center mb-8">
          Read our latest articles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-card rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center"
            >
              <img
                src={blog.imgSrc}
                alt=""
                className="w-full h-48 mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <button className="mt-4 px-8 py-2 bg-gradient-to-r  from-purple-600 to-purple-200  text-white rounded-full">
                READ ARTICLE
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className=" bg-slate-50 border-separate py-8  mx-auto space-x-4 md:space-x-10 font-sans">
        <div className="flex items-center justify-center ">
          <h2 className=" text-2xl font-bold mb-4">
            WE LOVE GOD. WE BELIEVE IN GOD.
          </h2>
        </div>
        <div className=" flex flex-col justify-around items-center p-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-10 lg:p-10 ">
          <div className="lg:w-1/3 md:w/3 sm:w-fit p-16">
            
          </div>
          <div className="lg:w-1/3 md:w/3 sm:w-fit p-16">2</div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
