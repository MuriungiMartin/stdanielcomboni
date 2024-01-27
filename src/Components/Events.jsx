const Events = () => {
const events = [
    {
        id: 1,
        title: "Adoration of the Blessed Sacrament",
        description: "Join us for a time of prayer and adoration of the Blessed Sacrament.",
        date: "January 15, 2024",
        time: "7:00 PM",
        venue: "Church",
    },
    {
        id: 2,
        title: "Catechism Classes",
        description: "Enroll your children in our Catechism classes to deepen their understanding of the Catholic faith.",
        date: "February 5, 2024",
        time: "9:00 AM",
        venue: "Parish Hall",
    },
    {
        id: 3,
        title: "Community Outreach",
        description: "Serve the community by participating in our upcoming outreach program. Let's spread love and compassion.",
        date: "March 12, 2024",
        time: "8:00 AM",
        venue: "Parish Hall",
    },
    {
        id: 4,
        title: "Lenten Retreat",
        description: "Embark on a spiritual journey during our Lenten Retreat. Experience moments of reflection and renewal.",
        date: "March 30, 2024",
        time: "9:00 AM",
        venue: "Church",
    },
    {
        id: 5,
        title: "Holy Week Mass Schedule",
        description: "Please note the revised Mass schedule for Holy Week as we commemorate the passion, death, and resurrection of Jesus Christ.",
        date: "April 10, 2024",
        time: "9:00 AM",
        venue: "Church",
    },
    {
        id: 6,
        title: "Easter Mass Schedule",
        description: "Please note the revised Mass schedule for Easter Sunday.",
        date: "April 11, 2024",
        time: "9:00 AM",
        venue: "Church",
    },
    {
        id: 7,
        title: "First Holy Communion",
        description: "Join us in celebrating the First Holy Communion of our children.",
        date: "May 5, 2024",
        time: "9:00 AM",
        venue: "Church",
    },
    {
        id: 8,
        title: "Confirmation",
        description: "Join us in celebrating the Confirmation of our young adults.",
        date: "May 12, 2024",
        time: "9:00 AM",
        venue: "Church",
    },
    {
        id: 9,
        title: "Annual Eucharistic Procession",
        description: "Join us for our annual Eucharistic Procession, a sacred event to honor the Blessed Sacrament.",
        date: "June 5, 2024",
        time: "9:00 AM",
        venue: "Church",
    },
    {
        id: 10,
        title: "Feast of the Assumption",
        description: "Join us for a special Mass to celebrate the Feast of the Assumption of the Blessed Virgin Mary.",
        date: "August 15, 2024",
        time: "9:00 AM",
        venue: "Church",
    }
];

    return (
       <div className=" bg-gradient-to-b from-purple-100 to-white font-sans">
        <div className="container mx-auto pt-16 px-8">
            <div className="  items-start  pt-16">
                <h2 className="text-2xl font-bold mb-4 bg-white p-4 shadow-md rounded-lg">
                Parish Events
                </h2>
        
                <div className="grid grid-cols-1  gap-4 pt-4">
                {events.map((event) => (
                    <div key={event.id} className="bg-white p-4 shadow-md rounded-lg">
                    <h3 className="font-bold mb-2">{event.title}</h3>
                    <h4 className="">{event.description}</h4>
                    <h5 className="text-slate-600">{event.date}</h5>
                    <h5 className="text-slate-600">{event.time}</h5>
                    <h5 className="text-slate-600">{event.venue}</h5>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Events;
