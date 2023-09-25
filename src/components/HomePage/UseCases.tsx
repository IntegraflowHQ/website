import WaitlistModal from './WaitlistModal';
import Pill from './partials/Pill';

export default function UseCases() {
  return (
    <div
      id='use-cases'
      style={{
        backgroundImage:
          'url(/bg-dots.svg), radial-gradient(rgba(28, 15, 89, 1), rgba(5, 5, 5, 1))',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'cover, cover',
      }}
      className='pt-[55px] pb-[49.25px] space-y-12 rounded-b-[32px]'
    >
      <section className='container flex mx-auto gap-[29px] items-center'>
        <header className='max-[479px]'>
          <h2 className='text-[64px] leading-[68px] font-medium text-IFTextBold'>
            Who can use integraflow
          </h2>
          <p className='text-IFText text-base font-normal pt-4 pb-8'>
            We've got you covered.
          </p>
          <WaitlistModal buttonProps={{ text: 'Get early access today' }} />
        </header>

        <div>
          <Pill
            text='Founders & Business Owners'
            variant='tertiary'
            className='ml-[73px]'
          />
          <Pill
            text='Growth team'
            variant='tertiary'
            className='ml-[101.4px] -mt-[24.863px]'
          />
          <Pill
            text='Product team'
            variant='tertiary'
            className='ml-[230px] -mt-[24.863px]'
          />
          <Pill
            text='customer success team'
            variant='tertiary'
            className='-mt-[24.863px]'
          />
          <Pill
            text='HR team'
            variant='tertiary'
            className='ml-[73px] -mt-[24.863px]'
          />
        </div>
      </section>
    </div>
  );
}
