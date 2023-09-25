'use client';
import * as Accordion from '@radix-ui/react-accordion';
import Link from 'next/link';
import WaitlistModal from './WaitlistModal';

const faqs = [
  {
    question: 'What is integraflow?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: 'What types of surveys can I create with integraflow?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: 'How do I analyse survey responses?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: 'Can I collaborate with my team on surveys?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: 'How do I share surveys with my audience?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: 'Can I use integraflow with other tools I use?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: 'Is integraflow? user-friendly for beginners?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
  {
    question: 'Is my data secure with integraflow?',
    answer:
      "Integraflow is a powerful survey and data collection platform designed to help individuals and organisations gather valuable insights. Whether you're conducting market research, collecting customer feedback, or running internal surveys, integraflow simplifies the process and empowers you to make data-driven decisions.",
  },
];

export default function FAQ() {
  return (
    <div
      style={{
        backgroundImage:
          'url(/images/survey-types/blue.svg), url(/images/survey-types/green.svg), url(/images/survey-types/bg-dots.svg)',
        backgroundPosition: 'left center, right center, center',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundSize: 'auto 1092px, auto 1092px, cover',
        backgroundColor: '#0F0F0F',
      }}
      className='pt-20 px-5 pb-5 rounded-b-[32px]'
      id='faq'
    >
      <section className='flex justify-between w-full max-w-[1029px] mx-auto'>
        <section>
          <header className='max-w-[467px] space-y-5'>
            <h2 className='text-IFGreen text-5xl leading-normal font-medium'>
              Frequently asked questions
            </h2>
            <p className='text-IFText text-base font-normal'>
              If you have any more questions or need further assistance, please
              don't hesitate to{' '}
              <Link href={'#'} target='_blank' className='text-white underline'>
                contact us
              </Link>{' '}
              directly. We're here to help you make the most of Intergraflow.
              FEEL FREE TO CHAT WITH US
            </p>
          </header>
          <WaitlistModal
            buttonProps={{ text: 'Join waitlist', className: 'mt-[27px]' }}
          />
        </section>

        <Accordion.Root
          defaultValue={faqs[0].question}
          type='single'
          collapsible
          className='space-y-4 w-full max-w-[531px]'
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              value={faq.question}
              key={index}
              className='p-3 overflow-hidden border-b-[0.5px] border-[#868686]'
            >
              <Accordion.Header asChild>
                <header className='flex items-center justify-between'>
                  <h3 className='text-white text-lg font-medium max-w-[417px]'>
                    {faq.question}
                  </h3>
                  <Accordion.Trigger>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 5V19'
                        stroke='#fff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M5 12H19'
                        stroke='#fff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Accordion.Trigger>
                </header>
              </Accordion.Header>
              <Accordion.Content className='pt-2 text-IFText text-base font-normal data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp'>
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </section>
    </div>
  );
}
