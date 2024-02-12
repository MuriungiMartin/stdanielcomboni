import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {

  //handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    const [name, password] = [
      event.target.name.value,
      event.target.password.value,
    ];
    //send the form data to the server
    console.log(name, password)
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success(`Welcome ${name}!`);
        setTimeout(() => {
         window.location.href = "/AdminCenter";
         }, 3000);
        //reset the form
        //event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Invalid name or password. Please try again.");
        setTimeout(() => {
        //  window.location.href = "/AdminLogin";
         }, 3000);
      });
  }

  return (
    <div className=" bg-gradient-to-b from-purple-100 to-white font-sans">
      <div className="container mx-auto px-4 mt-16 py-16">
        <div className="flex flex-col md:flex-row lg:justify-center">
          <div className="md:w-1/2 md:pr-4">
            <form
              className="mb-4 shadow-md border-2 border-slate-50 rounded-lg"
              onSubmit={handleSubmit}
            >
              {/*Name and Phone No */}
              <div className="mb-4  px-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="mb-4  px-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="mb-4  p-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-purple-200 font-bold text-white py-2 px-4 rounded-md"
                >
                  Submit
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
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
