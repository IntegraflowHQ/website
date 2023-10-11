"use client";
import AnalysisImage from "@/assets/images/analysis.png";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import WaitlistModal from "./WaitlistModal";
import Pill from "./partials/Pill";

const features = [
  {
    name: "Analyze feedback",
    title: "Real-time Data Analytics",
    description:
      "Harness the power of real-time data analytics with INTEGRAFLOW. Watch as survey responses pour in, and instantly gain access to a wealth of insights. Our dynamic analytics dashboard transforms raw data into actionable information right before your eyes. Monitor trends, track progress, and make data-driven decisions without delay.",
  },
  {
    name: "Real-Time Collaboration",
    title: "Real-time Collaboration",
    description:
      "Collaborate seamlessly with your team, no matter where they are. Formily's real-time collaboration feature lets multiple team members work on surveys simultaneously. Collaborate on survey design, analyse results together, and streamline your workflow with effortless teamwork.",
  },
  {
    name: "Advanced Triggers",
    title: "Advanced Triggers",
    description:
      "Take survey automation to the next level with advanced triggers. Set up triggers based on complex conditions, allowing you to collect feedback at precisely the right moments within your product or workflow. Whether you need to capture responses based on user interactions, behaviours, or specific events, Formily's advanced triggers make it possible.",
  },
  {
    name: "User Segmentation",
    title: "User Segmentation",
    description:
      "Take your surveys to the next level with advanced targeting and user segmentation. Formily empowers you to define specific user segments based on attributes and behaviours. Tailor your surveys to resonate with different audience groups and collect the most relevant data. Gain a deeper understanding of your audience's preferences and needs.",
  },
];

export default function Data() {
  return (
    <div
      className="hidden rounded-t-[32px] bg-IFBlack px-5 py-20 lg:block"
      style={{
        backgroundImage: "url(/images/data/bg.png)",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="container mx-auto w-full space-y-16 xl:px-20">
        <header className="max-w-[443px] space-y-[17px]">
          <Pill text="Data is key" />
          <h2 className="text-[44px] font-medium leading-[52px] text-IFTextBold">
            Transform Data into Actionable Insights
          </h2>
        </header>

        <Tabs.Root
          className="flex w-full flex-col"
          defaultValue={features[0].name}
        >
          <Tabs.List
            className="flex shrink-0 gap-8 overflow-x-auto border-b border-[#303030]"
            aria-label="Manage your account"
          >
            {features.map((feature, index) => (
              <Tabs.Trigger
                className="border-b-2 border-transparent pb-[12.5px] text-IFText data-[state=active]:border-IFGreen data-[state=active]:text-IFTextLight"
                value={feature.name}
                key={index}
              >
                {feature.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {features.map((feature, index) => (
            <Tabs.Content
              className="hidden w-full justify-between pt-[62px] data-[state=active]:flex"
              value={feature.name}
              key={index}
            >
              <div className="pt-[7px]">
                <header className="max-w-[531px] space-y-4">
                  <h3 className="text-2xl font-semibold text-IFTextLight">
                    {feature.title}
                  </h3>
                  <p className="text-base font-normal text-IFText">
                    {feature.description}
                  </p>
                </header>
                <WaitlistModal
                  buttonProps={{
                    text: "Get early access today",
                    className: "mt-8",
                  }}
                />
              </div>
              <Image
                src={AnalysisImage.src}
                alt={feature.name}
                width={445}
                height={334}
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </section>
    </div>
  );
}
