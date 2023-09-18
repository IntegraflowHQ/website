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
      'Our platform seamlessly connects with a range of third-party apps, enhancing your productivity',
  },
];

const CurlyBracket = () => (
  <strong className='text-[154px] font-thin -mt-[18px] leading-none text-IFText'>
    {'}'}
  </strong>
);

export default function UseCases() {
  return (
    <section id='use-cases' className='bg-IFBlack py-16'>
      <section className='container flex mx-auto'>
        <section className='max-w-[419px]'>
          <header className='space-y-2'>
            <h2 className='text-IFTextBold text-[44px] leading-[52px] font-medium'>
              See What You can do with Integraflow
            </h2>
            <p className='text-IFText text-base font-normal'>
              Automate. Simplify. Track Your Ever-Changing Customer’s Journey in
              One Space
            </p>
          </header>

          <div>
            {useCases.map((useCase, index) => (
              <section key={index} className='flex gap-2 items-center'>
                <CurlyBracket />
                <div>
                  <h3 className='text-white text-lg font-semibold'>
                    {useCase.title}
                  </h3>
                  <p className='text-IFText text-base font-normal'>
                    {useCase.description}
                  </p>
                </div>
              </section>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
