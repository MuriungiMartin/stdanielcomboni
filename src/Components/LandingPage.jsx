import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const Events = [
    {
      title: "Event S. Lukes",
      date: "16 MAY 2019 THU 21:30",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Event S. Louis",
      date: "24 MAR 2020 TUE 18:00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Event S. Mark",
      date: "16 MAY 2019 THU 21:30",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const groups = [
    {
      title: "Jumuiyas",
      Number: 10,
      Icon: <FaUser />,
    },
    {
      title: "Choirs",
      Number: 10,
      Icon: <FaUser />,
    },
    {
      title: "Societies",
      Number: 10,
      Icon: <FaUser />,
    },
    {
      title: "Ministries",
      Number: 10,
      Icon: <FaUser />,
    },
  ];

  return (
    <div style={{ height: "100vh", overflow: "auto" }}>
      <div className={`bg-gradient-to-b from-purple-50 to-white text-black p-10 border-b border-slate-200 ${isLoaded ? 'animate-fade-in' : ''}`}>
        <div className="my-12">
          <h2 className="flex items-center justify-center text-2xl font-bold mb-4 underline">
            RECENT EVENTS
          </h2>
        </div>
        <div className="grid grid-rows-3 gap-4 justify-center items-center">
          {Events.map((event, index) => (
            <div
              key={index}
              className={`col-span-4 row-span-4 border border-slate-200 bg-white p-8 rounded-lg mb-4 ${isLoaded ? 'animate-slide-up' : ''}`}
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="mb-2">{event.date}</p>
              <p className="mb-4">{event.description}</p>
              <button className="bg-purple-400 text-white px-4 py-2 rounded-full">
                VIEW EVENT
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={`flex gap-4 justify-center items-center bg-gradient-to-b from-purple-50 to-white ${isLoaded ? 'animate-fade-in' : ''}`}>
        {groups.map((group, index) => (
          <div key={index} className={`p-8 rounded-lg mb-4 ${isLoaded ? 'animate-slide-up' : ''}`}>
            <p className="mb-4">
              <span className="text-2xl text-purple-400 mr-4">
                <div className="bg-white  rounded-full inline-flex items-center justify-center w-16 h-16">
                  {group.Number}
                </div>
              </span>
              <span className="text-2xl mr-4">
                <div>{group.title}</div>
              </span>
            </p>
            <button className="bg-purple-400 text-white px-4 py-2 rounded-full">
              VIEW GROUP
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
