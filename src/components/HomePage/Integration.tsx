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
      className="rounded-t-[32px] bg-IFBlack pb-[54px] pt-20"
      style={{
        backgroundImage:
          "url(/images/survey-types/bg-dots.svg), radial-gradient(rgba(12, 79, 37, 1), rgba(5, 5, 5, 1))",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover",
      }}
    >
      <section className="mx-auto w-max space-y-7">
        <div className="mx-auto w-full max-w-max space-y-4">
          <div className="flex w-full max-w-max gap-[6.11px]">
            {integrationIconRowOne.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
          <div className="mx-auto flex w-full max-w-max gap-[6.11px]">
            {integrationIconRowTwo.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
        </div>

        <header className="flex w-full max-w-[839px] flex-col items-center gap-4">
          <h2 className="text-center text-[52px] font-semibold leading-normal text-white">
            Seamlessly Connect Integraflow with Your Workflow
          </h2>
          <p className="w-full max-w-[532px] text-center text-IFText200">
            Track your ever-evolving customer-user journey in one space.
          </p>
          <WaitlistModal
            buttonProps={{
              variant: "green",
              text: "Join waitlist",
              className: "w-64",
            }}
          />
        </header>
      </section>
    </section>
  );
}
