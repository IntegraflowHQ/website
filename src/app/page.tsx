import Data from '@/components/HomePage/Data';
import FAQ from '@/components/HomePage/FAQ';
import Hero from '@/components/HomePage/Hero';
import Possibilities from '@/components/HomePage/Possibilities';
import Showcase from '@/components/HomePage/Showcase';
import SurveryTypes from '@/components/HomePage/SurveryTypes';
import WhoCanUse from '@/components/HomePage/WhoCanUse';

export default function Home() {
  return (
    <main>
      <Hero />
      <Possibilities />
      <SurveryTypes />
      <Showcase />
      <WhoCanUse />
      <Data />
      <FAQ />
    </main>
  );
}
