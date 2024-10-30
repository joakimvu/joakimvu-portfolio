"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import Image from "next/image";
import Link from "next/link";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import { technologiesRow1, technologiesRow2 } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [sendMail, setSendMail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("joakimvu94@hotmail.com");
    setSendMail(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ",
        className
      )}
    >
      <div className={`${id === 4 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute dark:bg-black-200 bg-blue-50">
          {img && (
            <Image
              src={img}
              alt={img}
              width={1000}
              height={1000}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={1000}
              height={1000}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>

        {id === 4 && (
          <BackgroundGradientAnimation className="absolute z-50 flex items-center justify-center text-white font-bold" />
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          {id === 4 ? (
            <div className="text-white font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
          ) : (
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
              {title}
            </div>
          )}
          {id === 3 && (
            <div className="mt-4">
              <section>
                <p className="text-lg">
                  💯 Elsker å løse problemer ved hjelp av design og programming.
                </p>
                <p>🗺️ Utvikler i Oslo</p>
                <p>
                  💡 Nysgjerrig av natur – jeg elsker å utforske nye teknologier
                  og dra på tech meetups for å holde meg oppdatert på det nyeste
                </p>
                <p>👨‍🎓 Power Platform & Frontend Utvikler</p>
                <p className="mt-8">
                  Når jeg ikke er fordypet i kode eller lærer noe nytt, finner
                  du meg gjerne hengende i en fjellvegg med klatreutstyret mitt.
                </p>
              </section>
            </div>
          )}

          {id === 5 && (
            <div className="flex top-0 bottom-0 w-fit absolute -right-0 -left-0">
              <div className="h-full rounded-md flex flex-col antialiased bg-white dark:bg-[#070719] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                  items={technologiesRow1}
                  direction="right"
                  speed="normal"
                />
                <InfiniteMovingCards
                  items={technologiesRow2}
                  direction="left"
                  speed="normal"
                />
              </div>
            </div>
          )}

          {id === 4 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: sendMail,
                    autoplay: sendMail,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <Link
                href="https://www.linkedin.com/in/joakimvu/"
                target="_blank"
              >
                <MagicButton
                  title={sendMail ? "Wapaaao!" : "Kontakt meg"}
                  icon={
                    <Image
                      src="/link_white.svg"
                      alt="linkedin"
                      width={24}
                      height={24}
                    />
                  }
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
