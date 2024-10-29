import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-black-100">
        Et lite utvalg av
        <span className="text-pink-700"> nylige prosjekter</span>
      </h1>

      <div className="flex flex-wrap mt-8 gap-8">
        {projects.map(({ id, title, des, img, link, techList }) => (
          <div
            key={id}
            className={cn(
              "w-full md:w-[calc(50%-16px)] p-4 flex flex-col items-start bg-white-100 bg-transparent  overflow-hidden shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-2xl border border-white/[0.1]"
            )}
          >
            <Image src={img} alt={img} className="" width={1000} height={100} />
            <p className="text-black-100">{title}</p>
            <p className="text-black-100">{des}</p>

            <div className="flex items-center justify-between w-full mt-7 mb-3">
              <div className="flex ml-6">
                {techList && <AnimatedTooltip items={techList} />}
              </div>

              <div className="flex items-center">
                <Link
                  href={link}
                  className="lg:text-xl md:text-xs text-sm text-pink-700"
                  target="_blank"
                >
                  Sjekk ut
                </Link>
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
