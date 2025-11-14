import React from "react";

const testimonials = [
  {
    name: "Judith E",
    location: "Nottingham",
    text: "Very reliable. Great attitude, knowledgeable and skilful. Always on time and willing to help with anything extra. It is a pleasure to have such great staff who are very professional. They do an excellent job. Thank you."
  },
  {
    name: "Margaret H",
    location: "Derby",
    text: "My Belvoir team could not be more supportive. They give me space to try things myself before offering assistance. Each one readily undertakes many different household tasks and several have taken me to medical appointments, staying with me when appropriate (40)."
  },
  {
    name: "Sheila M",
    location: "Leicester",
    text: "My experience of Belvoir Home Care has been excellent from the start. I am supported by a very caring, professional, and well-trained team who take pride in doing a good job and ensuring my comfort. At the same time, they patiently encourage my independence and mobility. I have recommended Belvoir to others in my area who are looking for home careers and would do so again without hesitation."
  }
];

const Testimonial = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-left text-gray-800">
          Real Experiences, Real Results
        </h2>
        <div className="text-center">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
            More Testimonials
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <blockquote className="text-lg font-medium text-gray-600 mb-4">
              "{testimonial.text}"
            </blockquote>
            <div className="flex items-center">
              <p className="text-gray-800">{testimonial.name}</p>
            </div>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
