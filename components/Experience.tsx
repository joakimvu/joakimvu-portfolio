import { workExperience } from "@/data";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <div className="py-20" id="contact">
      <h1 className="heading text-black-100">
        Mine
        <span className="text-green-700"> arbeidserfaringer</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className={cn(
              "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-2xl border border-white/[0.1]"
            )}
          >
            <div className="flex lg:flex-row flex-col items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={48}
                height={48}
                className="lg:w-32 m:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl text-gray-900">
                  {card.title}
                </h1>
                <p className="text-start text-gray-900 ">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
