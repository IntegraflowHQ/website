"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import WaitlistModal from "../HomePage/WaitlistModal";

const links = [
  {
    name: "Benefit",
    href: "#benefit",
  },
  {
    name: "Survery types",
    href: "#survey-types",
  },
  {
    name: "Use Cases",
    href: "#use-cases",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default function Nav() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <nav className="fixed top-0 z-20 w-full border-b border-black bg-white ">
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between p-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            width={133}
            height={29}
            alt="Integraflow"
            className="h-[24px] w-[111px] md:h-[29px] md:w-[133px]"
          />
        </Link>

        <div className="flex md:order-2">
          <WaitlistModal
            buttonProps={{
              text: "Join waitlist",
              className: "py-[16px] text-sm font-normal hidden md:block",
            }}
          />

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-IFPurple md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              ref.current?.classList.toggle("hidden");
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-4 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
          ref={ref}
        >
          <ul className="mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:gap-8 md:border-0 md:bg-white md:p-0 ">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block border-b p-3 text-sm font-medium text-primary hover:bg-gray-100 md:border-b-0 md:p-0 md:hover:bg-inherit"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <WaitlistModal
            buttonProps={{
              text: "Join waitlist",
              className:
                "py-[16px] text-sm font-normal md:hidden mt-3 md:mt-0 w-full md:w-auto",
            }}
          />
        </div>
      </div>
    </nav>
  );
}
