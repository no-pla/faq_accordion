import React from "react";
import Image from "next/image";
import Star from "../../public/icon-star.svg";
import Accordion from "./Accordion";

const FAQs = [
  {
    index: 0,
    q: "What is Frontend Mentor, and how will it help me?",
    a: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    index: 1,
    q: "Is Frontend Mentor free?",
    a: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    index: 2,
    q: "Can I use Frontend Mentor projects in my portfolio?",
    a: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    index: 3,
    q: "How can I get help if I'm stuck on a challenge?",
    a: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const Card = () => {
  return (
    <section className="p-10 bg-white rounded-2xl shadow-cardShadow w-[90%] max-w-[600px] sm:p-6">
      <div className="flex mb-8 gap-[24px] items-center sm:mb-6">
        <div className="w-[40px] h-[40px] sm:w-[24px] sm:h-[24px]">
          <Image src={Star} alt="star icon" />
        </div>
        <h2 className="text-darkPurple text-[56px] font-bold sm:text-[32px]">
          FAQs
        </h2>
      </div>
      {FAQs.map(({ q, a, index }) => {
        return <Accordion question={q} answer={a} key={index} index={index} />;
      })}
    </section>
  );
};

export default Card;
