import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

const Projects = () => {
  const caseStudies = [
    {
      title: 'From Confusion to Clarity: Ananya\'s Engineering Journey',
      client: 'Ananya M., 12th Grade Student, Chennai',
      problem: 'Ananya was torn between her parents\' wish for her to pursue medicine and her own interest in technology. She felt immense pressure and was losing sleep over the decision.',
      solution: 'Through Multiple Intelligence Analysis analysis and comprehensive psychometric testing, we discovered Ananya\'s strong logical-mathematical and spatial intelligence. Counselling sessions helped her communicate her findings to her parents and explore various engineering specializations.',
      outcome: 'Ananya enrolled in Computer Science Engineering at a top university with her parents\' full support. She\'s now excelling in her studies and has secured an internship at a leading tech company.',
      testimonial: 'Prabha mam gave me the confidence to follow my passion. The scientific reports helped my parents understand my strengths, and now they\'re my biggest cheerleaders!',
      metrics: ['95% academic improvement', 'Family alignment achieved', 'Career satisfaction: 10/10'],
    },
    {
      title: 'Mid-Career Transformation: Rajesh\'s Pivot from IT to Education',
      client: 'Rajesh K., IT Professional (8 years experience), Chengalpattu',
      problem: 'Despite a stable IT career, Rajesh felt unfulfilled and dreaded Monday mornings. He had a passion for teaching but was afraid of taking the financial risk of switching careers.',
      solution: 'We conducted aptitude assessments revealing strong interpersonal and linguistic intelligence. Career counselling sessions helped Rajesh create a transition roadmap, including part-time teaching opportunities and financial planning for the shift.',
      outcome: 'Rajesh transitioned to a role as a technical educator, combining his IT expertise with his teaching passion. He now trains aspiring developers and reports 10x higher job satisfaction.',
      testimonial: 'I wish I had done this 5 years ago! The structured approach helped me make a scary decision with confidence. I finally wake up excited about my work.',
      metrics: ['85% job satisfaction increase', 'Successful career pivot', '2x income growth in 18 months'],
    },
  ];

  return (
    <>
      <Hero variant="page" title="Success Stories" subtitle="Real transformations through personalized career guidance" />

      <section className="section-container">
        {caseStudies.map((study, index) => (
          <div key={index} className="mb-24 last:mb-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl sticky top-24" />
              </div>

              <div className="lg:col-span-3">
                <h2 className="font-display text-3xl md:text-4xl mb-4">{study.title}</h2>
                <p className="text-primary font-semibold mb-8">{study.client}</p>

                <div className="space-y-8">
                  <div className="glass-card p-6 border-l-4 border-destructive">
                    <h3 className="font-display text-xl mb-3 text-destructive">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                  </div>

                  <div className="glass-card p-6 border-l-4 border-primary">
                    <h3 className="font-display text-xl mb-3 text-primary">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="glass-card p-6 border-l-4 border-accent">
                    <h3 className="font-display text-xl mb-3 text-accent">The Outcome</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{study.outcome}</p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-secondary/50 p-8 rounded-xl border border-border">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg italic mb-4">"{study.testimonial}"</p>
                    <p className="text-sm font-semibold text-primary">- {study.client.split(',')[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="section-container bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display mb-6">Your Success Story Starts Here</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of satisfied clients who've found clarity, confidence, and fulfillment in their careers.
          </p>
          <Link to="/contact">
            <Button className="btn-cinematic text-lg">
              Book Your Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;
