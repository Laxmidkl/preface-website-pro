import member1 from "../assets/team/member1.png";
import member2 from "../assets/team/member2.png";
import member3 from "../assets/team/member3.png";
import member4 from "../assets/team/member4.png";
import member5 from "../assets/team/member5.png";
import member6 from "../assets/team/member6.png";

export default function TeamSection() {
  const teamMembers = [
     {
      id: 1,
      name: "Sushil K.C ",
      position: "Developer",
      image: member6,
    },

      {
      id: 2,
      name: "Krishna Chaudhary",
      position: "Developer",
      image: member3,
    },

    {
      id: 3,
      name: "Laxmi Dhakal ",
      position: "QA",
      image: member1,
    },
    {
      id: 4,
      name: "Namrata Kathariya",
      position: "Accountant",
      image: member2,
    },
  
    {
      id: 5,
      name: "Sita Palli Magar",
      position: "IT Supporter",
      image: member4,
    },
     {
      id: 6,
      name: "Sargam Bishowkarma",
      position: "IT Supporter",
      image: member5,
    },
  ];

  return (
    <section className="bg-green-50/30 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white">
            Our Team
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Meet Our Tech Team
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Our experienced professionals work together to deliver innovative,
            reliable, and high-quality software solutions.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                   <p className="mt-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}