import { AccordionData } from "../../data/data";
import { AccordionComponent } from "./AccordionComponent";

export default function Accordion() {
  return (
    <div className="fade-in">
      <h2 className="text-[#8800C8] dark:text-[#2FC1FF] text-3xl md:text-5xl font-bold text-center pt-[76px] pb-[49px] md:pt-[119px] md:pb-[126px]">
        Frequently asked questions
      </h2>
      <div className="max-w-6xl mx-auto">
        {AccordionData.map((item, index) => (
          <AccordionComponent
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
