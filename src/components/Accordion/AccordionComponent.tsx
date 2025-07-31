import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import type { AccordionItemType } from "../../types/Accordion.types";

export const AccordionComponent = ({ title, content }: AccordionItemType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t last:border-b border-[#CDCDCD]">
      <button
        className="w-full flex justify-between items-center py-6 text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl md:text-3xl font-bold">{title}</span>
        <span
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? <TiMinus size={32} /> : <FaPlus size={32} />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] md:max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="pb-6 pt-[6px] text-[17px] md:text-xl font-normal">
          {content}
        </div>
      </div>
    </div>
  );
};
