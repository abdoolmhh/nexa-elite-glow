import ScrollReveal from './ScrollReveal';
import demoPOS from '@/assets/demo-pos.png';
import demoDashboard from '@/assets/demo-dashboard.png';
import demoReports from '@/assets/demo-reports.png';

const STEPS = [
  { num: '01', title: 'Sign up in 60 seconds', desc: 'Create your account. No credit card, no paperwork.', emoji: '⚡', image: demoPOS },
  { num: '02', title: 'Import your products', desc: 'Upload a CSV or add items manually — we handle the rest.', emoji: '📦', image: demoDashboard },
  { num: '03', title: 'Start selling today', desc: "Your store goes live instantly. It's really that simple.", emoji: '🚀', image: demoReports },
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
          <p className="section-subheading">
            Most stores are fully operational within 24 hours.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-[140px] left-[33%] right-[33%] h-px" style={{ background: 'linear-gradient(90deg, hsl(var(--border)), hsl(var(--primary) / 0.4), hsl(var(--border)))' }} />

        {STEPS.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 150}>
            <div className="text-center relative group">
              {/* Screenshot mockup */}
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm shadow-lg shadow-foreground/5 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-2"
                style={{ transform: 'perspective(800px) rotateX(2deg)' }}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="laser-scan" />
              </div>

              <div className="relative inline-flex flex-col items-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-2" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                  {step.emoji}
                </div>
                <span className="text-xs font-bold text-primary tracking-[0.15em] uppercase">{step.num}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2 text-base">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[220px] mx-auto leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
