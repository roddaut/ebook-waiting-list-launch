
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declare the gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

/**
 * GoogleAnalytics component that tracks page views
 * when routes change in a React Router application
 */
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      // Send a page view to Google Analytics with the current path
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
      
      console.log('📊 Google Analytics: Tracked page view for', location.pathname);
    }
  }, [location]);

  // This component doesn't render anything
  return null;
};

export default GoogleAnalytics;
