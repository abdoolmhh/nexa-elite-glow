import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import demoPOS from '@/assets/demo-pos.png';
import demoDashboard from '@/assets/demo-dashboard.png';
import demoReports from '@/assets/demo-reports.png';

const STEPS = [
  { num: '01', title: 'Sign up in 60s', desc: 'No credit card. No paperwork.', emoji: '⚡', image: demoPOS },
  { num: '02', title: 'Import products', desc: 'CSV upload or add manually.', emoji: '📦', image: demoDashboard },
  { num: '03', title: 'Start selling', desc: 'Go live instantly. That simple.', emoji: '🚀', image: demoReports },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-32 relative z-10">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="text-center mb-20">
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            How It Works
          </span>
          <h2 className="section-heading text-foreground">
            Live in three steps.<br />
            <span className="text-primary">Not three months.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {/* Connector */}
        <div className="hidden md:block absolute top-[120px] left-[33%] right-[33%] h-px" style={{ background: 'linear-gradient(90deg, hsl(var(--border)), hsl(var(--primary) / 0.4), hsl(var(--border)))' }} />

        {STEPS.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 150}>
            <div className="text-center relative group">
              {/* Device mockup with 3D */}
              <div className="relative mb-6 perspective-container">
                <div className="device-phone mx-auto" style={{ transform: 'perspective(800px) rotateY(-3deg) rotateX(2deg)' }}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full aspect-[9/16] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="laser-scan" />
                </div>
              </div>

              <div className="relative inline-flex flex-col items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-2 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ background: 'hsl(var(--primary) / 0.1)', boxShadow: '0 0 0 0 hsl(var(--primary) / 0)' }}
                >
                  {step.emoji}
                </div>
                <span className="text-xs font-bold text-primary tracking-[0.15em] uppercase">{step.num}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 text-base">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px] mx-auto leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <ScrollReveal delay={300}>
        <div className="text-center mt-16">
          <Link to="/try" className="btn-primary cta-glow group">
            Try It Yourself
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HowItWorks;
