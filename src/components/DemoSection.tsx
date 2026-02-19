import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ScrollReveal from './ScrollReveal';
import mockupDashboard from '@/assets/mockup-dashboard.png';
import mockupPOS from '@/assets/mockup-pos.png';
import mockupReports from '@/assets/mockup-reports.png';
import heroVideo from '@/assets/hero-video.webm?url';
import demoAccounting from '@/assets/demo-accounting.mp4?url';
import demoCustomer from '@/assets/demo-customer.mp4?url';

const slides = [
  { src: mockupDashboard, label: 'Dashboard Overview' },
  { src: mockupPOS, label: 'Point of Sale' },
  { src: mockupReports, label: 'Reports & Analytics' },
];

const videos = [
  { src: heroVideo, label: 'Product Overview', type: 'video/webm' },
  { src: demoAccounting, label: 'Accounting Agent', type: 'video/mp4' },
  { src: demoCustomer, label: 'Customer Agent', type: 'video/mp4' },
];

const DemoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveSlide(index);
    }
  }, [emblaApi]);

  return (
    <section id="demo" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Demo
            </span>
            <h2 className="section-heading text-foreground">
              See it in <span className="text-primary">action.</span>
            </h2>
            <p className="section-subheading">A quick look at what running your store with NEXA feels like.</p>
          </div>
        </ScrollReveal>

        {/* Video player with tabs */}
        <ScrollReveal delay={100}>
          <div className="max-w-4xl mx-auto mb-16">
            {/* Video tabs */}
            <div className="flex gap-2 mb-4 justify-center">
              {videos.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setActiveVideo(i)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${
                    activeVideo === i
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-xl shadow-primary/5">
              <video
                key={videos[activeVideo].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-video object-cover"
              >
                <source src={videos[activeVideo].src} type={videos[activeVideo].type} />
              </video>
            </div>
          </div>
        </ScrollReveal>

        {/* Screenshot carousel on transparent cards */}
        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide) => (
                  <div key={slide.label} className="flex-[0_0_100%] min-w-0 px-2">
                    <div className="p-3 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                      <div className="rounded-xl overflow-hidden relative">
                        <img src={slide.src} alt={slide.label} className="w-full aspect-video object-cover" loading="lazy" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
                          <span className="font-mono text-sm text-primary">{slide.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === i ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DemoSection;
