import Image from 'next/image';
import WaitlistModal from './WaitlistModal';

const useCases = [
  {
    title: 'Analytics tools',
    description:
      'Transform survey data into actionable insights, visualize trends, track responses, and generate efficient reports with analytics tools.',
  },
  {
    title: 'Shareable links',
    description:
      'Generate links for sharing via email, social media, or embedding in apps to easily interact and collect responses.',
  },
  {
    title: 'Location is no barrier',
    description:
      'Our platform seamlessly connects with a range of third-party apps, enhancing your productivity.',
  },
];

const CurlyBracket = () => (
  <strong className='text-[154px] font-thin -mt-[18px] leading-none text-IFText'>
    {'}'}
  </strong>
);

export default function ProductBenefits() {
  return (
    <section
      className='py-16 bg-IFBlack rounded-t-3xl'
      style={{
        backgroundImage: 'url(/bg/use-cases.png)',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
      id='benefit'
    >
      <section className='container flex justify-between mx-auto'>
        <section className='max-w-[419px]'>
          <header className='space-y-2'>
            <h2 className='text-IFTextBold text-[44px] leading-[52px] font-medium'>
              See What You can do with Integraflow
            </h2>
            <p className='pb-5 text-base font-normal text-IFText'>
              Automate. Simplify. Track Your Ever-Changing Customer’s Journey in
              One Space
            </p>
          </header>

          <div>
            {useCases.map((useCase, index) => (
              <section key={index} className='flex items-center gap-2'>
                <CurlyBracket />
                <div>
                  <h3 className='text-lg font-semibold text-white'>
                    {useCase.title}
                  </h3>
                  <p className='text-base font-normal text-IFText'>
                    {useCase.description}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <div className='pt-8 pl-[60px]'>
            <WaitlistModal buttonProps={{ text: 'Get early access today' }} />
          </div>
        </section>

        <section>
          <Image
            src='/images/product-benefits/user.svg'
            alt='Use cases'
            width={499}
            height={704}
            className='block object-cover object-right h-[704px] w-auto rounded-b-3xl'
          />
        </section>
      </section>
    </section>
  );
}
