import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Hero from '@/components/Hero';
import { useState } from 'react';

const Journal = () => {
  const posts = [
    {
      slug: 'feeling-stuck-in-your-job',
      title: 'Feeling Stuck In Your Job? — 7 Actions to Take Today',
      excerpt: 'Career stagnation is more common than you think. Discover practical steps to reignite your professional journey and find fulfillment again.',
      date: 'August 4, 2025',
      readTime: '8 min read',
      category: 'Career Development',
    },
    {
      slug: 'choosing-right-stream-10th',
      title: 'How to Choose the Right Stream After 10th Grade',
      excerpt: 'A comprehensive guide for students and parents navigating one of the most important educational decisions.',
      date: 'July 28, 2025',
      readTime: '6 min read',
      category: 'Student Guidance',
    },
    {
      slug: 'multiple-intelligence-analysis-career-counselling',
      title: 'Understanding Multiple Intelligence Analysis: Science Behind Career Clarity',
      excerpt: 'Explore how Dermatoglyphics Multiple Intelligence Test can reveal your innate strengths and guide your career path.',
      date: 'July 15, 2025',
      readTime: '10 min read',
      category: 'Career Testing',
    },
    {
      slug: 'mid-career-transition-guide',
      title: 'The Complete Guide to Mid-Career Transitions',
      excerpt: 'Thinking of changing careers? Learn how to navigate this challenging but rewarding journey with confidence.',
      date: 'July 2, 2025',
      readTime: '12 min read',
      category: 'Career Change',
    },
    {
      slug: 'parenting-career-support',
      title: 'How Parents Can Support Children\'s Career Decisions',
      excerpt: 'Practical advice for parents on balancing guidance with freedom in their children\'s career exploration.',
      date: 'June 20, 2025',
      readTime: '7 min read',
      category: 'Parenting',
    },
  ];

  const categories = ['All', 'Career Development', 'Student Guidance', 'Career Testing', 'Career Change', 'Parenting'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Hero
        variant="page"
        title="The Elysian Journal"
        subtitle="Insights, guidance, and inspiration for your career journey"
      />

      <section className="section-container">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all ${
                category === selectedCategory
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="glass-card overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold text-sm mb-3">{filteredPosts[0].category}</span>
                <h2 className="font-display text-3xl mb-4">
                  <Link to={`/journal/${filteredPosts[0].slug}`} className="link-underline">
                    {filteredPosts[0].title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {filteredPosts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {filteredPosts[0].readTime}
                  </div>
                </div>
                <Link to={`/journal/${filteredPosts[0].slug}`}>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.slice(filteredPosts.length > 0 && selectedCategory === 'All' ? 1 : 0).map((post) => (
            <div key={post.slug} className="glass-card overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="p-6">
                <span className="text-primary font-semibold text-sm">{post.category}</span>
                <h3 className="font-display text-2xl mt-2 mb-3">
                  <Link to={`/journal/${post.slug}`} className="link-underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <Link
                  to={`/journal/${post.slug}`}
                  className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="font-display text-2xl mb-4">No posts found</h3>
            <p className="text-muted-foreground">There are no articles in this category yet. Check back later!</p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="section-container bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display mb-4">Stay Inspired</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to receive career insights, success stories, and exclusive tips delivered to your inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your.email@example.com"
              className="bg-background"
            />
            <Button className="btn-cinematic whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journal;
