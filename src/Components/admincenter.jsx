import { useState, useEffect } from "react";

const AdminCenter = () => {
    //Get the announcements from the API when page is loaded
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/communications")
          .then((response) => response.json())
          .then((data) => setAnnouncements(data));
      }, []);
      
      

  return (
    <div className=" bg-gradient-to-b from-purple-100 to-white font-sans">
      <div className="container mx-auto pt-16 px-8">
        {/* Your recent communications */}
        <div className="  items-start  pt-16">
          <h2 className="text-2xl font-bold mb-4   bg-white p-4 shadow-md rounded-lg">
            Recent Communications
          </h2>

          <div className="grid grid-cols-1  gap-4 pt-4">
            {announcements.map((anouncement) => (
              <div key={anouncement.id} className="bg-white p-4 shadow-md rounded-lg">
                <h3 className="font-bold mb-2">{anouncement.title}</h3>
                <h4 className="">{anouncement.description}</h4>
                <h5 className="text-slate-600">{anouncement.date}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCenter;