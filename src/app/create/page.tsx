"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Error } from "@/components/ErrorHandler/Error";
import Loader from "@/components/Utils/Loader";
import Image from "next/image";
import logo from "../../assets/eduLogo.png";
type createCampagin = {
  address: string;
  name: string;
  amount: number;
  description: string;
  startDate: string;
  endDate: string;
  image: any;
};

const page = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<createCampagin>();

  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)]">
      <Loader loading={isLoading} />
      <div className=" mx-auto p-8 flex flex-col items-center">
        <Image src={logo} alt="EduFundr Logo" />
        <h1 className="text-white text-2xl font-bold pb-4">EDUFUNDR</h1>
        <p>Empowering Education, One Campaign at a Time.</p>
      </div>
      <form
        className="bg-hero rounded-2xl w-3/5 2xl:w-1/2 mx-auto p-8 flex flex-col gap-5"
        // onSubmit={() => handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl text-center text-white font-bold my-4">
          Create Campaign
        </h2>

        {/* Creator Address */}
        <div className="flex flex-col gap-2">
          <label className="lg:text-xl text-white font-semibold">
            Creator Address <span className="text-red-400">*</span>
          </label>
          <input
            {...register("address", {
              required: true,
              pattern: /^(0x){1}[0-9a-fA-F]{60,66}$/,
            })}
            className="bg-input rounded-2xl p-3 text-xl text-white-1 font-mono outline-none focus:outline focus:outline-1 focus:outline-button-1"
            // defaultValue={tba ? tba : ""}
          />
          <Error
            error={errors.address?.type}
            patternMessage="A valid address is required"
          />
        </div>

        {/* Name of campaign */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold text-white">
            Name of campaign <span className="text-red-400">*</span>
          </label>
          <div className="flex flex-col gap-1">
            <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
              <input
                {...register("name", { required: true })}
                className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
                placeholder=""
                // onBlur={() => computeQuote()}
              />
              <Error
                error={errors.name?.type}
                patternMessage="enter campaign name"
              />
              <div className="min-w-32 my-auto">
                {/* <BaseToken
                  asset={baseToken ? baseToken?.contractSymbol : "ETH"}
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* campaign Amount */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold text-white">
            campaign Amount <span className="text-red-400">*</span>
          </label>
          <div className="flex flex-col gap-1">
            <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
              <input
                type="number"
                {...register("amount", { required: true })}
                className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
                placeholder="0.00"
                // onBlur={() => computeQuote()}
              />
              <Error
                error={errors.amount?.type}
                patternMessage="enter amount name"
              />
              <div className="min-w-32 my-auto">
                {/* <BaseToken
                  asset={baseToken ? baseToken?.contractSymbol : "ETH"}
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* Date row */}
        <div className="flex gap-10">
          <div className="flex flex-col gap-3 w-full">
            <label className="lg:text-xl font-semibold text-white">
              Start Date <span className="text-red-400">*</span>
            </label>
            <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
              <input
                {...register("startDate", {
                  required: true,
                })}
                className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="lg:text-xl font-semibold text-white">
              End Date <span className="text-red-400">*</span>
            </label>
            <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
              <input
                {...register("endDate", {
                  required: true,
                })}
                className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
                type="date"
              />
            </div>
          </div>
        </div>

        {/* Description row */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold text-white">
            Campaign Description <span className="text-red-400">*</span>
          </label>
          <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
            <textarea
              {...register("description", {
                required: true,
              })}
              className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
              readOnly={true}
              rows={6}
              placeholder="Enter campaign description..."
            />
            {/* <div className="min-w-32 my-auto"><QuoteToken /></div> */}
          </div>
        </div>

        {/* Upload image */}
        <div className="flex flex-col gap-3">
          <label className="lg:text-xl font-semibold text-white">
            Upload Image <span className="text-red-400">*</span>
          </label>
          <div className="bg-input rounded-2xl px-2 text-lg outline-none focus-within:outline focus-within:outline-1 focus-within:outline-button-1 flex gap-2">
            <input
              type="file"
              {...register("image", {
                required: true,
              })}
              className="w-full bg-transparent py-3 text-xl text-white-1 font-mono outline-none placeholder:font-mono placeholder:text-2xl"
              accept="image/*"
            />
          </div>
        </div>

        <button className="w-full mt-8 rounded-xl bg-button text-white font-semibold py-4 cursor-pointer hover:text-white-1">
          Confirm Swap
        </button>
      </form>
    </div>
  );
};

export default page;
