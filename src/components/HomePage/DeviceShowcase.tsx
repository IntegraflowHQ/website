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
      className="space-y-12 rounded-t-[32px] pb-[78px] pt-20"
    >
      <header className="container mx-auto flex gap-10 xl:px-20">
        <h2 className="text-[44px] font-medium leading-[52px] text-IFTextBold">
          Automated surveys throughout the user journey
        </h2>
        <div className="space-y-8">
          <p className="text-lg font-normal text-IFText">
            To understand user behavior, fulfill (your) customer-user core
            market needs and continually increase the overall business output
          </p>
          <Button text="Check demo" />
        </div>
      </header>

      <div className="mx-auto flex w-max items-center gap-5">
        <GlassContainer className="w-[414px] rounded-t-3xl pl-[33px] pr-[64.51px] pt-[33px]">
          <Pill text="Mobile" />
          <SurveyDetails
            title="Single answer selection"
            description="We provide comprehensive, data-driven solution to understand user behavior."
            className="pb-[52px] pt-4"
          />
          <div className="flex justify-end">
            <Image
              src={"/images/showcase/mobile.jpg"}
              width={300}
              height={384}
              alt="Mobile"
              className="rounded-t-[50px]"
            />
          </div>
        </GlassContainer>

        <GlassContainer className="h-min w-[630px] rounded-3xl">
          <div className="max-w-[316px] pl-8 pt-8">
            <Pill text="Desktop" />
            <SurveyDetails
              title="Single answer selection"
              description="We provide comprehensive, data-driven solution to understand user behavior."
              className="pb-[52px] pt-4"
            />
          </div>
          <div className="pr-[47px]">
            <Image
              src={"/images/showcase/desktop.png"}
              width={593}
              height={466}
              alt="Desktop"
              className="block h-full w-full rounded-bl-3xl"
            />
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
