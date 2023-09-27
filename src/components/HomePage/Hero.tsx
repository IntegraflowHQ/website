import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import WaitlistModal from './WaitlistModal';

export default function Hero() {
  return (
    <div
      className='w-full rounded-b-3xl'
      style={{
        backgroundImage: "url(/bg-dots.svg), url('/bg-line.svg'), url(/bg.svg)",
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundPosition: 'center, center, center',
        backgroundSize: 'cover, cover, cover',
        backgroundColor: 'lightgrey',
        mixBlendMode: 'overlay',
      }}
    >
      <div
        className='w-full h-full rounded-b-3xl pt-[122px]'
        style={{
          backgroundImage:
            'linear-gradient(140deg, rgba(28, 15, 89, 1) 40%, rgba(0, 107, 41, 1))',
          mixBlendMode: 'multiply',
        }}
      >
        <div className='h-full flex flex-col justify-between items-center max-w-[930px] mx-auto pb-5'>
          <div />
          <div className='text-center'>
            <div
              className='px-[14px] py-2 border rounded-full inline-block bg-IFPurpleLight'
              style={{
                boxShadow:
                  '0px 2px 4px 0px rgba(248, 248, 248, 0.16) inset, -2px 0px 4px 0px rgba(183, 183, 183, 0.25) inset',
              }}
            >
              <p className='text-sm font-normal text-white'>
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
              <h1 className='text-[64px] leading-[72px] font-semibold text-IFTextBold pt-3'>
                Boost your business output, online or offline, with valuable
                customer insights
              </h1>
              <p className='text-IFText pt-4 max-w-[649px] mx-auto'>
                Redefine customer experience with organic feedback and
                behavioral data in real-time. Enjoy intuitive designs, open
                source surveys, advanced analytics, seamless collaboration on
                the go.
              </p>
            </header>
            <div className='flex justify-center pt-8 space-x-2'>
              <WaitlistModal
                buttonProps={{
                  text: 'Get early access today',
                  className: 'w-[240px]',
                }}
              />
              <Button
                text='Check demo'
                className='w-[240px]'
                variant='secondary'
              />
            </div>
          </div>
          <div className='flex items-center gap-[14px] mt-[125px]'>
            <div>
              <Image
                src='/profiles/1.png'
                className='inline border rounded-full border-IFPurple'
                width={44}
                height={44}
                alt='user'
              />
              <Image
                src='/profiles/2.png'
                className='inline -ml-4 border rounded-full border-IFPurple'
                width={44}
                height={44}
                alt='user'
              />
              <Image
                src='/profiles/3.png'
                className='inline -ml-4 border rounded-full border-IFPurple'
                width={44}
                height={44}
                alt='user'
              />
            </div>
            <p className='text-lg text-IFText w-[316px]'>
              Join over <span className='text-white'>(100+)</span> other{' '}
              <span className='text-white'>businesses</span> today in the
              waitlist)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
