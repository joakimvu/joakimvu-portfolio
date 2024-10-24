import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mt-[200px] mb-[100px] mb:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Klar for å ta <span className="text-purple">digitaliseringen</span>{" "}
          til et nytt nivå? 🚀
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Ta kontakt med meg i dag, så kan vi diskutere hvordan jeg kan hjelpe
          deg med å nå dine mål.
        </p>
        <Link href="mailto:joakimvu94@hotmail.com">
          <MagicButton
            title="Ta kontakt!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-balance text-sm md:font-normal font-light mb-4">
          Copyright © 2024 Joakim Vu
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              href={info.url}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
