import {
  Airtable,
  Bitbucket,
  Cal,
  Calendly,
  Discord,
  Github,
  Gmail,
  Hubspot,
  Intercom,
  Linear,
  Mailchimp,
  Make,
  Monday,
  Notion,
  Sheets,
  Slack,
  Telegram,
  Trello,
  Zapier,
  Zendesk,
} from "../icons";
import WaitlistModal from "./WaitlistModal";

const integrationIconRowOne = [
  Slack,
  Sheets,
  Monday,
  Trello,
  Mailchimp,
  Make,
  Zapier,
  Calendly,
  Cal,
  Github,
  Linear,
];

const integrationIconRowTwo = [
  Zendesk,
  Intercom,
  Gmail,
  Airtable,
  Hubspot,
  Discord,
  Telegram,
  Notion,
  Bitbucket,
];

export default function Integration() {
  return (
    <section
      className="rounded-t-xl bg-IFBlack py-16 lg:rounded-t-[32px] lg:pb-[54px] lg:pt-20"
      style={{
        backgroundImage:
          "url(/images/survey-types/bg-dots.svg), radial-gradient(rgba(12, 79, 37, 1), rgba(5, 5, 5, 1))",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover",
      }}
    >
      <section className="mx-auto w-full space-y-7 lg:w-max">
        <div className="mx-auto w-full max-w-max space-y-4">
          <div className="flex w-full max-w-max gap-[2.8px] lg:gap-[6.11px]">
            {integrationIconRowOne.map((Icon, index) => (
              <div
                key={index}
                className="rounded-[6.41px] border-[1.83px] border-[#093F1D] lg:rounded-[16.654px] lg:border-[3.84px] [&>*]:h-[23px] [&>*]:w-[23px] lg:[&>*]:h-max lg:[&>*]:w-max"
              >
                <Icon />
              </div>
            ))}
          </div>
          <div className="mx-auto flex w-full max-w-max gap-[2.8px] lg:gap-[6.11px]">
            {integrationIconRowTwo.map((Icon, index) => (
              <div
                key={index}
                className="flex rounded-[6.41px] border-[1.83px] border-[#093F1D] only:h-[23px] only:w-[23px] lg:rounded-[16.654px] lg:border-[3.84px] [&>*]:h-[23px] [&>*]:w-[23px] lg:[&>*]:h-max lg:[&>*]:w-max"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        <header className="mx-auto flex w-full max-w-[839px] flex-col items-center gap-2 px-10 lg:gap-4 lg:px-0">
          <h2 className="text-center text-[28px] font-semibold leading-normal text-white lg:text-[52px]">
            Seamlessly Connect Integraflow with Your Workflow
          </h2>
          <p className="w-full px-5 text-center text-sm text-IFText200 lg:max-w-[532px] lg:px-0 lg:text-base">
            Track your ever-evolving customer-user journey in one space.
          </p>
          <WaitlistModal
            buttonProps={{
              variant: "green",
              text: "Join waitlist",
              className: "lg:w-64 mt-2 lg:mt-0",
            }}
          />
        </header>
      </section>
    </section>
  );
}
