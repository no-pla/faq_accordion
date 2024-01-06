"use client";

import React, { useState } from "react";
import Image from "next/image";
import Open from "../../public/icon-plus.svg";
import Close from "../../public/icon-minus.svg";

interface qna {
  question: string;
  answer: string;
  index: number;
}

const Accordion = ({ question, answer, index }: qna) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article
      className={`${
        index === 0
          ? "pb-6 sm:pb-5"
          : index === 3
          ? "pt-6 sm:pt-5 border-t-[1px] border-lightPink"
          : "py-6 sm:py-5 border-t-[1px] border-lightPink"
      }
      `}
    >
      <div
        className="flex justify-between text-darkPurple hover:text-purple cursor-pointer ease-in-out duration-300"
        onClick={() => setToggle((prev) => !prev)}
      >
        <div className="font-semibold text-[18px] sm:text-[16px]">
          {question}
        </div>
        {toggle ? (
          <Image src={Close} alt="star" width={30} height={30} />
        ) : (
          <Image src={Open} alt="star" width={30} height={30} />
        )}
      </div>
      {toggle && (
        <p className="text-palePurple text-base text-[14px] pt-6">{answer}</p>
      )}
    </article>
  );
};

export default Accordion;
