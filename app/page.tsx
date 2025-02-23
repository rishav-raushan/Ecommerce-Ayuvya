import HeroSlider from '@/components/home/HeroSlider';
import BestSellers from '@/components/home/BestSellers';
import Categories from '@/components/home/Categories';
import NewLaunches from '@/components/home/NewLaunches';
import PopularCombos from '@/components/home/PopularCombos';
import SpecialOffer from '@/components/home/SpecialOffer';
import AiSuggestion from '@/components/home/AiSuggestion';
import Reviews from '@/components/home/Reviews';
import ContactForm from '@/components/home/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <div className="container mx-auto px-4 space-y-16 py-8">
        <BestSellers />
        <Categories />
        <NewLaunches />
        <PopularCombos />
        <SpecialOffer />
        <AiSuggestion />
        <Reviews />
        <ContactForm />
      </div>
    </div>
  );
}