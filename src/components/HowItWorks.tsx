import ScrollReveal from './ScrollReveal';
import demoPOS from '@/assets/demo-pos.png';
import demoDashboard from '@/assets/demo-dashboard.png';
import demoReports from '@/assets/demo-reports.png';

const STEPS = [
  { num: '01', title: 'Create account', desc: 'Sign up in under a minute.', emoji: '⚡', image: demoPOS },
  { num: '02', title: 'Import products', desc: 'Upload or enter your catalog.', emoji: '📦', image: demoDashboard },
  { num: '03', title: 'Start selling', desc: "You're live. That simple.", emoji: '🚀', image: demoReports },
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
            Three steps.<br />
            <span className="text-primary">That's it.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-[140px] left-[33%] right-[33%] h-px" style={{ background: 'linear-gradient(90deg, hsl(var(--border)), hsl(var(--primary) / 0.3), hsl(var(--border)))' }} />

        {STEPS.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 150}>
            <div className="text-center relative group">
              {/* Screenshot mockup */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm shadow-lg shadow-foreground/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full aspect-[4/3] object-cover object-top"
                  loading="lazy"
                />
                <div className="laser-scan" />
              </div>

              <div className="relative inline-flex flex-col items-center mb-4">
                <span className="text-xs font-bold text-primary tracking-[0.15em] uppercase">{step.num}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-base">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
