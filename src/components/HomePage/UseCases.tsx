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
      className="space-y-12 rounded-b-[32px] pb-[49.25px] pt-[55px]"
    >
      <section className="container mx-auto flex items-center gap-[29px] xl:px-20">
        <header className="max-[479px]">
          <h2 className="text-[64px] font-medium leading-[68px] text-IFTextBold">
            Who can use integraflow
          </h2>
          <p className="pb-8 pt-4 text-base font-normal text-IFText">
            We&apos;ve got you covered.
          </p>
          <WaitlistModal buttonProps={{ text: "Get early access today" }} />
        </header>

        <div>
          <Pill
            text="Founders & Business Owners"
            variant="tertiary"
            className="ml-[73px]"
          />
          <Pill
            text="Growth team"
            variant="tertiary"
            className="-mt-[24.863px] ml-[101.4px]"
          />
          <Pill
            text="Product team"
            variant="tertiary"
            className="-mt-[24.863px] ml-[230px]"
          />
          <Pill
            text="customer success team"
            variant="tertiary"
            className="-mt-[24.863px]"
          />
          <Pill
            text="HR team"
            variant="tertiary"
            className="-mt-[24.863px] ml-[73px]"
          />
        </div>
      </section>
    </div>
  );
}
