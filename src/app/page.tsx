import Hero from '@/components/HomePage/Hero';
import Possibilities from '@/components/HomePage/Possibilities';
import Showcase from '@/components/HomePage/Showcase';
import SurveryTypes from '@/components/HomePage/SurveryTypes';

export default function Home() {
  return (
    <main>
      <Hero />
      <Possibilities />
      <SurveryTypes />
      <Showcase />
    </main>
  );
}
