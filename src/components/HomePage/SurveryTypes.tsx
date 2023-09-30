import Image from "next/image";
import Button from "../Button";
import GlassContainer from "./partials/GlassContainer";
import Pill from "./partials/Pill";
import SurveyDetails from "./partials/SurveyDetails";

export default function SurveryTypes() {
  return (
    <div
      id="survey-types"
      className="min-h-screen rounded-b-xl pb-20 pl-[12px] pr-[11.21px] pt-[43.1px] md:rounded-b-3xl md:pt-12 lg:rounded-b-[32px] xl:px-20"
      style={{
        backgroundImage:
          "url(/images/survey-types/blue.svg), url(/images/survey-types/green.svg), url(/images/survey-types/bg-dots.svg)",
        backgroundPosition: "left center, right center, center",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundSize: "auto 1092px, auto 1092px, cover",
        backgroundColor: "#0F0F0F",
      }}
    >
      <div className="container mx-auto flex flex-col gap-[15px]">
        <div className="order-2 flex w-full flex-col gap-[15px] sm:flex-row sm:items-center sm:justify-center md:gap-[71px]">
          <GlassContainer className="w-full space-y-[41px] rounded-t-[20px] pb-[25px] pl-[26px] pt-[26px] sm:max-w-[521px]">
            <Image
              src={"/images/survey-types/nps.svg"}
              width={494}
              height={209}
              alt="NPS"
              className="h-auto w-full rounded-l-[11.5px]"
            />
            <SurveyDetails
              title="NPS ( Net promoter score)"
              description="Assess customer loyalty and willingness to recommend your brand."
              className="max-w-[302px]"
            />
          </GlassContainer>

          <GlassContainer className="w-full space-y-6 rounded-t-[20px] px-6 py-9 sm:max-w-[348px]">
            <SurveyDetails
              title="Contact response"
              description="Collect user contact details for follow-ups, inquiries, or subscription sign-ups."
            />
            <Image
              src={"/images/survey-types/contact-form.svg"}
              height={288}
              width={300}
              alt="Contact form"
              className="h-auto w-full rounded-[12.608px]"
            />
          </GlassContainer>
        </div>

        <header className="order-1 flex w-full flex-col gap-[28px] sm:order-2 sm:mx-auto sm:flex-row sm:items-center md:gap-[89px] md:py-9 lg:w-max">
          <section className="max-w-[313px] md:max-w-[593px]">
            <Pill text="Very easy to use" variant="secondary" />
            <h2 className="pb-3 pt-2 text-4xl font-medium text-IFGreen md:pb-4 lg:text-[72px]  lg:leading-[80px]">
              Leverage on our Survey widgets
            </h2>
            <p className="max-w-[533px] pb-6 text-sm font-normal text-IFText md:pb-8 md:text-base">
              Each question is unique, and every response matters. We offer a
              wide range of response options for all your survey needs, be it
              customer feedback, market research, or opinions.{" "}
              <span className="text-white">We&apos;ve got you covered.</span>
            </p>
            <Button text="Check demo" />
          </section>

          <GlassContainer className="w-full space-y-6 rounded-t-[20px] px-6 py-8 md:max-w-[354px]">
            <Image
              src={"/images/survey-types/rating.svg"}
              width={306}
              height={239}
              alt="Contact form"
              className="w-full rounded-[12.608px]"
            />

            <SurveyDetails
              title="Rating"
              description="Gather opinions through a customizable rating scale, ideal for product or service feedback."
            />
          </GlassContainer>
        </header>

        <div className="order-2 mx-auto flex w-full flex-col gap-[15px] sm:flex-row sm:items-center md:gap-[68px] md:py-9 lg:w-max">
          <GlassContainer className="w-full space-y-6 rounded-t-[20px] px-6 pt-8 md:max-w-[524px]">
            <SurveyDetails
              title="Matrix response"
              description="Efficiently capture complex data using a customizable grid of items, perfect for evaluating multiple items with the same response options."
              className="max-w-[397px]"
            />
            <Image
              src={"/images/survey-types/matrix.svg"}
              width={474}
              height={239}
              alt="Contact form"
              className="w-full rounded-t-[11.493px]"
            />
          </GlassContainer>

          <GlassContainer className="w-full space-y-6 rounded-b-[20px] px-6 pt-8 md:max-w-[345px]">
            <SurveyDetails
              title="Single choice"
              description="Collect accurate answers using single-choice questions. Ideal for polls, quizzes, and easy decision-making."
            />
            <Image
              src={"/images/survey-types/single-choice.svg"}
              width={297}
              height={300}
              alt="Contact form"
              className="h-auto w-full rounded-t-[12.493px]"
            />
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}
