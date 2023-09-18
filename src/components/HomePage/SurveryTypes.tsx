import Image from 'next/image';
import Button from '../Button';
import GlassContainer from './GlassContainer';
import Pill from './Pill';
import SurveyDetails from './SurveyDetails';

export default function SurveryTypes() {
  return (
    <div
      id='survey-types'
      className='pt-12 pb-20 min-h-screen'
      style={{
        backgroundImage:
          'url(/images/survey-types/blue.svg), url(/images/survey-types/green.svg), url(/images/survey-types/bg-dots.svg)',
        backgroundPosition: 'left center, right center, center',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundSize: 'auto 1092px, auto 1092px, cover',
        backgroundColor: 'black',
      }}
    >
      <div className='flex items-center gap-[71px] mx-auto w-max'>
        <GlassContainer className='pt-[26px] pb-[25px] pl-[26px] space-y-[41px] rounded-t-[20px]'>
          <Image
            src={'/images/survey-types/nps.png'}
            width={494}
            height={209}
            alt='NPS'
            className='rounded-l-[11.5px]'
          />
          <SurveyDetails
            title='NPS ( Net promoter score)'
            description='Assess customer loyalty and willingness to recommend your brand.'
            className='max-w-[302px]'
          />
        </GlassContainer>

        <GlassContainer className='px-6 py-9 rounded-t-[20px] max-w-[348px] space-y-6'>
          <SurveyDetails
            title='Contact response'
            description='Collect user contact details for follow-ups, inquiries, or subscription sign-ups.'
          />
          <Image
            src={'/images/survey-types/contact-form.png'}
            height={288}
            width={300}
            alt='Contact form'
            className='rounded-[12.608px]'
          />
        </GlassContainer>
      </div>

      <header className='flex items-center mx-auto w-max gap-[89px] py-9'>
        <section className='max-w-[593px]'>
          <Pill text='Very easy to use' variant='secondary' />
          <h2 className='text-IFGreen text-[72px] font-medium leading-[80px] pt-2 pb-4'>
            Leverage on our Survey widgets
          </h2>
          <p className='max-w-[533px] text-IFText pb-8'>
            Each question is unique, and every response matters. We offer a wide
            range of response options for all your survey needs, be it customer
            feedback, market research, or opinions.{' '}
            <span className='text-white'>We've got you covered.</span>
          </p>
          <Button text='Check demo' />
        </section>

        <GlassContainer className='space-y-6 px-6 py-8 max-w-[354px] rounded-t-[20px]'>
          <Image
            src={'/images/survey-types/rating.png'}
            width={306}
            height={239}
            alt='Contact form'
            className='w-full rounded-[12.608px]'
          />

          <SurveyDetails
            title='Rating'
            description='Gather opinions through a customizable rating scale, ideal for product or service feedback.'
          />
        </GlassContainer>
      </header>

      <div className='flex items-center mx-auto w-max gap-[68px] py-9'>
        <GlassContainer className='pt-8 px-6 rounded-t-[20px] space-y-6'>
          <SurveyDetails
            title='Matrix response'
            description='Efficiently capture complex data using a customizable grid of items, perfect for evaluating multiple items with the same response options.'
            className='max-w-[397px]'
          />
          <Image
            src={'/images/survey-types/matrix.png'}
            width={474}
            height={239}
            alt='Contact form'
            className='w-full rounded-t-[11.493px]'
          />
        </GlassContainer>

        <GlassContainer className='px-6 pt-8 rounded-b-[20px] space-y-6 max-w-[345px]'>
          <SurveyDetails
            title='Single choice'
            description='Collect accurate answers using single-choice questions. Ideal for polls, quizzes, and easy decision-making.'
          />
          <Image
            src={'/images/survey-types/single-choice.png'}
            width={297}
            height={300}
            alt='Contact form'
            className='w-full h-auto rounded-t-[12.493px]'
          />
        </GlassContainer>
      </div>
    </div>
  );
}
