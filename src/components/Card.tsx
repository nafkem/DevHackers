"use client";
import Button1 from "@/app/helpers/Button1";
import React from "react";
import Countdown from "./CountDown";

const Card = () => {
  const percentageStyle =
    Number(30) > 100 ? { width: "100%" } : { width: `${30}%` };
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order for the blinds.
        </p>

        {/* Amount raised */}
        <div className="flex flex-col gap-2 text-sm lg:text-base ">
          <h4 className="text-neutral-300">Raised</h4>
          <div className="w-full h-[12px] bg-[#ade2ff3b] rounded-3xl">
            <p
              className={`h-[12px] bg-button-1 rounded-3xl`}
              style={percentageStyle}
            ></p>
          </div>
          <div className="flex justify-between text-neutral-400 text-sm font-mono">
            {Number(30) > 100 ? <p>{30}% (Overflow)</p> : <p>{30}%</p>}

            <p>100,000 of 1,000,000</p>
          </div>
        </div>

        <div className="py-4">
          <Countdown targetData={new Date(1693584000 * 1000)} />
        </div>
        <Button1 className="w-full">Donate</Button1>
      </div>
    </div>
  );
};

export default Card;
