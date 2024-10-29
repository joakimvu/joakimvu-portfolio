import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { cn } from "@/lib/utils";
import { LinkPreview } from "./ui/LinkPreview";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-black-100">
        Et lite utvalg av
        <span className="text-pink-700"> nylige prosjekter</span>
      </h1>

      <div className="flex flex-wrap mt-12 gap-12">
        {projects.map(({ id, title, des, img, link, techList }) => (
          <div
            key={id}
            className={cn(
              "w-full md:w-[calc(50%-28px)] p-4 flex flex-col items-start bg-white-100 bg-transparent  overflow-hidden shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-2xl border border-white/[0.1]"
            )}
          >
            <Image src={img} alt={img} className="" width={1000} height={100} />

            <h1 className="text-start text-xl font-semibold md:text-2xl text-gray-900 mt-4">
              {title}
            </h1>
            <p className="text-start mt-2 text-gray-900 ">{des}</p>

            <div className="flex items-center justify-between w-full mt-7 mb-3">
              <div className="flex ml-6">
                {techList && <AnimatedTooltip items={techList} />}
              </div>

              <div className="flex items-center">
                <p className="lg:text-xl md:text-xs text-sm">
                  <LinkPreview url={link}>Sjekk ut</LinkPreview>
                </p>
                <FaLocationArrow className="ms-3 text-lg" color="#be185d" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
