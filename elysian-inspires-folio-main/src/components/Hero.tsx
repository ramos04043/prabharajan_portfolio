import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: 'home' | 'page';
  titleClassName?: string;
  subtitleClassName?: string;
}

const Hero = ({ title, subtitle, children, variant = 'page', titleClassName = '', subtitleClassName = '' }: HeroProps) => {
  return (
    <section className={`relative ${variant === 'home' ? 'min-h-screen' : 'min-h-[60vh]'} flex items-center justify-center overflow-hidden`}>
      {/* Video Background (only on home) */}
      {variant === 'home' && (
        <>
          <div className="hero-video-container">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="hero-overlay" />
        </>
      )}

      {/* Background Pattern for other pages */}
      {variant === 'page' && (
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      )}

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <h1 className={`font-display font-bold mb-6 animate-fade-in ${titleClassName}`}>{title}</h1>
        {subtitle && (
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in ${subtitleClassName || 'text-muted-foreground'}`} style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {children && <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>{children}</div>}
      </div>
    </section>
  );
};

export default Hero;