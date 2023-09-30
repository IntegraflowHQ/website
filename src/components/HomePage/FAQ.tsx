"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import WaitlistModal from "./WaitlistModal";

const faqs = [
  {
    question: "What is Integraflow?",
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, Integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: "What types of surveys can I create with Integraflow?",
    answer:
      "Integraflow offers a wide range of response types, allowing you to create surveys that match your specific goals. From single-choice and multiple-choice questions to text responses, date collection, rating scales, and more, our platform adapts to your needs.",
  },
  {
    question: "How do I analyse survey responses?",
    answer:
      "Integraflow provides a real-time analytics dashboard that transforms raw survey data into actionable insights. Visualise trends, track progress, and generate reports effortlessly. Our customizable data visualisation tools allow you to create charts, graphs, and reports tailored to your unique needs.",
  },
  {
    question: "Can I collaborate with my team on surveys?",
    answer:
      "Absolutely! Integraflow supports real-time collaboration, allowing multiple team members to work on surveys simultaneously. Collaborate on survey design, analyse results together, and streamline your workflow with effortless teamwork.",
  },
  {
    question: "How do I share surveys with my audience?",
    answer:
      "Integraflow makes it easy to distribute surveys. You can generate shareable survey links for email campaigns, social media, or website integration. Our platform ensures that your surveys display perfectly on both desktop and mobile devices, maximising participation.",
  },
  {
    question: "Can I use Integraflow with other tools I use?",
    answer:
      "Yes, you can! Integraflow seamlessly integrates with a wide range of third-party applications, including CRM software, marketing automation tools, and project management platforms. Streamline your workflow and enhance efficiency by connecting Integraflow to your existing toolkit.",
  },
  {
    question: "Is Integraflow user-friendly for beginners?",
    answer:
      "ABSOLUTELY! INTEGRAFLOW is designed with EMPATHY TO ACCOMMODATE  BEGINNERS. You can create surveys with ease, whether you're a seasoned researcher or new to survey design. Our platform provides tools and documentation to guide you through the process.",
  },
  {
    question: "Is my data secure with Integraflow?",
    answer:
      "Yes, we take data security seriously. Integraflow employs robust security measures to protect your data. We offer self-hosted solutions, ensuring you have full control over your data and infrastructure.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, we provide customer support to assist you with any questions or issues you may encounter. Feel free to reach out to our support team for assistance.",
  },
  {
    question: "How do I get started with Integraflow?",
    answer:
      "Getting started is easy. Simply join our waitlist, and we’ll notify you when we’re ready. Our user-friendly platform ensures a smooth onboarding process./nIf you have any more questions or need further assistance, please don't hesitate to contact us directly. We're here to help you make the most of Integraflow. FEEL FREE TO CHAT WITH US.",
  },
];

export default function FAQ() {
  return (
    <div
      style={{
        backgroundImage:
          "url(/images/survey-types/blue.svg), url(/images/survey-types/green.svg), url(/images/survey-types/bg-dots.svg)",
        backgroundPosition: "left center, right center, center",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundSize: "auto 1092px, auto 1092px, cover",
        backgroundColor: "#0F0F0F",
      }}
      className="rounded-b-xl pb-[34.9px] pl-2 pr-4 pt-[47px] lg:rounded-b-[32px] lg:px-5 lg:pb-5 lg:pt-20"
      id="faq"
    >
      <section className="container mx-auto flex flex-col justify-between gap-[35px] md:flex-row lg:gap-[83px] xl:px-20">
        <section>
          <header className="w-full space-y-3 md:max-w-[467px] lg:space-y-5">
            <h2 className="max-w-[231px] text-[28px] font-medium leading-normal text-IFGreen lg:max-w-full lg:text-5xl">
              Frequently asked questions
            </h2>
            <p className="text-sm font-normal text-IFText lg:text-base">
              If you have any more questions or need further assistance, please
              don&apos;t hesitate to{" "}
              <Link href={"#"} target="_blank" className="text-white underline">
                contact us
              </Link>{" "}
              directly. We&apos;re here to help you make the most of
              Intergraflow. FEEL FREE TO CHAT WITH US
            </p>
          </header>
          <WaitlistModal
            buttonProps={{
              text: "Join waitlist",
              className: "mt-[24px] lg:mt-[27px]",
            }}
          />
        </section>

        <Accordion.Root
          defaultValue={faqs[0].question}
          type="single"
          collapsible
          className="w-full space-y-4 md:max-w-[531px]"
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              value={faq.question}
              key={index}
              className="overflow-hidden border-b-[0.5px] border-[#868686] p-3"
            >
              <Accordion.Header asChild>
                <Accordion.Trigger className="flex w-full items-center justify-between">
                  <h3 className="max-w-[417px] text-left text-sm font-medium text-white lg:text-lg">
                    {faq.question}
                  </h3>

                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 5V19"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="pt-2 text-[11.678px] font-normal leading-[17.517px] text-IFText data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown lg:text-base">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>
    </div>
  );
}
