import { useState, FormEvent } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Hero from '@/components/Hero';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Hero
        variant="page"
        title="Get In Touch"
        subtitle="Ready to discover your career path? Let's start the conversation."
      />

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-display text-3xl mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Whether you're a student unsure of your next step, a parent seeking clarity for your child, or a professional ready for change, I'm here to guide you. Let's start a conversation that could change your direction.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Chennai, India</p>
                  <p className="text-sm text-muted-foreground">Serving Online and Offline sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:contact@elysianinspires.com"
                    className="text-primary hover:underline"
                  >
                    contact@elysianinspires.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="text-primary hover:underline">
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 9 AM - 6 PM IST</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display text-xl mb-4">Quick Response</h3>
              <p className="text-muted-foreground mb-4">
                I typically respond to inquiries within 24 hours. For urgent matters, please call directly.
              </p>
              <p className="text-sm text-muted-foreground italic">
                "Your career clarity is my priority."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 lg:p-12">
            <h2 className="font-display text-3xl mb-2">Send a Message</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and I'll get back to you soon.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your career goals and how I can help..."
                  rows={6}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <div className="glass-card p-4">
                <p className="text-sm text-muted-foreground text-center">
                  This expert guidance comes with a consultation fee, ensuring each session receives dedicated time and personalized support.
                </p>
              </div>

              <Button type="submit" disabled={isSubmitting} className="btn-cinematic w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
