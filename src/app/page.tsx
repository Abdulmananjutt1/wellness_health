import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import WhyWellness from '@/components/sections/WhyWellness';
import HitGoals from '@/components/sections/HitGoals';
import CalorieCounter from '@/components/sections/CalorieCounter';
import Features from '@/components/sections/Features';
import Reviews from '@/components/sections/Reviews';
import FAQ from '@/components/sections/FAQ';
import Pricing from '@/components/sections/Pricing';
import FoodScanner from '@/components/sections/FoodScanner';
import NutritionTracker from '@/components/sections/NutritionTracker';
import SocialCommunity from '@/components/sections/SocialCommunity';
import WellnessPlanner from '@/components/sections/WellnessPlanner';
import DownloadApp from '@/components/sections/DownloadApp';
import SuccessStories from '@/components/sections/SuccessStories';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Features />
      <HitGoals />
      <CalorieCounter />
      <FoodScanner />
      <NutritionTracker />
      <SocialCommunity />
      <WellnessPlanner />
   
      <SuccessStories />
      <Reviews />
      <Pricing />
      <WhyWellness />
      <DownloadApp />
      <FAQ />
      <Footer/>
    </main>
  );
}