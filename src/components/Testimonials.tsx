import React from "react";

interface Testimonial {
  text: string;
  name: string;
  title: string;
  logo: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This finance app template has been a game-changer for me. It's intuitive, easy to use, and helps me keep.",
    name: "Fletch Skinner",
    title: "Apple CTO & Partner",
    logo: "/assets/images/testimonial/testimonial-logo-1.png",
    avatar: "/assets/images/testimonial/testimonial-avatar-1.png",
  },
  {
    text: "Our family uses this app to manage our finances together.",
    name: "Octavia Melvin",
    title: "Wattpad & Designer",
    logo: "/assets/images/testimonial/testimonial-logo-2.png",
    avatar: "/assets/images/testimonial/testimonial-avatar-2.png",
  },
  {
    text: "I've tried several finance apps, but this template stands out. It's highly customizable, and I love the budgeting.",
    name: "Dylan Meringu",
    title: "Slack CEO & Partner",
    logo: "/assets/images/testimonial/testimonial-logo-3.png",
    avatar: "/assets/images/testimonial/testimonial-avatar-3.png",
  },
  {
    text: "I'm not a financial expert, but this app template simplifies everything. I can track expenses.",
    name: "Sue Shei",
    title: "Yelp CTO & UI Designer",
    logo: "/assets/images/testimonial/testimonial-logo-4.png",
    avatar: "/assets/images/testimonial/testimonial-avatar-4.png",
  },
  {
    text: "The reports and charts in this template are fantastic. They give me a clear picture of where my money is going.",
    name: "Kate Smith",
    title: "Zapier & HR",
    logo: "/assets/images/testimonial/testimonial-logo-5.png",
    avatar: "/assets/images/testimonial/testimonial-avatar-5.png",
  },
  {
    text: "As I plan for retirement, this app template has been a valuable tool.",
    name: "Alan Fresco",
    title: "Klarna & Product Designer",
    logo: "/assets/images/testimonial/testimonial-logo-6.png",
    avatar: "/assets/images/testimonial/testimonial-avatar-6.png",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonial-bg flex items-center justify-center px-32 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <p className="text-[#2B2B31] text-base mb-4">
              "{testimonial.text}"
            </p>
            <div className="relative items-center">
              <div className="w-full h-12"></div>
              <div className="absolute left-0 top-0">
                <img
                  src={testimonial.logo}
                  className="h-12 w-12 rounded-full"
                  alt="user1"
                />
              </div>
              <div className="absolute left-8 top-0">
                <img
                  src={testimonial.avatar}
                  className="h-12 w-12 rounded-full"
                  alt="user2"
                />
              </div>
              <div className="absolute left-24 top-1">
                <p className="text-[#3B3C45] text-base">
                  {testimonial.name}
                </p>
                <p className="text-[#6D7079] text-xs">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
