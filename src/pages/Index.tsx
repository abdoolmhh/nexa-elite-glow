import ParticleField from '@/components/ParticleField';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import FeaturesGrid from '@/components/FeaturesGrid';
import AISection from '@/components/AISection';
import DemoSection from '@/components/DemoSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

/* ── Configure contact details here ── */
const WHATSAPP_NUMBER = '2348000000000';
const EMAIL_ADDRESS = 'hello@nexastoreos.com';

const Index = () => (
  <div className="min-h-screen bg-background text-foreground grain-overlay">
    <ParticleField />
    <Navbar />
    <main>
      <HeroSection />
      <TrustStrip />
      <FeaturesGrid />
      <AISection />
      <DemoSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <FinalCTA whatsapp={WHATSAPP_NUMBER} email={EMAIL_ADDRESS} />
    </main>
    <Footer />
  </div>
);

export default Index;
