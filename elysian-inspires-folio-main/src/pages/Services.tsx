import { Link } from 'react-router-dom';
import { Fingerprint, Brain, Users, Briefcase, GraduationCap, Heart, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

const Services = () => {
  const services = [
    {
      icon: Fingerprint,
      title: 'Multiple Intelligence Analysis',
      challenge: 'Unsure of innate strengths and natural talents',
      approach: 'Scientific fingerprint analysis revealing multiple intelligence types',
      benefit: 'Discover your genetic potential and ideal career pathways',
      audiences: ['Students (10th & 12th)', 'College Students', 'Parents'],
    },
    {
      icon: Brain,
      title: 'Aptitude Tests',
      challenge: 'Difficulty identifying interests, aptitudes, and personality traits',
      approach: 'Comprehensive standardized assessments and expert interpretation',
      benefit: 'Gain deep insights into your psychological profile and career fit',
      audiences: ['All age groups', 'Career changers', 'Students'],
    },
    {
      icon: GraduationCap,
      title: 'Career Counselling - Students (10th/12th)',
      challenge: 'Confusion about stream selection and future career options',
      approach: 'One-on-one sessions combining testing results with market insights',
      benefit: 'Make informed decisions about academic streams and career goals',
      audiences: ['10th Grade Students', '12th Grade Students', 'Parents'],
    },
    {
      icon: BookOpen,
      title: 'Grades XI–XII (PCM, PCB, CS & Commerce)',
      challenge: 'Confusion about choosing the right career path, courses, and entrance exams after 12th.',
      approach: 'Personalized one-on-one counselling sessions that combine psychometric assessments, aptitude insights, and expert market knowledge to create a clear step-by-step career roadmap.',
      benefit: 'Gain clarity on the right career direction, explore best-fit colleges and courses, and make confident, well-informed academic and career decisions.',
      audiences: ['10th Grade Students', '12th Grade Students', 'Parents'],
    },
    {
      icon: Users,
      title: 'Career Counselling - College Students',
      challenge: 'Uncertainty about major selection and career direction',
      approach: 'Personalized guidance on specializations, internships, and skill development',
      benefit: 'Align your education with career aspirations and market demand',
      audiences: ['Undergraduate Students', 'Postgraduate Students'],
    },
    {
      icon: Briefcase,
      title: 'Career Counselling - Professionals',
      challenge: 'Feeling stuck, unfulfilled, or considering a career transition',
      approach: 'Strategic assessment of skills, values, and growth opportunities',
      benefit: 'Navigate career pivots with confidence and create an action plan',
      audiences: ['Working Professionals', 'Mid-career Individuals', 'Entrepreneurs'],
    },
    {
      icon: Heart,
      title: 'Career Counselling - Seniors & Parents',
      challenge: 'Supporting loved ones through career decisions or personal transitions',
      approach: 'Consultations focused on guidance techniques and family dynamics',
      benefit: 'Empower yourself to support others with wisdom and empathy',
      audiences: ['Parents', 'Senior Citizens', 'Mentors'],
    },
  ];

  return (
    <>
      <Hero
        variant="page"
        title="Our Services"
        subtitle="Comprehensive career guidance tailored to your unique journey"
      />

      <section className="section-container">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="glass-card p-12">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl mb-6">{service.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-destructive">Challenge</h4>
                      <p className="text-muted-foreground">{service.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-primary">Our Approach</h4>
                      <p className="text-muted-foreground">{service.approach}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-accent">Benefit</h4>
                      <p className="text-muted-foreground">{service.benefit}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-semibold mb-2">Ideal For:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.audiences.map((audience, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                {index === 0 ? (
                  <img 
                    src="/multiple-intelligence-analysis.jpg" 
                    alt="Multiple Intelligence Analysis" 
                    className="aspect-square rounded-2xl shadow-2xl object-cover w-full h-full"
                  />
                ) : (
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Online Sessions Info */}
      <section className="section-container bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display mb-6">Flexible Online Sessions</h2>
          <p className="text-xl text-muted-foreground mb-8">
            All our services are available through secure online consultations, making it convenient for clients 
            across Chennai, Chengalpattu, and beyond to access expert career guidance from the comfort of home.
          </p>
          <div className="glass-card p-8 inline-block">
            <p className="text-lg mb-2">
              <span className="font-semibold">Session Duration:</span> 60-90 minutes
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold">Follow-up Support:</span> Included for 30 days
            </p>
            <p className="text-lg">
              <span className="font-semibold">Reports Delivered:</span> Comprehensive written analysis
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display mb-6">Ready to Unlock Your Potential?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a session today and take the first step toward a fulfilling career aligned with your true self.
          </p>
          <Link to="/contact">
            <Button className="btn-cinematic text-lg">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
