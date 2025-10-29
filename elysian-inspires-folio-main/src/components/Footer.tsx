import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-4">Prabha Rajan</h3>
            <p className="text-muted-foreground mb-6">
              Helping individuals discover their purpose and redefining success.
            </p>
            <p className="text-sm text-muted-foreground">Founded by Prabha R.</p>
            <p className="text-xs text-muted-foreground mt-2">Expert in Multiple Intelligence Analyst</p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About Prabha R.
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                Success Stories
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Book a Session
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p>Chennai, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@elysianinspires.com" className="hover:text-primary transition-colors">
                  contact@elysianinspires.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Prabha Rajan. All rights reserved.</p>
          <p className="mt-2 italic">"Authenticity is magnetic."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
