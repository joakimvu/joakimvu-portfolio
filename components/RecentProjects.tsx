import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

import { AnimatedTooltip } from "./ui/AnimatedTooltip";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-black-100">
        Et lite utvalg av
        <span className="text-pink-700"> nylige prosjekter</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, link, techList }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                    src="/bg.png"
                    alt="bg-img"
                    width={1000}
                    height={1000}
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0"
                  width={1000}
                  height={1000}
                />
              </div>
              <h1 className="text-black-100 font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="text-black-200 lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex item-center justify-between mt-7 mb-3">
                {/* <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      // style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        className="p-2"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  ))}
                </div> */}
                <div className="flex item-center justify-between mt-7 mb-3 ml-6">
                  {techList && <AnimatedTooltip items={techList} />}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-pink-700">
                    Sjekk ut
                  </p>
                  <FaLocationArrow className="ms-3" color="#be185d " />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
