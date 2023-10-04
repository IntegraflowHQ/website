"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button, { ButtonProps } from "../Button";
import { Discord2, Instagram, LinkedIn, Twitter } from "../icons";

const socialLinks = [
  {
    name: "Twitter",
    url: "#",
    icon: Twitter,
  },
  {
    name: "Instagram",
    url: "#",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: LinkedIn,
  },
  {
    name: "Discord",
    url: "#",
    icon: Discord2,
  },
];

const waitlistId = process.env.NEXT_PUBLIC_WAITLIST_ID;

interface Props {
  buttonProps: ButtonProps;
}

export default function WaitlistModal({ buttonProps }: Props) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const opacity = !joined ? "0.5" : "0.6";

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://api.getwaitlist.com/api/v1/waiter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        waitlist_id: waitlistId,
        referral_link: document.location.href,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setJoined(true);
        } else {
          toast.error("Something went wrong");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <Dialog.Root
      onOpenChange={() => {
        joined && setJoined(false);
        setEmail("");
      }}
    >
      <Dialog.Trigger asChild>
        <Button {...buttonProps} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-20"
          style={{
            backgroundImage: `linear-gradient(140deg, rgba(28, 15, 89, ${opacity}) 50%, rgba(0, 107, 41, ${opacity}))`,
            backgroundColor: `rgba(15, 15, 15, ${opacity})`,
            backdropFilter: "blur(6px)",
          }}
        />
        <Dialog.Content className="fixed inset-0 z-30 flex items-center justify-center bg-IFBlack p-8 md:inset-auto md:left-1/2 md:top-1/2 md:w-max md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-t-3xl lg:p-12">
          <div>
            <div className="mb-5 flex justify-end lg:mb-8">
              <Dialog.Close>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Dialog.Close>
            </div>
            {!joined ? (
              <div className="flex w-[80vw] max-w-[390px] flex-col gap-7 lg:gap-[35px]">
                <header className="space-y-2 text-center">
                  <Dialog.Title className="text-3xl font-semibold leading-9 text-IFText300 md:text-[32px] md:leading-[48px]">
                    Join over 50+ business today in our waitlist
                  </Dialog.Title>
                  <Dialog.Description className="px-4 text-sm font-normal leading-normal text-IFText lg:px-0 lg:text-base">
                    Redefine customer experience with organic feedback and
                    behavioral data in real-time.
                  </Dialog.Description>
                </header>

                <form className="flex flex-col gap-3" onSubmit={handlesubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="rounded-lg bg-[#3C2E62] p-3 text-sm font-normal text-[#AC8DFE] lg:p-4 lg:text-base"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button text="Join now" />
                </form>
              </div>
            ) : (
              <div className="flex w-[80vw] max-w-max flex-col items-center gap-2">
                <header className="flex flex-col items-center gap-2 text-center">
                  <Dialog.Title className="max-w-[320px] text-[32px] font-semibold leading-9 text-IFText300 md:text-3xl md:leading-[48px]">
                    Thank you for joining our waitlist
                  </Dialog.Title>
                  <Dialog.Description className="max-w-[420px] text-sm font-normal leading-normal text-IFText md:text-base">
                    We&apos;re here to help you make the most of Integraflow.
                    Feel free to reach out to us
                  </Dialog.Description>
                </header>

                <div className="grid w-full grid-cols-2 gap-3 p-8">
                  {socialLinks.map(({ name, icon: Icon, url }) => (
                    <Link
                      href={url}
                      target="_blank"
                      className="flex items-center justify-center gap-4 rounded-full bg-[#131313] p-4 sm:w-full sm:max-w-[206px] md:p-6 lg:justify-normal"
                      key={name}
                    >
                      <Icon />
                      <span className="hidden text-base font-medium text-[#CECBCB] sm:inline">
                        {name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Toaster />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
