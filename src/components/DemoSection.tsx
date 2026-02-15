import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ScrollReveal from './ScrollReveal';
import demoDashboard from '@/assets/demo-dashboard.png';
import demoPOS from '@/assets/demo-pos.png';
import demoReports from '@/assets/demo-reports.png';

const slides = [
  { src: demoDashboard, label: 'Dashboard Overview' },
  { src: demoPOS, label: 'Point of Sale' },
  { src: demoReports, label: 'Reports & Analytics' },
];

const DemoSection = () => {
  const [playing, setPlaying] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setActiveSlide(index);
    }
  }, [emblaApi]);

  // Track slide changes
  useCallback(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => setActiveSlide(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <section id="demo" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-heading text-foreground">
              See it in <span className="text-primary">action.</span>
            </h2>
            <p className="section-subheading">A quick look at what running your store with NEXA feels like.</p>
          </div>
        </ScrollReveal>

        {/* Video player mock */}
        <ScrollReveal delay={100}>
          <div className="glass-panel p-2 rounded-2xl max-w-3xl mx-auto mb-16 relative overflow-hidden group">
            <div className="aspect-video rounded-xl flex items-center justify-center relative" style={{ background: 'hsl(158 30% 8%)' }}>
              <div className="absolute inset-0 shimmer rounded-xl" />
              {!playing ? (
                <button
                  onClick={() => setPlaying(true)}
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'hsl(158 80% 50% / 0.15)', border: '2px solid hsl(158 80% 50% / 0.4)' }}
                  aria-label="Play demo"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="hsl(158, 80%, 50%)" className="ml-1">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              ) : (
                <div className="relative z-10 text-center p-8">
                  <div className="font-mono text-primary text-lg mb-2">Demo Playing...</div>
                  <p className="text-sm text-muted-foreground">Full walkthrough video coming soon.</p>
                  <button onClick={() => setPlaying(false)} className="mt-4 font-mono text-xs text-primary/60 hover:text-primary transition-colors">
                    ← Back
                  </button>
                </div>
              )}
              {/* Decorative corner marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/30 rounded-bl" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br" />
            </div>
          </div>
        </ScrollReveal>

        {/* Screenshot carousel */}
        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide) => (
                  <div key={slide.label} className="flex-[0_0_100%] min-w-0 px-2">
                    <div className="glass-panel p-3 rounded-2xl">
                      <div className="rounded-xl overflow-hidden relative">
                        <img src={slide.src} alt={slide.label} className="w-full aspect-video object-cover" loading="lazy" />
                        <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(transparent, hsl(158 63% 6% / 0.8))' }}>
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
