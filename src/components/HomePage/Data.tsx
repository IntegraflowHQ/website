"use client";
import AnalysisImage from "@/assets/images/analysis.png";
import { playgroundUrl } from "@/socialLinks";
import { cn } from "@/utils";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import Pill from "./partials/Pill";

const features = [
  {
    name: "Analyze feedback",
    title: "Real-time Data Analytics",
    description:
      "Harness the power of real-time data analytics with Integraflow. Watch as survey responses pour in, and instantly gain access to a wealth of insights. Our dynamic analytics dashboard transforms raw data into actionable information right before your eyes. Monitor trends, track progress, and make data-driven decisions without delay.",
  },
  {
    name: "Real-Time Collaboration",
    title: "Real-time Collaboration",
    description:
      "Collaborate seamlessly with your team, no matter where they are. Integraflow's real-time collaboration feature lets multiple team members work on surveys simultaneously. Collaborate on survey design, analyse results together, and streamline your workflow with effortless teamwork.",
  },
  {
    name: "Advanced Triggers",
    title: "Advanced Triggers",
    description:
      "Take survey automation to the next level with advanced triggers. Set up triggers based on complex conditions, allowing you to collect feedback at precisely the right moments within your product or workflow. Whether you need to capture responses based on user interactions, behaviours, or specific events, Integraflow's advanced triggers make it possible.",
  },
  {
    name: "User Segmentation",
    title: "User Segmentation",
    description:
      "Take your surveys to the next level with advanced targeting and user segmentation. Integraflow empowers you to define specific user segments based on attributes and behaviours. Tailor your surveys to resonate with different audience groups and collect the most relevant data. Gain a deeper understanding of your audience's preferences and needs.",
  },
];

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M15.8337 10H4.16699"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0003 15.8337L4.16699 10.0003L10.0003 4.16699"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.16699 10H15.8337"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 4.16699L15.8333 10.0003L10 15.8337"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Data() {
  const [tabIndex, setTabIndex] = useState("1");

  const next = () => {
    if (parseInt(tabIndex) === features.length) return;

    setTabIndex((parseInt(tabIndex) + 1).toString());
  };

  const prev = () => {
    if (parseInt(tabIndex) === 1) return;

    setTabIndex((parseInt(tabIndex) - 1).toString());
  };

  return (
    <div className="rounded-t-xl bg-IFBlack bg-right-bottom bg-no-repeat px-4 py-8 lg:rounded-t-[32px] lg:bg-data  lg:px-5 lg:py-20">
      <section className="container mx-auto w-full space-y-6 lg:space-y-16 xl:px-20">
        <header className="max-w-[443px] space-y-2 lg:space-y-[17px]">
          <Pill text="Data is key" />
          <h2 className="text-[28px] font-medium leading-9 text-IFTextBold lg:text-[44px] lg:leading-[52px]">
            Transform Data into Actionable Insights
          </h2>
        </header>

        <Tabs.Root
          className="flex w-full flex-col"
          value={tabIndex}
          onValueChange={(value) => setTabIndex(value)}
        >
          <div className="flex items-center justify-between">
            <Tabs.List
              className="flex flex-1 shrink-0 gap-8 overflow-x-auto md:border-b md:border-[#303030]"
              aria-label="Manage your account"
            >
              {features.map((feature, index) => (
                <Tabs.Trigger
                  className="hidden border-b-2 border-transparent pb-[12.5px] text-IFText data-[state=active]:block data-[state=active]:border-IFGreen data-[state=active]:text-IFTextLight md:block"
                  value={(index + 1).toString()}
                  key={index}
                >
                  {feature.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="flex gap-1 text-xs leading-[18px] text-white md:hidden [&>*]:items-center [&>*]:rounded-lg [&>*]:border [&>*]:border-[#53389E] [&>*]:bg-IFPurpleDark [&>*]:p-2 ">
              <button
                onClick={prev}
                className={`${
                  1 < parseInt(tabIndex) && parseInt(tabIndex) < features.length
                    ? "flex"
                    : "hidden"
                }`}
              >
                <ArrowLeft />
              </button>

              <button
                onClick={next}
                className={cn(
                  parseInt(tabIndex) < features.length ? "flex" : "hidden",
                )}
              >
                <span>Next</span>
                <ArrowRight />
              </button>

              <button
                onClick={prev}
                className={cn(
                  parseInt(tabIndex) === features.length ? "flex" : "hidden",
                )}
              >
                <ArrowLeft />
                <span>Prev</span>
              </button>
            </div>
          </div>

          {features.map((feature, index) => (
            <Tabs.Content
              className="hidden w-full flex-col justify-between gap-[32.91px] pt-5 data-[state=active]:flex md:flex-row lg:pt-[62px]"
              value={(index + 1).toString()}
              key={index}
            >
              <div className="pt-[7px]">
                <header className="flex w-full flex-col gap-[10.09px] md:max-w-[531px] lg:gap-4">
                  <h3 className="text-lg font-semibold text-IFTextLight md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-normal text-IFText md:text-base">
                    {feature.description}
                  </p>
                </header>
                <a
                  href={playgroundUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="mt-8" text="Check demo" />
                </a>
              </div>

              <Image
                src={AnalysisImage.src}
                alt={feature.name}
                width={445}
                height={334}
                className="block aspect-[4/3] h-auto w-full self-start px-4 md:max-w-[300px] md:px-0 lg:max-w-[445px]"
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </section>
    </div>
  );
}
