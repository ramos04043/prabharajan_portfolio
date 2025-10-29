import { Star, Quote } from 'lucide-react';
import Hero from '@/components/Hero';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ananya Malhotra',
      role: '12th Grade Student',
      location: 'Chennai',
      text: 'I was completely confused about whether to choose engineering or medicine. The Multiple Intelligence Analysis test and Prabha mam\'s counselling helped me understand my strengths. I\'m now pursuing Computer Science and loving every moment!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'IT Professional (8 years)',
      location: 'Chengalpattu',
      text: 'After 8 years in IT, I felt burnt out and directionless. Prabha mam helped me realize my passion for teaching. I\'ve now transitioned to a technical educator role and I\'ve never been happier. Best decision of my career.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'College Student',
      location: 'Chennai',
      text: 'The psychometric tests revealed personality traits I wasn\'t even aware of. The detailed report and one-on-one session gave me so much clarity about my career path. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Vikram Reddy',
      role: 'Parent',
      location: 'Chennai',
      text: 'As a parent, I was worried about forcing my expectations on my son. Prabha mam\'s counselling helped both of us understand his natural abilities. Now we\'re supporting his passion for architecture with full confidence.',
      rating: 5,
    },
    {
      name: 'Meera Nair',
      role: 'Marketing Manager',
      location: 'Chennai',
      text: 'I was stuck in a career plateau for 3 years. The career counselling sessions helped me identify skill gaps and create an action plan. Within 6 months, I got promoted. Thank you, Prabha mam!',
      rating: 5,
    },
    {
      name: 'Arjun Patel',
      role: '10th Grade Student',
      location: 'Chengalpattu',
      text: 'Choosing between science and commerce seemed impossible. The Multiple Intelligence Analysis analysis showed my business and creative strengths. I chose commerce with full confidence and my parents were convinced by the scientific report.',
      rating: 5,
    },
  ];

  return (
    <>
      <Hero
        variant="page"
        title="What Our Clients Say"
        subtitle="Real stories of career transformation and clarity"
      />

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card relative">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2">500+</div>
            <p className="text-lg text-muted-foreground">Students Guided</p>
          </div>
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2">95%</div>
            <p className="text-lg text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2">10+</div>
            <p className="text-lg text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display mb-4">Video Testimonials</h2>
          <p className="text-xl text-muted-foreground">Hear directly from our clients</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">Video Testimonial 1</p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center">
            <p className="text-muted-foreground">Video Testimonial 2</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-container bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display mb-8">Why Clients Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="font-display text-xl mb-3">Scientific Approach</h3>
              <p className="text-muted-foreground">
                All recommendations backed by validated psychometric assessments and Multiple Intelligence Analysis analysis
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-display text-xl mb-3">Personalized Attention</h3>
              <p className="text-muted-foreground">
                Every client receives one-on-one sessions tailored to their unique situation
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-display text-xl mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground">
                10+ years of experience with hundreds of successful career transformations
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-display text-xl mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground">
                30-day follow-up included with every session to ensure your success
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
