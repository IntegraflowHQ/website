import Image from "next/image";
import WaitlistModal from "./WaitlistModal";

const useCases = [
  {
    title: "Analytics tools",
    description:
      "Transform survey data into actionable insights, visualize trends, track responses, and generate efficient reports with analytics tools.",
  },
  {
    title: "Shareable links",
    description:
      "Generate links for sharing via email, social media, or embedding in apps to easily interact and collect responses.",
  },
  {
    title: "Streamline your workflow",
    description:
      "Our platform seamlessly connects with a range of third-party apps, enhancing your productivity.",
  },
];

const CurlyBracket = () => (
  <strong className="-mt-[12px] text-[110px] font-thin leading-none text-IFText md:-mt-[18px] md:text-[154px]">
    {"}"}
  </strong>
);

export default function ProductBenefits() {
  return (
    <section
      className="rounded-t-xl bg-IFBlack px-[14px] py-[46px] md:rounded-t-3xl md:bg-benefits md:bg-right md:bg-no-repeat md:py-16"
      id="benefit"
    >
      <section className="container mx-auto flex justify-between xl:px-20">
        <section className="max-w-[419px]">
          <header className="space-y-2">
            <h2 className="text-[28px] font-medium leading-8 text-IFTextBold md:text-[44px] md:leading-[52px]">
              See What You can do with Integraflow
            </h2>
            <p className="pb-5 text-sm font-normal text-IFText md:text-base">
              Automate. Simplify. Track Your Ever-Changing Customer’s Journey in
              One Space
            </p>
          </header>

          <div>
            {useCases.map((useCase, index) => (
              <section key={index} className="flex items-center gap-2">
                <CurlyBracket />
                <div>
                  <h3 className="text-base font-semibold text-white md:text-lg">
                    {useCase.title}
                  </h3>
                  <p className="text-xs font-normal leading-5 text-IFText md:text-base">
                    {useCase.description}
                  </p>
                </div>
              </section>
            ))}
          </div>

          <div className="hidden pl-[60px] pt-8 md:block">
            <WaitlistModal buttonProps={{ text: "Get early access today" }} />
          </div>
        </section>

        <section className="hidden md:block">
          <Image
            src="/images/product-benefits/user.svg"
            alt="Use cases"
            width={499}
            height={704}
            className="block h-[704px] w-auto rounded-b-3xl object-cover object-right"
          />
        </section>
      </section>
    </section>
  );
}
