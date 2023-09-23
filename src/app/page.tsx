import Data from '@/components/HomePage/Data';
import FAQ from '@/components/HomePage/FAQ';
import Footer from '@/components/HomePage/Footer';
import Hero from '@/components/HomePage/Hero';
import Integration from '@/components/HomePage/Integration';
import Possibilities from '@/components/HomePage/Possibilities';
import Showcase from '@/components/HomePage/Showcase';
import SurveryTypes from '@/components/HomePage/SurveryTypes';
import WhoCanUse from '@/components/HomePage/WhoCanUse';

export default function Home() {
  return (
    <main className='space-y-2 px-[25px] pb-2'>
      <Hero />
      <Possibilities />
      <SurveryTypes />
      <Showcase />
      <WhoCanUse />
      <Data />
      <FAQ />
      <Integration />
      <Footer />
    </main>
  );
}
