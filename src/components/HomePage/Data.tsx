'use client';
import AnalysisImage from '@/assets/images/analysis.png';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import Button from '../Button';
import Pill from './Pill';

const features = [
  {
    name: 'Analyze feedback',
    title: 'Real-time Data Analytics',
    description:
      'Harness the power of real-time data analytics with INTEGRAFLOW. Watch as survey responses pour in, and instantly gain access to a wealth of insights. Our dynamic analytics dashboard transforms raw data into actionable information right before your eyes. Monitor trends, track progress, and make data-driven decisions without delay.',
    image: AnalysisImage,
  },
  {
    name: 'Real-Time Collaboration',
    title: 'Real-time Collaboration:',
    description:
      "Collaborate seamlessly with your team, no matter where they are. Formily's real-time collaboration feature lets multiple team members work on surveys simultaneously. Collaborate on survey design, analyse results together, and streamline your workflow with effortless teamwork.",
    image: AnalysisImage,
  },
  {
    name: 'Advanced Triggers',
    title: 'Advanced Triggers',
    description:
      "Take survey automation to the next level with advanced triggers. Set up triggers based on complex conditions, allowing you to collect feedback at precisely the right moments within your product or workflow. Whether you need to capture responses based on user interactions, behaviours, or specific events, Formily's advanced triggers make it possible.",
    image: AnalysisImage,
  },
  {
    name: 'User Segmentation',
    title: 'User Segmentation',
    description:
      "Take your surveys to the next level with advanced targeting and user segmentation. Formily empowers you to define specific user segments based on attributes and behaviours. Tailor your surveys to resonate with different audience groups and collect the most relevant data. Gain a deeper understanding of your audience's preferences and needs.",
    image: AnalysisImage,
  },
];

export default function Data() {
  return (
    <div
      className='bg-IFBlack py-20 px-5 rounded-t-[32px]'
      style={{
        backgroundImage: 'url(/images/data/bg.png)',
        backgroundPosition: 'bottom right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className='mx-auto w-full max-w-[1029px] space-y-16'>
        <header className='space-y-[17px] max-w-[443px]'>
          <Pill text='Data is key' />
          <h2 className='text-IFTextBold text-[44px] leading-[52px] font-medium'>
            Transform Data into Actionable Insights
          </h2>
        </header>

        <Tabs.Root
          className='flex flex-col w-full'
          defaultValue={features[0].name}
        >
          <Tabs.List
            className='shrink-0 flex border-b border-[#303030] overflow-x-auto gap-8'
            aria-label='Manage your account'
          >
            {features.map((feature, index) => (
              <Tabs.Trigger
                className='pb-[12.5px] border-b-2 border-transparent data-[state=active]:border-IFGreen text-IFText data-[state=active]:text-IFTextLight'
                value={feature.name}
                key={index}
              >
                {feature.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {features.map((feature, index) => (
            <Tabs.Content
              className='hidden data-[state=active]:flex w-full justify-between pt-[62px]'
              value={feature.name}
              key={index}
            >
              <div className='pt-[7px]'>
                <header className='space-y-4 max-w-[531px]'>
                  <h3 className='text-IFTextLight text-2xl font-semibold'>
                    {feature.title}
                  </h3>
                  <p className='text-IFText text-base font-normal'>
                    {feature.description}
                  </p>
                </header>
                <Button text='Get early access today' className='mt-8' />
              </div>
              <Image
                src={feature.image.src}
                alt={feature.name}
                width={445}
                height={334}
              />
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </section>
    </div>
  );
}
