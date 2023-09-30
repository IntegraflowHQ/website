import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import WaitlistModal from "./WaitlistModal";

export default function Hero() {
  return (
    <div
      className="w-full rounded-b-xl pt-[46px] md:rounded-b-3xl md:pt-[122px]"
      style={{
        backgroundImage:
          "url('/bg-line.svg'), url(/bg-dots.svg), linear-gradient(140deg, rgba(28, 15, 89, 0.95) 40%, rgba(0, 107, 41, 0.95)), url(/bg.svg)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        backgroundPosition: "center, center, center, center",
        backgroundSize: "cover, cover, cover, cover",
      }}
    >
      <div className="mx-auto flex h-full max-w-[930px] flex-col items-center justify-between pb-5 pl-[14px] pr-[11px]">
        <div />
        <div className="text-center">
          <div
            className="inline-block rounded-full border bg-IFPurpleLight px-[14px] py-2"
            style={{
              boxShadow:
                "0px 2px 4px 0px rgba(248, 248, 248, 0.16) inset, -2px 0px 4px 0px rgba(183, 183, 183, 0.25) inset",
            }}
          >
            <p className="text-xs font-normal leading-[18px] text-white md:text-sm">
              We are open souce -{" "}
              <Link
                href={"https://github.com/IntegraflowHQ"}
                target="_blank"
                className="text-IFGreen underline"
              >
                Star us on Github
              </Link>
            </p>
          </div>
          <header>
            <h1 className="pt-3 text-[32px] font-semibold leading-8 text-IFTextBold md:text-[64px] md:leading-[72px]">
              Boost your business output, online or offline, with valuable
              customer insights
            </h1>
            <p className="mx-auto max-w-[649px] pt-4 text-sm font-normal text-IFText md:text-lg">
              Redefine customer experience with organic feedback and behavioral
              data in real-time. Enjoy intuitive designs, open source surveys,
              advanced analytics, seamless collaboration on the go.
            </p>
          </header>
          <div className="flex w-full flex-col justify-center gap-2 pt-6 sm:flex-row md:pt-8">
            <WaitlistModal
              buttonProps={{
                text: "Get early access today",
                className: "sm:w-[240px]",
              }}
            />
            <Button
              text="Check demo"
              className="sm:w-[240px]"
              variant="secondary"
            />
          </div>
        </div>
        <div className="mt-12 flex items-center gap-2 md:mt-[125px] md:gap-[14px]">
          <div className="flex w-max">
            <Image
              src="/profiles/1.png"
              className="h-6 w-6 rounded-full border border-IFPurple md:h-11 md:w-11"
              width={44}
              height={44}
              alt="user"
            />
            <Image
              src="/profiles/2.png"
              className="-ml-4 h-6 w-6 rounded-full border border-IFPurple md:h-11 md:w-11"
              width={44}
              height={44}
              alt="user"
            />
            <Image
              src="/profiles/3.png"
              className="-ml-4 h-6 w-6 rounded-full border border-IFPurple md:h-11 md:w-11"
              width={44}
              height={44}
              alt="user"
            />
          </div>
          <p className="max-w-[208px] text-xs leading-[18px] text-IFText md:max-w-[316px] md:text-lg">
            Join over <span className="text-white">(100+)</span> other{" "}
            <span className="text-white">businesses</span> today in the
            waitlist)
          </p>
        </div>
      </div>
    </div>
  );
}
