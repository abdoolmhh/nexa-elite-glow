import ParticleField from '@/components/ParticleField';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import FeaturesGrid from '@/components/FeaturesGrid';
import AISection from '@/components/AISection';
import DashboardShowcase from '@/components/DashboardShowcase';
import IndustrySwitcher from '@/components/IndustrySwitcher';
import HowItWorks from '@/components/HowItWorks';
import LifestyleShowcase from '@/components/LifestyleShowcase';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import IntegrationScroll from '@/components/IntegrationScroll';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const WHATSAPP_NUMBER = '2348000000000';
const EMAIL_ADDRESS = 'hello@nexastoreos.com';

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <ParticleField />
    <Navbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <FeaturesGrid />
      <AISection />
      <DashboardShowcase />
      <IndustrySwitcher />
      <HowItWorks />
      <LifestyleShowcase />
      <PricingSection />
      <FAQSection />
      <IntegrationScroll />
      <FinalCTA whatsapp={WHATSAPP_NUMBER} email={EMAIL_ADDRESS} />
    </main>
    <Footer />
  </div>
);

export default Index;
