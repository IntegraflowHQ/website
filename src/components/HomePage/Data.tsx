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
    title: 'Real-time Data Analytics',
    description:
      'Harness the power of real-time data analytics with INTEGRAFLOW. Watch as survey responses pour in, and instantly gain access to a wealth of insights. Our dynamic analytics dashboard transforms raw data into actionable information right before your eyes. Monitor trends, track progress, and make data-driven decisions without delay.',
    image: AnalysisImage,
  },
  {
    name: 'Advanced Triggers',
    title: 'Real-time Data Analytics',
    description:
      'Harness the power of real-time data analytics with INTEGRAFLOW. Watch as survey responses pour in, and instantly gain access to a wealth of insights. Our dynamic analytics dashboard transforms raw data into actionable information right before your eyes. Monitor trends, track progress, and make data-driven decisions without delay.',
    image: AnalysisImage,
  },
  {
    name: 'User Segmentation',
    title: 'Real-time Data Analytics',
    description:
      'Harness the power of real-time data analytics with INTEGRAFLOW. Watch as survey responses pour in, and instantly gain access to a wealth of insights. Our dynamic analytics dashboard transforms raw data into actionable information right before your eyes. Monitor trends, track progress, and make data-driven decisions without delay.',
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
