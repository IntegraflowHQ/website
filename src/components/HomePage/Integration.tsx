import Button from '../Button';
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
} from '../icons';

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
      className='bg-IFBlack pt-20 pb-[54px]'
      style={{
        backgroundImage:
          'url(/images/survey-types/bg-dots.svg), radial-gradient(rgba(12, 79, 37, 1), rgba(5, 5, 5, 1))',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'cover, cover',
      }}
    >
      <section className='w-max mx-auto space-y-7'>
        <div className='w-full max-w-max mx-auto space-y-4'>
          <div className='flex gap-[6.11px] w-full max-w-max'>
            {integrationIconRowOne.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
          <div className='flex gap-[6.11px] w-full max-w-max mx-auto'>
            {integrationIconRowTwo.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
        </div>

        <header className='w-full max-w-[839px] flex flex-col gap-4 items-center'>
          <h2 className='text-white text-[52px] font-semibold leading-normal text-center'>
            Seamlessly Connect Integraflow with Your Workflow
          </h2>
          <p className='w-full max-w-[532px] text-center text-IFText200'>
            Track your ever-evolving customer-user journey in one space.
          </p>
          <Button variant='green' text='Join waitlist' className='w-64' />
        </header>
      </section>
    </section>
  );
}
