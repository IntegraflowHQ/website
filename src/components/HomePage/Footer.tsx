import { cn } from "@/utils";
import Link from "next/link";
import Button from "../Button";

const navLinks = [
  [
    {
      name: "About",
      href: "#",
    },
    {
      name: "Survey Types",
      href: "#survey-types",
    },
    {
      name: "Blog",
      href: "#",
    },
    {
      name: "Check Demo",
      href: "#",
    },
  ],
  [
    {
      name: "Terms of Service",
      href: "#",
    },
    {
      name: "Privacy Policy",
      href: "#",
    },
    {
      name: "Contact Us",
      href: "#",
    },
  ],
  [
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "LinkedIn",
      href: "#",
    },
    {
      name: "Instagram",
      href: "#",
    },
  ],
];

export default function Footer() {
  return (
    <footer className="space-y-5 rounded-b-xl bg-IFBlack p-5 pt-[60px] lg:rounded-b-[32px]">
      <section className="container mx-auto flex flex-col justify-between gap-[29px] md:flex-row xl:px-20">
        <header className="flex w-max flex-col gap-2 lg:gap-3">
          <h2 className="text-base font-semibold leading-normal text-IFTextLight lg:text-2xl">
            Integraflow
          </h2>
          <p className="max-w-[239px] text-xs font-normal leading-5 text-IFText lg:text-sm lg:leading-6">
            We&apos;re here to help you make the most of Integraflow.
          </p>
          <Button
            variant="tertiary"
            text="Feel free to chat with us."
            className="lg:mt-[7px]"
          />
        </header>

        <nav className="grid grid-cols-3 grid-rows-2 gap-3">
          {navLinks.map((links, index) => (
            <ul
              key={index}
              className={cn(
                "flex flex-col gap-2",
                index === 0 ? "row-span-2" : "",
              )}
            >
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm font-normal text-IFText"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
          <span className="col-span-2 text-sm text-IFText">
            We’re open source -{" "}
            <Link
              href={"https://github.com/IntegraflowHQ"}
              target="_blank"
              className="text-IFGreen underline"
            >
              Star us on Github
            </Link>
          </span>
        </nav>
      </section>

      <p className="text-center text-sm leading-5 text-IFText">
        @ 2023 integraflow. All rights reserved.
      </p>
    </footer>
  );
}
