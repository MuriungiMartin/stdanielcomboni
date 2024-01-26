import { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Communications = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
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

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white font-sans">
      <div className="container mx-auto pt-16 px-8">
        <div className="items-start pt-16">
          <h2 className="text-2xl font-bold mb-4 lg:pt-16 md:pt-8 sm:pt-16 bg-white p-4 shadow-md">
            Recent Communications
          </h2>

          <TransitionGroup className="grid grid-cols-1 gap-4 pt-4">
            {announcements.map((announcement) => (
              <CSSTransition
                key={announcement.id}
                timeout={1500}
                classNames={isFirstRender ? '' : 'item'}
              >
                <div className="bg-white p-4 shadow-md">
                  <h3 className="font-bold mb-2">{announcement.title}</h3>
                  <h4>{announcement.description}</h4>
                  <h5 className="text-slate-600">{announcement.date}</h5>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default Communications;
