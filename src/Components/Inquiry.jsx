import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Inquiry = () => {
  const topics = [
    "General Inquiry",
    "Technical Support",
    "Product Information",
  ];
  const churchGroups = [" ", "MYM", "YSC", "YCA", "CMA", "CWA", "N/A"];
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  // const faqs = [
  //   {
  //     id: 1,
  //     question: "When can I access the church office?",
  //     answer: "The church office is open from 9:00 AM to 5:00 PM on Thursday.",
  //   },
  //   {
  //     id: 2,
  //     question: "When Is the Church open?",
  //     answer: "The church is open at all times for prayer and meditation.",
  //   },
  //   {
  //     id: 3,
  //     question: "When can I attend confession?",
  //     answer: "Confession is available on Saturday from 4:00 PM to 5:00 PM.",
  //   },
  //   {
  //     id: 4,
  //     question: "When is the next baptism?",
  //     answer: "The next baptism is scheduled for May 5, 2024.",
  //   },
  //   {
  //     id: 5,
  //     question: "When is the next First Holy Communion?",
  //     answer: "The next First Holy Communion is scheduled for May 5, 2024.",
  //   },
  //   {
  //     id: 6,
  //     question: "How can I contribute Zaka?",
  //     answer:
  //       "You can contribute Zaka by sending to church paybill : XXXX account no: zaka",
  //   },
  // ];

  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/faqs")
      .then((response) => response.json())
      .then((data) => setFaqs(data));
  }, []);

  //handle the form submission
  function handleSubmit(event) {
    event.preventDefault();
    // const topic = event.target.topic.value;
    // const churchGroup = event.target.churchGroup.value;
    // const name = event.target.name.value;
    // const phone = event.target.phone.value;
    // const question = event.target.question.value;
    const [topic, church_group, name, phone, question] = [
      event.target.topic.value,
      event.target.churchGroup.value,
      event.target.name.value,
      event.target.phone.value,
      event.target.question.value,
    ];

    console.log(topic, church_group, name, phone, question);

    //send the form data to the server
    fetch("http://localhost:3000/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic, church_group, name, phone, question }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success("Your inquiry has been submitted successfully.");
        setTimeout(() => {
          window.location.href = "/Enquiry";
         }, 3000);
        //reset the form
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
        setTimeout(() => {
          window.location.href = "/Enquiry";
         }, 3000);
      });
  }

  return (
    <div className=" bg-gradient-to-b from-purple-100 to-white font-sans">
      <div className="container mx-auto px-4 mt-16 py-8">
        <h1 className="text-center text-2xl font-bold mb-8 pb-18">Inquiry</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-4">
            <form
              className="mb-4 shadow-md border-2 border-slate-50 rounded-lg"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 px-4 pt-4">
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium mb-2"
                >
                  Topic
                </label>
                <select
                  id="topic"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4  px-4">
                <label
                  htmlFor="churchGroup"
                  className="block text-sm font-medium mb-2"
                >
                  Church Group
                </label>
                <select
                  id="churchGroup"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                >
                  {churchGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
              {/*Name and Phone No */}
              <div className="mb-4  px-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>
              <div className="mb-4  px-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                />
              </div>

              <div className="mb-4  px-4">
                <label
                  htmlFor="question"
                  className="block text-sm font-medium mb-2"
                >
                  Question
                </label>
                <textarea
                  id="question"
                  className="w-full border border-gray-300 rounded-md py-2 px-3"
                  rows="4"
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

          <div className="md:w-1/2 md:pl-4 shadow-md border-2 border-slate-50 rounded-lg">
            <h2 className="text-center text-xl font-bold">FAQs</h2>
            <div className="grid grid-cols-1 gap-4 p-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white p-4 shadow-md rounded-lg">
                  <h3
                    className="font-bold mb-2 hover:text-fuchsia-600 hover:border-fuchsia-600 cursor-pointer"
                    onClick={() => setExpandedFAQ(faq.id)}
                  >
                    {" "}
                    {faq.question}
                  </h3>
                  {expandedFAQ === faq.id && <h4>{faq.answer}</h4>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
