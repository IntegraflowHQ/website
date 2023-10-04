import Data from "@/components/HomePage/Data";
import DeviceShowcase from "@/components/HomePage/DeviceShowcase";
import FAQ from "@/components/HomePage/FAQ";
import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import Integration from "@/components/HomePage/Integration";
import ProductBenefits from "@/components/HomePage/ProductBenefits";
import SurveryTypes from "@/components/HomePage/SurveryTypes";
import UseCases from "@/components/HomePage/UseCases";

export default function Home() {
  return (
    <main className="space-y-2 px-1 pb-2 pt-[72px] lg:px-[25px]">
      <Hero />
      <ProductBenefits />
      <SurveryTypes />
      <DeviceShowcase />
      <UseCases />
      <Data />
      <FAQ />
      <Integration />
      <Footer />
    </main>
  );
}
