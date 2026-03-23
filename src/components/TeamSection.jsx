

const teamMembers = [
  {
    name: "Andikan William Udofia",
    role: "Web Developer",
    image: "/src/assets/images/AndyAut.jpeg",
  },
  {
    name: "Jane Smith",
    role: "Content Researcher",
    image: "/src/assets/images/user2.jpg",
  },
  {
    name: "Michael Lee",
    role: "UI Designer",
    image: "/src/assets/images/user3.jpg",
  },
  {
    name: "Sarah Kim",
    role: "Project Manager",
    image: "/src/assets/images/user4.jpg",
  },
];

function TeamSection() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Meet Our Team
        </h2>

        <p className="text-gray-600 mb-10">
          This project was built collaboratively by passionate students.
        </p>

        {/* Carousel */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-2xl shadow-md p-6 flex-shrink-0 hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-60 h-60 rounded-full mx-auto mb-4 object-cover"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>

              <p className="text-sm text-blue-600">
                {member.role}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TeamSection;