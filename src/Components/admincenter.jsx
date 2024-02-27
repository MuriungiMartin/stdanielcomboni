import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { MdAddComment,MdEventAvailable } from "react-icons/md";
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";
const AdminCenter = () => {
  //post the new communication to the API
  function handleSubmit(event) {
    event.preventDefault();
    const [title, description, date] = [
      event.target.title.value,
      event.target.description.value,
      event.target.date.value,
    ];

    //send the communication form data to the server
    fetch("http://localhost:3000/communications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, date }),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("An error occurred. Please try again later.");
          setTimeout(() => {
            window.location.href = "/AdminCenter";
          }, 3000);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        //reset the form
        toast.success(`${title} has been added successfully.`);
        setTimeout(() => {
          window.location.href = "/AdminCenter";
        }, 3000);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
        setTimeout(() => {
          window.location.href = "/AdminCenter";
        }, 3000);
      });
  }

  //post the new event to the API
  function handleSubmitEvent(event) {
    event.preventDefault();
    const [title, date, time, venue, description] = [
      event.target.title.value,
      event.target.date.value,
      event.target.time.value,
      event.target.venue.value,
      event.target.description.value,
    ];

    //send the event form data to the server
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, date, time, venue, description }),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("An error occurred. Please try again later.");
          setTimeout(() => {
            window.location.href = "/AdminCenter";
          }, 3000);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        //reset the form
        toast.success(`${title} has been added successfully.`);
        setTimeout(() => {
          window.location.href = "/AdminCenter";
        }, 3000);
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
        setTimeout(() => {
          window.location.href = "/AdminCenter";
        }, 3000);
      });
  }
  //fetch inquiries from the API and assign data to the inquiries array in the state
  const [inquiries, setInquiries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/inquiries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setInquiries(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //Sort inquiries in descending order by id
  const sortedInquiries = [...inquiries].sort((a, b) => b.id - a.id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedInquiries, setExpandedInquiries] = useState([]);

  const toggleInquiry = (id) => {
    const isExpanded = expandedInquiries.includes(id);
    if (isExpanded) {
      setExpandedInquiries(
        expandedInquiries.filter((inquiryId) => inquiryId !== id)
      );
    } else {
      setExpandedInquiries([...expandedInquiries, id]);
    }
  };
  // Get the current set of inquiries to display
  const displayedInquiries = sortedInquiries.slice(
    currentIndex,
    currentIndex + 3
  );

  return (
    <div className=" bg-gradient-to-b from-white to-purple-100  font-sans">
      <div className="container mx-auto pt-16 px-8">
        {/* Your recent communications */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4 pt-16">
            <form
              className="  mb-4 shadow-sm border-2 bg-transparent rounded-lg"
              onSubmit={handleSubmit}
            >
              <div className="px-4 pt-4">
                <h1 className="flex justify-center items-center text-2xl font-bold mb-4  bg-transparent p-4 shadow-md rounded-lg">
                  <MdAddComment/> Communication
                </h1>
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <textarea
                  placeholder="Description"
                  name="description"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 resize-y"
                  rows={16}
                ></textarea>
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="flex justify-center items-center mb-4 px-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-tr flex justify-center items-center from-fuchsia-600 to-fuchsia-100 text-white px-4 py-2 rounded-md"
                >
                  <MdAddComment  className="text-2xl"/>
                </button>
              </div>
            </form>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
          <div className="md:w-1/2 md:pl-4  pt-16 rounded-lg">
            <form
              className="  mb-4 shadow-sm border-2 bg-transparent rounded-lg"
              onSubmit={handleSubmitEvent}
            >
              <div className="px-4 pt-4">
                <h1 className="flex justify-center items-center text-2xl font-bold mb-4  bg-transparent p-4 shadow-md rounded-lg">
                  <MdEventAvailable /> Event
                </h1>
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <input
                  type="time"
                  name="time"
                  placeholder="time"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <input
                  type="text"
                  placeholder="Venue"
                  name="venue"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <textarea
                  placeholder="Description"
                  name="description"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 resize-y"
                  rows={10}
                ></textarea>
              </div>
              <div className="flex justify-center items-center mb-4 px-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-tr flex justify-center items-center from-fuchsia-600 to-fuchsia-100 text-white px-4 py-2 rounded-md"
                >
                  <MdEventAvailable className="text-2xl"/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <section className="flex flex-wrap items-center gap-16 overflow-x-hidden grid-cols-2 sm:grid-cols-4 lg:grid-cols-6  text-black p-8 justify-center">
        <div>
          <button className="text-2xl font-semibold">New Blog Post</button>
        </div>
      </section> */}
      <div className="shadow-lg border-purple-100 border-2 rounded-lg bg-gradient-to-b from-white to-purple-100">
        <div className="flex flex-wrap items-center  text-black p-8 justify-center">
          <button className="text-2xl font-semibold">Inquiries</button>
        </div>
        <div>
          <div className="rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            {displayedInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="bg-white p-4 rounded-xl shadow-md mx-4 mb-4"
              >
                <h2 className="text-xl font-bold pl-8 pb-4">{inquiry.topic}</h2>
                {expandedInquiries.includes(inquiry.id) ? (
                  <div className="container pl-8">
                    <p className="text-lg">{inquiry.church_group}</p>
                    <p className="text-lg">{inquiry.Name}</p>
                    <p className="text-lg">{inquiry.question}</p>
                    <p className="text-lg">{inquiry.phone}</p>
                  </div>
                ) : (
                  <div className="container pl-8 pb-4">
                    <p className="text-lg">{inquiry.church_group}</p>
                  </div>
                )}
                <div className="flex justify-between">
                  <button
                    className="pl-8 text-fuchsia-600"
                    onClick={() => toggleInquiry(inquiry.id)}
                  >
                    {expandedInquiries.includes(inquiry.id)
                      ? "Show Less"
                      : "Details"}
                  </button>
                  <button className="bg-white shadow-md text-black font-bold py-2 px-4 rounded-md">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4">
            {sortedInquiries.length > 0 && (
              <div className="flex justify-between mb-4">
                {currentIndex > 0 && (
                  <button
                    className="bg-gradient-to-br  from-purple-600  to-purple-200 hover:bg-gradient-to-bl hover:from-purple-200  hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCurrentIndex(currentIndex - 3)}
                  >
                    <FaArrowAltCircleLeft className="text-2xl"/>
                  </button>
                )}
                {currentIndex < sortedInquiries.length - 3 && (
                  <button
                    className="bg-gradient-to-br  from-purple-600 to-purple-200 hover:from-purple-200  hover:to-purple-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCurrentIndex(currentIndex + 3)}
                  >
                    <FaArrowAltCircleRight className="text-2xl"/>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCenter;
