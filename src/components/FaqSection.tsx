import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How can I add a new financial account?",
    answer: "Answer 1",
  },
  {
    question: "How can I categorize my expenses?",
    answer: "Answer 1",
  },
  {
    question: "How do I create a budget?",
    answer: "Answer 1",
  },
  {
    question: "How can I analyze my financial status?",
    answer: "Answer 1",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" flex flex-col items-center justify-center py-4 lg:py-16 px-6 md:px-12 lg:px-20 2xl:px-32 text-white">
      <div className="inline-block mb-6 rounded-full border border-[#E1E2E5] bg-white text-black font-medium text-sm py-3 px-5">
        Mercury Finance App
      </div>
      <h1 className="text-3xl lg:text-[56px] lg:leading-[70px] text-[#0E0E11] font-bold text-center ">
        Frequently Asked
        <div className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-[#A785FE] to-[#67E9F0]">
          Questions
        </div>
      </h1>

      <div className="mt-6 lg:mt-10 w-full max-w-2xl space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border text-sm lg:text-base border-[#E8EAED] rounded-lg text-black overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex gap-2 justify-between items-center px-6 py-4 text-left focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="w-4 h-4 text-[#0E0E11]" />
              ) : (
                <FaPlus className="w-4 h-4 text-[#0E0E11]" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-[#0E0E11] text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 lg:mt-16 text-center">
        <h3 className="text-[#0E0E11] font-bold text-[20px] lg:text-[30px] mb-2">Need Help?</h3>
        <p className="text-[#3B3C45] max-w-[550px] text-xs lg:text-sm mx-auto mb-6">
          We're here to help! Feel free to reach out to one of our friendly team
          members for app support or consider speaking with our team of
          planners.
        </p>
        <button className="bg-[#0E0E11] text-white text-xs lg:text-sm font-semibold py-3 px-6 rounded-full">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default FaqSection;
