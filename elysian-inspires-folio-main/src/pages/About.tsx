import { Link } from 'react-router-dom';
import { Award, GraduationCap, Heart, ArrowRight, Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

const About = () => {
  const credentials = [
    { icon: GraduationCap, text: 'M.Com. - Master of Commerce' },
    { icon: GraduationCap, text: 'M.B.A. - Master of Business Administration' },
    { icon: GraduationCap, text: 'M.Sc. in Counselling Psychology' },
    { icon: Award, text: 'Certified Multiple Intelligence Analysis Analyst' },
  ];

  const services = [
    {
      title: 'Academic Counselling (for Students 8th-12th)',
      description: 'Guidance on choosing streams, study techniques, managing fear/anxiety, and ensuring holistic development.',
    },
    {
      title: 'Career Counselling (Graduates/Post-graduates/Job Seekers)',
      description: 'Helping you identify goals, discover your passion, decide on higher education or entrance exams, enhance skills.',
    },
    {
      title: 'Career Development (Working Professionals)',
      description: 'Explore new ideas, identify passive income opportunities, upskill, build strong profiles/curriculum vitae, enhance networking.',
    },
  ];

  const reasons = [
    {
      title: 'Unique Individuality',
      description: 'We recognise that your journey is yours alone. No two fingerprints are identical just like no two individuals have the exact same combination of traits, interests and potential.',
    },
    {
      title: 'Personal Touch',
      description: 'With years of counselling experience, we bring a personal touch: we understand the anxieties of parents, the questions of students, the drive of professionals and the hopes of individuals seeking change.',
    },
    {
      title: 'Proven Results',
      description: 'Our clients consistently share that our sessions helped them see clearly, target effectively, and feel empowered to act. (Testimonials available on our site.)',
    },
  ];

  return (
    <>
      <Hero variant="page" title="About Us" subtitle="Discover Your Unique Path with Elysian Inspires" />

      {/* Introduction */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display mb-6">At Elysian Inspires, we believe that each individual is unique and that the path to success isn't one-size-fits-all.</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              From childhood through adulthood, many of us make choices that don't align with our true selves. That misalignment can lead to confusion, frustration, or feeling stuck.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              That's why we've built a guidance centre in Chennai dedicated to helping you discover and embrace your uniqueness, and chart a career and life path that's authentic, fulfilling and right for you.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/4] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-container bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="font-display mb-6">Our Mission</h2>
          <div className="text-left space-y-6">
            <div className="flex items-start">
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                <span className="text-background text-sm">1</span>
              </div>
              <p className="text-lg text-muted-foreground">
                To uncover your innate abilities, personality traits and talents by using scientifically-backed tools and assessments.
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                <span className="text-background text-sm">2</span>
              </div>
              <p className="text-lg text-muted-foreground">
                To guide you whether you're still in school deciding your stream, a college student choosing your next step, a working professional seeking advancement or a senior citizen thinking of reinventing yourself.
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                <span className="text-background text-sm">3</span>
              </div>
              <p className="text-lg text-muted-foreground">
                To deliver solutions that are customised, not templated: we don't believe in "one approach fits all".
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                <span className="text-background text-sm">4</span>
              </div>
              <p className="text-lg text-muted-foreground">
                To empower you to make confident choices, align with your passions and strengths, and move forward with clarity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-container">
        <h2 className="font-display text-center mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8">
              <h3 className="font-display text-xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            We use methods rooted in the study of multiple intelligences (inspired by Howard Gardner) and fingerprint-based personality cues to create a meaningful map of your strengths and potential.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container bg-secondary/30">
        <h2 className="font-display text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-card p-8">
              <h3 className="font-display text-xl mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-center mb-12">Our Founder</h2>
          
          {/* Founder Introduction */}
          <div className="glass-card p-8 mb-12">
            <h3 className="font-display mb-6">Founder and Certified Consultant</h3>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>M.Com.</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>M.B.A.</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>MSc. Coun. Psy</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                <Award className="h-5 w-5 text-primary" />
                <span>Certified Multiple Intelligence Analysis Analyst</span>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground my-8">
              "In life, we spend our childhood in the pursuit of academic excellence, and then eventually step into the professional domain with the dream of making it big. We are aware that the ideal situation would be to follow our passion, but often we are unable to identify our passion and use that as a base for further studies or a career choice. We invite you to a session with us to discover your true passion and hidden talents. This will help you make the right choices and be successful in your academic, personal and professional field."
            </blockquote>
          </div>

          {/* Founder's Journey */}
          <div className="glass-card p-8 mb-12">
            <h3 className="font-display text-center mb-12">Her Journey</h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-lg">
                Prabha's foray into the Consultancy domain was a natural progression. With an innate flair for teaching and Counselling, she started very early in life, taking tuition even while in school, helping her fellow classmates and the less fortunate ones, counselling them on self-development, life skills, relationship matters and so on. Her emotional maturity, even at a young age and her ability to help others navigate issues was appreciated and continues to be applauded by all who know her.
              </p>
              
              <p className="mb-6 text-lg">
                After post-graduation, career growth prospects took her abroad, giving her tremendous exposure to corporate culture as she worked with various multinational organizations in senior positions. During this period, she continued to hone her counselling skills and provided empathetic counsel to all who sought it.
              </p>
              
              <p className="mb-6 text-lg">
                Her return to India in 2007 marked a new beginning; when she set up her own venture and founded HR Inc a manpower recruitment company. However, realization soon dawned that matching manpower requirements with the ideal candidates was challenging, simply because candidates did not have the right skills to take on the plethora of jobs available, or they just resigned themselves to any job not commensurate with their qualifications or capabilities.
              </p>
              
              <p className="mb-6 text-lg">
                The objective of helping aspirants find their dream jobs generated an awareness that identifying one's true passion was a very difficult proposition for many, that the difference between a "dream job" and a "career" was not clearly understood, nor were job aspirants aware of how to seek positions that align with their interests, skill sets and workstyle. This led to the birth of Elysian in 2012, with the vision of "Inspiring Intelligence". Since then, she has helped hundreds identify their career path and led them on the road to success.
              </p>
              
              <p className="mb-6 text-lg">
                Prabha is a certified Multiple Intelligence Test Consultant and Trainer. Her expertise lies in Career Counselling and motivating young minds towards success. Her one-on-one sessions are highly interactive, engaging and refreshing.
              </p>
              
              <p className="text-lg">
                With her empathetic and non-judgemental approach, she puts you at ease, paves the way for open discussions, and helps you identify your hidden capabilities with the goal of helping you build a successful future within a short span of time. She possesses the skill sets required to make her one of the best career counsellors in Chennai.
              </p>
            </div>
          </div>

          {/* Philosophy & Approach */}
          <div className="mb-12">
            <h3 className="font-display text-center mb-12">Philosophy & Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-6" />
                <h4 className="font-display text-xl mb-4">Discovery</h4>
                <p className="text-muted-foreground">
                  Helping you uncover your innate abilities, personality traits and talents through scientifically-backed tools and assessments.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-6" />
                <h4 className="font-display text-xl mb-4">Direction</h4>
                <p className="text-muted-foreground">
                  Guiding you to make confident choices that align with your passions and strengths for a fulfilling career path.
                </p>
              </div>
              <div className="glass-card p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-6" />
                <h4 className="font-display text-xl mb-4">Development</h4>
                <p className="text-muted-foreground">
                  Empowering you with customized solutions to build strong profiles and enhance your networking capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Motto */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <blockquote className="border-l-0 border-t-2 border-b-2 border-primary py-6 italic text-2xl text-foreground mb-8">
            "Believe in yourself, never give up and achieve your dreams"
          </blockquote>
          <p className="text-xl font-semibold">is her strength and motto!</p>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-container">
        <h2 className="font-display text-center mb-12">Qualifications & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {credentials.map((credential, index) => (
            <div key={index} className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <credential.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg pt-2">{credential.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-container">
        <h2 className="font-display text-center mb-12">Our Moments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
            <img 
              src="/IMG-20251028-WA0003.jpg" 
              alt="Counselling Session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2 p-6 text-center">
              <h3 className="font-display text-xl">Counselling Session</h3>
              <p className="text-sm text-primary">Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display mb-6">Ready to Discover Your Path?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Begin your journey toward clarity and purpose today.
          </p>
          <Link to="/contact">
            <Button className="btn-cinematic text-lg">
              Schedule Your Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;