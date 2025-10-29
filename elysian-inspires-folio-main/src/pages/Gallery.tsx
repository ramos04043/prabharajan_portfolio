import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const galleryImages = [
    { title: 'Student Counselling Session', category: 'Sessions', image: '/s-1.jpg' },
    { title: 'Professional Counselling', category: 'Sessions', image: '/s-2.jpg' },
    { title: 'Career Guidance Session', category: 'Sessions', image: '/s-3.jpg' },
    { title: 'Individual Career Coaching', category: 'Sessions', image: '/s-4.jpg' },
    { title: 'Counselling Session', category: 'Sessions', image: '/IMG-20251028-WA0003.jpg' },
    { title: 'DMIT Analysis Workshop', category: 'Workshops', image: '/w-1.jpg' },
    { title: 'Career Fair Chennai 2024', category: 'Events', image: '/e-1.jpg' },
    { title: 'Group Workshop - Stream Selection', category: 'Workshops', image: '/w-2.jpg' },
    { title: 'Success Story Celebration', category: 'Events', image: '/e-2.jpg' },
    { title: 'Corporate Career Workshop', category: 'Workshops', image: '/w-3.jpg' },
    { title: 'Online Consultation Setup', category: 'Behind the Scenes', image: '/bs-1.jpg' },
    { title: 'Awards & Recognition', category: 'Achievements', image: '/aw-1.jpg' },
    { title: 'New Achievement', category: 'Achievements', image: '/aw-3.jpg' },
    { title: 'Client Appreciation Event', category: 'Events', image: '/e-3.jpg' },
    { title: 'Team Training Session', category: 'Behind the Scenes', image: '/bs-2.jpg' },
  ];

  const categories = ['All', 'Sessions', 'Workshops', 'Events', 'Behind the Scenes', 'Achievements'];

  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <>
      <Hero
        variant="page"
        title="Gallery"
        subtitle="Moments of transformation, guidance, and growth"
      />

      <section className="section-container">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all ${
                category === activeCategory
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={image.image} 
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2 p-6 text-center">
                <h3 className="font-display text-xl">{image.title}</h3>
                <p className="text-sm text-primary">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="section-container bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display mb-6">Media & Press</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For press inquiries, interviews, or to download high-resolution images and brand assets, 
            access our comprehensive media kit.
          </p>
          <Button className="btn-cinematic">
            <Download className="mr-2 h-5 w-5" />
            Download Media Kit (PDF)
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Includes: Biography, Professional Photos, Logos, Brand Guidelines, Sample Articles
          </p>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display mb-6">The Story Behind the Sessions</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every photo represents a moment of transformation—a student discovering their passion, 
            a professional finding new direction, or a parent gaining confidence in supporting their child's dreams. 
            These aren't just pictures; they're milestones in real people's career journeys.
          </p>
          <p className="text-muted-foreground italic">
            "Witnessing someone's 'aha moment' never gets old. It's why I do this work." — Prabha R.
          </p>
        </div>
      </section>
    </>
  );
};

export default Gallery;