import { playgroundUrl } from "@/socialLinks";
import Image from "next/image";
import Button from "../Button";
import GlassContainer from "./partials/GlassContainer";
import Pill from "./partials/Pill";
import SurveyDetails from "./partials/SurveyDetails";

export default function DeviceShowcase() {
  return (
    <section
      style={{
        backgroundImage:
          "url(/images/showcase/bg-left.png), url(/images/showcase/bg-right.png)",
        backgroundPosition: "left bottom, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundColor: "#050505",
      }}
      className="space-y-12 rounded-t-xl pb-[78px] pl-[11.53px] pr-[12.53px] pt-20 lg:rounded-t-[32px] "
    >
      <header className="container mx-auto flex flex-col gap-4 pr-[34.47px] sm:flex-row lg:gap-10 xl:px-20">
        <h2 className="text-[28px] font-medium leading-8 text-IFTextBold lg:text-[44px] lg:leading-[52px]">
          Automated surveys throughout the user journey
        </h2>
        <div className="space-y-8">
          <p className="text-sm font-normal text-IFText lg:text-lg">
            To understand user behavior, fulfill customer-user core market needs
            to continually increase the overall business output
          </p>
          <a href={playgroundUrl} target="_blank" rel="noopener noreferrer">
            <Button text="Check demo" />
          </a>
        </div>
      </header>

      <div className="container mx-auto flex w-full flex-col items-center gap-5 md:flex-row xl:px-20">
        <GlassContainer className="w-full rounded-t-3xl pl-[33px] pr-[64.51px] pt-[33px] md:w-[38.7%]">
          <Pill text="Mobile" />
          <SurveyDetails
            title="Single answer selection"
            description="We offer data-driven solutions for customer insights and market needs."
            className="pb-[52px] pt-4"
          />
          <div className="flex justify-center lg:justify-end">
            <Image
              src={"/images/showcase/mobile.jpg"}
              width={300}
              height={384}
              alt="Mobile"
              className="h-auto w-full rounded-t-[40px] md:h-full lg:rounded-t-[50px]"
            />
          </div>
        </GlassContainer>

        <GlassContainer className="h-min w-full rounded-3xl md:w-[61.3%]">
          <div className="max-w-[316px] pl-8 pt-8">
            <Pill text="Desktop" />
            <SurveyDetails
              title="Single answer selection"
              description="We offer data-driven solutions for customer insights and market needs."
              className="pb-[52px] pt-4"
            />
          </div>
          <div className="pr-[47px]">
            <Image
              src={"/images/showcase/desktop.png"}
              width={593}
              height={466}
              alt="Desktop"
              className="block h-full w-full rounded-bl-3xl md:h-full"
            />
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
