import WaitlistModal from "./WaitlistModal";
import Pill from "./partials/Pill";

export default function UseCases() {
  return (
    <div
      id="use-cases"
      style={{
        backgroundImage:
          "url(/bg-dots.svg), radial-gradient(rgba(28, 15, 89, 1), rgba(5, 5, 5, 1))",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover",
      }}
      className="space-y-12 rounded-xl pb-[31.07px] pt-[39px] lg:rounded-b-[32px] lg:pb-[49.25px] lg:pt-[55px]"
    >
      <section className="container mx-auto flex flex-col items-center gap-[27px] md:flex-row lg:gap-[29px] xl:px-20">
        <header className="max-[479px]">
          <h2 className="text-[32px] font-medium leading-8 text-IFTextBold lg:text-[64px] lg:leading-[68px]">
            Who can use integraflow
          </h2>
          <p className=" pb-6 pt-3 text-sm font-normal text-IFText lg:pb-8 lg:pt-4 lg:text-base">
            We&apos;ve got you covered.
          </p>
          <WaitlistModal buttonProps={{ text: "Get early access today" }} />
        </header>

        <div>
          <Pill
            text="Founders"
            variant="tertiary"
            className="ml-[78.29px] md:ml-[126px]"
          />
          <Pill
            text="Business Owners"
            variant="tertiary"
            className="-mt-[14px] ml-[136.83px] md:-mt-[24px] md:ml-[226px]"
          />
          <Pill
            text="Growth marketing team"
            variant="tertiary"
            className="-mt-[14.53px] lg:-mt-[24px]"
          />
          <Pill
            text="Product management"
            variant="tertiary"
            className="-mt-[14.53px] ml-[118.67px] md:ml-[196px] lg:-mt-[24px]"
          />
          <Pill
            text="Product marketing"
            variant="tertiary"
            className="-mt-[14.53px] ml-[45.41px] md:ml-[75px] lg:-mt-[24px]"
          />
          <Pill
            text="Developers/(Engineers)"
            variant="tertiary"
            className="-mt-[14.53px] ml-[101px] md:ml-[167px] lg:-mt-[24px]"
          />
          <Pill
            text="Sales team"
            variant="tertiary"
            className="-mt-[14.53px] ml-[78.29px] md:ml-[126px] lg:-mt-[24px]"
          />
        </div>
      </section>
    </div>
  );
}
