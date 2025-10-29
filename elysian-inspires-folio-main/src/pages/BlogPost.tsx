import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shareUrl = window.location.href;
  const title = 'Feeling Stuck In Your Job? — 7 Actions to Take Today';

  return (
    <>
      {/* SEO Meta Tags would go in head via React Helmet */}
      <article className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <Link
            to="/journal"
            className="inline-flex items-center text-primary mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Journal
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <span className="text-primary font-semibold">Career Development</span>
            <h1 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              Feeling Stuck In Your Job? — 7 Actions to Take Today
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 4, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20" />
                <span>Prabha R.</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-8" />

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <span className="text-sm font-semibold">Share:</span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => navigator.clipboard.writeText(shareUrl)}
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              You wake up every Monday with a sense of dread. The work that once excited you now feels like a burden. 
              You're not alone—career stagnation affects millions of professionals worldwide. But here's the good news: 
              feeling stuck doesn't mean you have to stay stuck.
            </p>

            <h2 className="font-display text-3xl mt-12 mb-6">Understanding Career Stagnation</h2>
            <p className="leading-relaxed mb-6">
              Career stagnation happens when your professional growth plateaus. You might be doing the same tasks year 
              after year, seeing no progression in responsibilities, or feeling disconnected from your work's purpose. 
              It's a silent epidemic in today's workforce, often dismissed as "just part of working."
            </p>

            <h2 className="font-display text-3xl mt-12 mb-6">7 Actions to Break Free Today</h2>

            <h3 className="font-display text-2xl mt-8 mb-4">1. Conduct a Personal SWOT Analysis</h3>
            <p className="leading-relaxed mb-6">
              Identify your Strengths, Weaknesses, Opportunities, and Threats. Write them down. Be brutally honest. 
              This clarity will form the foundation of your next steps. Ask yourself: What am I genuinely good at? 
              What drains my energy? What opportunities am I not pursuing?
            </p>

            <h3 className="font-display text-2xl mt-8 mb-4">2. Have "The Conversation" with Your Manager</h3>
            <p className="leading-relaxed mb-6">
              Schedule a meeting dedicated to your career development. Come prepared with specific requests: new projects, 
              skill development opportunities, or lateral moves. Many professionals avoid this conversation out of fear, 
              but clarity is worth the discomfort.
            </p>

            <h3 className="font-display text-2xl mt-8 mb-4">3. Invest in Skill Development (Strategically)</h3>
            <p className="leading-relaxed mb-6">
              Not all skills are equal. Research which competencies are in demand in your industry and align with your 
              interests. Dedicate 30 minutes daily to learning. Whether it's data analytics, public speaking, or a new 
              software tool, consistent learning reignites professional momentum.
            </p>

            <h3 className="font-display text-2xl mt-8 mb-4">4. Expand Your Network Intentionally</h3>
            <p className="leading-relaxed mb-6">
              Reach out to three people this week: one mentor, one peer, and one person in a role you aspire to. 
              Authentic networking isn't about collecting contacts—it's about building meaningful professional relationships 
              that open doors to opportunities.
            </p>

            <h3 className="font-display text-2xl mt-8 mb-4">5. Explore Internal Mobility</h3>
            <p className="leading-relaxed mb-6">
              Sometimes the best next opportunity is within your current organization. Research other departments, 
              shadow colleagues in different roles, and express interest in cross-functional projects. Internal moves 
              often come with lower risk and faster transitions.
            </p>

            <h3 className="font-display text-2xl mt-8 mb-4">6. Consider Professional Counselling</h3>
            <p className="leading-relaxed mb-6">
              A career counsellor can provide objective insights that friends and family can't. Through psychometric 
              assessments and structured discussions, you'll gain clarity on whether you need a role change, industry 
              shift, or simply a renewed approach to your current position.
            </p>

            <h3 className="font-display text-2xl mt-8 mb-4">7. Set a Timeline for Decision</h3>
            <p className="leading-relaxed mb-6">
              Give yourself 90 days to implement these actions and reassess. If you've genuinely tried and still feel 
              stuck, it may be time for a bigger change. But often, intentional action within your current role can 
              reignite the spark you thought was lost.
            </p>

            <div className="bg-secondary/50 border-l-4 border-primary p-8 rounded-lg my-12">
              <h3 className="font-display text-2xl mb-4">The Bottom Line</h3>
              <p className="leading-relaxed mb-4">
                Feeling stuck is a signal, not a sentence. It's your mind and body telling you that something needs to 
                change—but that change doesn't always mean quitting. Start small, be consistent, and give yourself 
                permission to explore without judgment.
              </p>
              <p className="leading-relaxed italic">
                Your career is a journey, not a destination. And every journey has seasons. This stuck season? 
                It's preparing you for your next breakthrough.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="glass-card p-8 mt-16">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex-shrink-0" />
              <div>
                <h3 className="font-display text-xl mb-2">About Prabha R.</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Career Counsellor, Multiple Intelligence Analysis Analyst | M.Com., M.B.A., M.A. Coun. Psy.
                  <br />
                  Helping students and professionals find career clarity through personalized guidance and scientific testing.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Book a Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
