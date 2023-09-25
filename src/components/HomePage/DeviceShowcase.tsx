import Image from 'next/image';
import Button from '../Button';
import GlassContainer from './partials/GlassContainer';
import Pill from './partials/Pill';
import SurveyDetails from './partials/SurveyDetails';

export default function DeviceShowcase() {
  return (
    <section
      style={{
        backgroundImage:
          'url(/images/showcase/bg-left.png), url(/images/showcase/bg-right.png)',
        backgroundPosition: 'left bottom, right center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundColor: '#050505',
      }}
      className='pt-20 pb-[78px] space-y-12 rounded-t-[32px]'
    >
      <header className='container flex gap-10 mx-auto'>
        <h2 className='text-IFTextBold text-[44px] leading-[52px] font-medium'>
          Automated surveys throughout the user journey
        </h2>
        <div className='space-y-8'>
          <p className='text-IFText text-lg font-normal'>
            To understand user behavior, fulfill (your) customer-user core
            market needs and continually increase the overall business output
          </p>
          <Button text='Check demo' />
        </div>
      </header>

      <div className='flex gap-5 mx-auto w-max items-center'>
        <GlassContainer className='pt-[33px] pl-[33px] pr-[64.51px] rounded-t-3xl w-[414px]'>
          <Pill text='Mobile' />
          <SurveyDetails
            title='Single answer selection'
            description='We provide comprehensive, data-driven solution to understand user behavior.'
            className='pb-[52px] pt-4'
          />
          <div className='flex justify-end'>
            <Image
              src={'/images/showcase/mobile.png'}
              width={300}
              height={384}
              alt='Mobile'
              className='rounded-t-[48px]'
            />
          </div>
        </GlassContainer>

        <GlassContainer className='rounded-3xl w-[630px] h-min'>
          <div className='pt-8 pl-8 max-w-[316px]'>
            <Pill text='Desktop' />
            <SurveyDetails
              title='Single answer selection'
              description='We provide comprehensive, data-driven solution to understand user behavior.'
              className='pb-[52px] pt-4'
            />
          </div>
          <div className='pr-[47px]'>
            <Image
              src={'/images/showcase/desktop.png'}
              width={593}
              height={466}
              alt='Desktop'
              className='block rounded-bl-3xl w-full h-full'
            />
          </div>
        </GlassContainer>
      </div>
    </section>
  );
}
