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
      className="space-y-12 rounded-b-xl pb-[31.07px] pt-[39px] lg:rounded-b-[32px] lg:pb-[49.25px] lg:pt-[55px]"
    >
      <section className="container mx-auto flex flex-col items-center gap-[27px] pl-[13px] pr-[13.27px] md:flex-row lg:gap-[29px] xl:px-20">
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
            text="Founders / Business owners"
            variant="tertiary"
            className="ml-[37.95px] md:ml-[16px]"
          />
          <Pill
            text="Customer success team"
            variant="tertiary"
            className="-mt-[14px] hidden sm:block md:-mt-[24px] md:ml-[147px]"
          />
          <Pill
            text="Growth marketing team"
            variant="tertiary"
            className="-mt-[14.53px] md:ml-1 lg:-mt-[24px]"
          />
          <Pill
            text="Product management team"
            variant="tertiary"
            className="-mt-[14.53px] ml-auto mr-[13.27px] md:ml-[84px] lg:-mt-[24px]"
          />
          <Pill
            text="Product marketing team"
            variant="tertiary"
            className="-mt-[14.53px] lg:-mt-[24px]"
          />
          <Pill
            text="Developers / Engineers"
            variant="tertiary"
            className="relative z-[2] -mt-[14.53px] ml-auto mr-[13.83px] md:ml-[123px] lg:-mt-[24px]"
          />
          <Pill
            text="Sales team"
            variant="tertiary"
            className="-mt-[14.53px] ml-10 md:ml-[101px] lg:-mt-[24px]"
          />
        </div>
      </section>
    </div>
  );
}
