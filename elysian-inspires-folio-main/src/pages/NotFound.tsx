import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center max-w-md px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-6 text-gray-600">
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Return to Home
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            Report Issue
          </Link>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Looking for something specific? Try using our navigation menu or search feature.
        </p>
      </div>
    </div>
  );
};

export default NotFound;