import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import WaitlistModal from './WaitlistModal';

export default function Hero() {
  return (
    <div
      className='w-full rounded-b-3xl pt-[46px] md:pt-[122px]'
      style={{
        backgroundImage:
          "url('/bg-line.svg'), url(/bg-dots.svg), linear-gradient(140deg, rgba(28, 15, 89, 0.95) 40%, rgba(0, 107, 41, 0.95)), url(/bg.svg)",
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'center, center, center, center',
        backgroundSize: 'cover, cover, cover, cover',
      }}
    >
      <div className='h-full flex flex-col justify-between items-center max-w-[930px] mx-auto pb-5 pl-[14px] pr-[11px]'>
        <div />
        <div className='text-center'>
          <div
            className='px-[14px] py-2 border rounded-full inline-block bg-IFPurpleLight'
            style={{
              boxShadow:
                '0px 2px 4px 0px rgba(248, 248, 248, 0.16) inset, -2px 0px 4px 0px rgba(183, 183, 183, 0.25) inset',
            }}
          >
            <p className='text-xs leading-[18px] md:text-sm font-normal text-white'>
              We are open souce -{' '}
              <Link
                href={'https://github.com/IntegraflowHQ'}
                target='_blank'
                className='underline text-IFGreen'
              >
                Star us on Github
              </Link>
            </p>
          </div>
          <header>
            <h1 className='text-[32px] md:text-[64px] leading-8 md:leading-[72px] font-semibold text-IFTextBold pt-3'>
              Boost your business output, online or offline, with valuable
              customer insights
            </h1>
            <p className='text-IFText pt-4 max-w-[649px] mx-auto text-sm font-normal md:text-lg'>
              Redefine customer experience with organic feedback and behavioral
              data in real-time. Enjoy intuitive designs, open source surveys,
              advanced analytics, seamless collaboration on the go.
            </p>
          </header>
          <div className='flex flex-col sm:flex-row justify-center gap-2 pt-6 md:pt-8 w-full'>
            <WaitlistModal
              buttonProps={{
                text: 'Get early access today',
                className: 'sm:w-[240px]',
              }}
            />
            <Button
              text='Check demo'
              className='sm:w-[240px]'
              variant='secondary'
            />
          </div>
        </div>
        <div className='flex items-center gap-2 md:gap-[14px] mt-12 md:mt-[125px]'>
          <div className='flex w-max'>
            <Image
              src='/profiles/1.png'
              className='border rounded-full border-IFPurple w-6 h-6 md:w-11 md:h-11'
              width={44}
              height={44}
              alt='user'
            />
            <Image
              src='/profiles/2.png'
              className='-ml-4 border rounded-full border-IFPurple w-6 h-6 md:w-11 md:h-11'
              width={44}
              height={44}
              alt='user'
            />
            <Image
              src='/profiles/3.png'
              className='-ml-4 border rounded-full border-IFPurple w-6 h-6 md:w-11 md:h-11'
              width={44}
              height={44}
              alt='user'
            />
          </div>
          <p className='text-xs leading-[18px] md:text-lg text-IFText max-w-[208px] md:max-w-[316px]'>
            Join over <span className='text-white'>(100+)</span> other{' '}
            <span className='text-white'>businesses</span> today in the
            waitlist)
          </p>
        </div>
      </div>
    </div>
  );
}
