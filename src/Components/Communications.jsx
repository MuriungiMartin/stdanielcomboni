const Communications = () => {
    const announcements = [
        {
          id: 1,
          title: "Parish Event: Annual Eucharistic Procession",
          description: "Join us for our annual Eucharistic Procession, a sacred event to honor the Blessed Sacrament.",
          date: "January 15, 2024",
        },
        {
          id: 2,
          title: "Catechism Classes Registration Open",
          description: "Enroll your children in our Catechism classes to deepen their understanding of the Catholic faith.",
          date: "February 5, 2024",
        },
        {
          id: 3,
          title: "Volunteer Opportunity: Community Outreach",
          description: "Serve the community by participating in our upcoming outreach program. Let's spread love and compassion.",
          date: "March 12, 2024",
        },
        {
          id: 4,
          title: "Lenten Retreat: A Journey of Reflection and Renewal",
          description: "Embark on a spiritual journey during our Lenten Retreat. Experience moments of reflection and renewal.",
          date: "March 30, 2024",
        },
        {
          id: 5,
          title: "Mass Schedule Changes for Holy Week",
          description: "Please note the revised Mass schedule for Holy Week as we commemorate the passion, death, and resurrection of Jesus Christ.",
          date: "April 10, 2024",
        },
      ];
      

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

export default Communications;
