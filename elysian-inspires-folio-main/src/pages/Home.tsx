import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

const Home = () => {
  const services = [
    {
      title: 'Discover Yourself',
      description: 'Scientific tools and conversations that reveal who you truly are  your strengths, style, personality and potential.',
    },
    {
      title: 'Career Counselling',
      description: 'Personalized guidance for students and professionals at every career stage',
    },
    {
      title: 'Design Your Roadmap',
      description: 'Get a step-by-step action plan for courses, careers, skill development and goals that fit your future.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: '12th Grade Student',
      text: 'Prabha mam helped me choose the perfect career path. I now feel confident about my future!',
    },
    {
      name: 'Rajesh Kumar',
      role: 'IT Professional',
      text: 'The career counselling session was a game-changer. I finally found clarity in my career goals.',
    },
  ];

  return (
    <>
      <Hero variant="home" title="When the Next Step Feels Unclear All You Need Is a Little Guidance" subtitle="from the Right Mentor Prabha R" titleClassName="text-3xl md:text-4xl" subtitleClassName="text-xl md:text-2xl text-foreground">
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
          Because every right decision begins with knowing yourself explore your potential through career counselling that brings lasting clarity
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/about">
            <Button className="btn-cinematic text-lg group">
              Explore My World
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Book a Session
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Services Preview */}
      <section className="section-container bg-secondary/30">
        <div className="text-center mb-16">
          <h2 className="font-display mb-4">Transform Your Career Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Personalized guidance backed by science to help you make life changing decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="font-display mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground">Real people, real transformations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/testimonials">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Read More Stories
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display mb-6">Ready to Find Your Path?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a personalized consultation and start your journey toward career clarity today.
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

export default Home;