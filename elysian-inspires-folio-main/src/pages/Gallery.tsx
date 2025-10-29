import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

// Define types for our gallery images
interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  thumbnail?: string;
  alt: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Updated gallery images with proper paths and alt text
  const galleryImages: GalleryImage[] = [
    // Images removed as per user request
  ];

  const categories = ['All', 'Sessions', 'Workshops', 'Events', 'Behind the Scenes', 'Achievements'];

  // Filter images based on active category
  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/placeholder.svg'; // Fallback image
  };

  return (
    <>
      <Hero
        variant="page"
        title="Gallery"
        subtitle="Moments of transformation, guidance, and growth"
      />

      <section className="section-container">
        {/* Categories */}
        <div 
          className="flex flex-wrap gap-3 justify-center mb-12"
          role="tablist"
          aria-label="Filter gallery by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all ${
                category === activeCategory
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
              role="tab"
              aria-selected={category === activeCategory}
              aria-controls={`gallery-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-grid"
          role="region"
          aria-label="Image gallery"
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              role="figure"
              aria-label={`${image.title} - ${image.category}`}
            >
              <img 
                src={image.image} 
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={handleImageError}
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
      <section 
        className="section-container bg-secondary/30"
        aria-labelledby="media-kit-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="media-kit-heading" className="font-display mb-6">Media & Press</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For press inquiries, interviews, or to download high-resolution images and brand assets, 
            access our comprehensive media kit.
          </p>
          <Button className="btn-cinematic" aria-label="Download Media Kit PDF">
            <Download className="mr-2 h-5 w-5" aria-hidden="true" />
            Download Media Kit (PDF)
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Includes: Biography, Professional Photos, Logos, Brand Guidelines, Sample Articles
          </p>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section 
        className="section-container"
        aria-labelledby="story-heading"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="story-heading" className="font-display mb-6">The Story Behind the Sessions</h2>
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