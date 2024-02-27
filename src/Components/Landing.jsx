import { useState, useEffect } from "react";

const LandingPage = () => {



  // const events = [
  //   {
  //     date: "16 FEB 2024",
  //     time: "THU 21:30",
  //     title: "Lenten Prayer Vigil",
  //     description:
  //       "Join us for a special Lenten Prayer Vigil as we seek spiritual growth and reflection during the season of Lent.",
  //     image: "./1.jpg",
  //   },
  //   {
  //     date: "24 MAR 2024",
  //     time: "TUE 18:00",
  //     title: "Parish Feast Day Celebration",
  //     description:
  //       "Celebrate our parish feast day with a joyous gathering. Join in prayer, fellowship, and festivities.",
  //     image: "./2.jpeg",
  //   },
  //   // Add more events as needed
  // ];

  //fetch events from the server
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);


  const blogs = [
    {
      title: "Are You Open to Spiritual Gifts?",
      excerpt: "Somehow, in the midst of our best attempts as leaders...",
      imgSrc: "./1.jpg",
    },
    {
      title: "Benefits of The Eucharist",
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
        "Our mission is what we do. The active verb here is invite: God progresses through gracious invitations.",
    },
    {
      title: "Our Vision",
      description:
        "We see our mission as extending God's Kingdom and we seek to help every member find their place.",
    },
    {
      title: "Our Values",
      description:
        "Community is where we most deeply experience God's love and grace throughout all stages of life.",
    },
    {
      title: "Our Faith",
      description:
        "All Peoples are of tremendous value to God; reaching them with the Gospel is our distinct responsibility.",
    },
    // Add more sections as needed
  ];
  //Order of Mass
  const mass = [
    {
      id: 1,
      day: "Sunday",
      time: "7:00 AM",
      title: "English Mass",
      description:
        "Join us for a special Lenten Prayer Vigil as we seek spiritual growth and reflection during the season of Lent.",
      image: "./1.jpg",
    },
    {
      id: 2,
      day: "Sunday",
      time: "9:00 AM",
      title: "Swahili Mass",
      description:
        "Celebrate the Sunday Mass in Swahili language with the community.",
      image: "./4.jpeg",
    },
    {
      id: 3,
      day: "Sunday",
      time: "11:00 AM",
      title: "English Mass",
      description:
        "Celebrate the Sunday Mass in English language with the community.",
      image: "./4.jpeg",
    },
    {
      id: 4,
      day: "Monday",
      time: "6:00 AM",
      title: "Swahili Mass",
      description:
        "Celebrate the Monday Mass in Swahili language with the community.",
      image: "./4.jpeg",
    },
    {
      id: 5,
      day: "Tuesday",
      time: "6:00 AM",
      title: "English Mass",
      description:
        "Celebrate the Tuesday Mass in English language with the community.",
      image: "./4.jpeg",
    },
    {
      id: 6,
      day: "Wednesday",
      time: "6:00 AM",
      title: "Swahili Mass",
      description:
        "Celebrate the Wednesday Mass in Swahili language with the community.",
      image: "./4.jpeg",
    },
    {
      id: 7,
      day: "Thursday",
      time: "",
      title: "English Mass",
      description:
        "Celebrate the Thursday Mass in English language with the community.",
      image: "./4.jpeg",
    },
    {
      id: 8,
      day: "Friday",
      time: "6:00 AM",
      title: "Swahili Mass",
      description:
        "Celebrate the Friday Mass in Swahili language with the community.",
      image: "./4.jpeg",
    },
    {
      id: 9,
      day: "Saturday",
      time: "6:00 AM",
      title: "English Mass",
      description:
        "Celebrate the Saturday Mass in English language with the community.",
      image: "./4.jpeg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white pt-12">
      <section className="flex flex-col justify-around items-center p-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-10 lg:p-10 text-black bg-gradient-to-b from-purple-200 to-purple-100 ">
        <div className="lg:w-1/3 sm:w-fit pt-16">
          <h1 className=" font-sans font-bold text-4xl">St Daniel Comboni Catholic Parish</h1>
          <hr className="text-black" />
          <p className="mt-8 text-slate-800 font-sans">
            We are a Catholic Parish in the Archdiocese of Nairobi. We are
            located in the heart of Embakasi, in Mihango. Come and
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
        <div className="flex flex-col space-y-4 p-4 sm:p-0">
          {events.slice(0, 2).map((event) => (
            <div
              key={event.id}
              className="flex flex-col sm:flex-row items-stretch"
            >
              <div className="w-full sm:w-1/4 text-center sm:text-right px-4 pt-8">
                <div className="inline-block w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
              <div className="w-full sm:w-1/4 p-4">
                <div className="font-bold">{event.date}</div>
                <div>{event.time}</div>
              </div>
              <div className="w-full sm:w-3/4 p-4 bg-white border rounded-md shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 pl-4">{event.Title}</h3>
                <p className="pl-4">{event.description}</p>
                <div className="pl-4">
                  <button className="bg-gradient-to-r from-purple-600 to-purple-200 text-white px-4 py-2 rounded mt-8 hover:bg-gradient-to-l hover:from-white hover:to-purple-950">
                    View Event
                  </button>
                </div>
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

      <section className=" bg-slate-100 border-separate py-8  mx-auto space-x-4 md:space-x-10 font-sans">
        <div className="flex items-center justify-center ">
          <h2 className=" text-3xl font-bold mb-4"> WE BELIEVE IN GOD.</h2>
        </div>
        <div className=" flex flex-col justify-around items-center p-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-10 lg:p-10 ">
          <div className="lg:w-1/3 md:w/3 sm:w-fit p-4">
            {sections.map((section, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full mr-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {section.title}
                  </h3>
                </div>
                <p className="text-black">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="lg:w-1/3 md:w/3 sm:w-fit py-4">
            <img
              src="euch.jpg"
              alt="img Logo"
              width={320}
              height={320}
              className="rounded-sm  sm:mt-8 sm:mb-8 sm:w-fit sm:h-fit sm:mx-auto sm:shadow-xl sm:ring-4 sm:ring-purple-200 sm:ring-opacity-50 sm:ring-offset-4 sm:ring-offset-purple-200 sm:ring-offset-opacity-50"
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b  border-t-2 border-transparent from-yellow-50 to-white border-separate py-8  mx-auto space-x-4 md:space-x-10 font-sans">
        {/*Mass Schedule*/}
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold mb-4">Mass Schedule</h2>

          <div className="grid grid-cols-1 gap-4">
            {mass.map((massItem) => (
              <div
                key={massItem.id}
                className="bg-white p-4 shadow-md rounded-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{massItem.title}</h3>
                    <p>
                      {massItem.day}, {massItem.time}
                    </p>
                  </div>
                  <img
                    src={massItem.image}
                    alt={massItem.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </div>
                <p className="mt-2">{massItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
