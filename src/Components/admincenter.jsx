import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  return (
    <div className=" bg-gradient-to-b from-purple-100 to-white font-sans">
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
                  Add New Communication
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
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-tr from-fuchsia-600 to-fuchsia-100 text-white px-4 py-2 rounded-md"
                >
                  Add
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
                  Add New Event
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
              <div className="flex justify-start items-start mb-4 px-4 pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-tr from-fuchsia-600 to-fuchsia-100 text-white px-4 py-2 rounded-md"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCenter;
