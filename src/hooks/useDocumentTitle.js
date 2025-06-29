import { useEffect, useRef } from 'react';

const useDocumentTitle = (title, options = {}) => {
  const { 
    enableIntersectionObserver = false, 
    threshold = 0.5,
    rootMargin = '0px 0px -50% 0px'
  } = options;
  
  const elementRef = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    
    // Set the new title
    document.title = title;
    
    // If intersection observer is enabled, set up the observer
    if (enableIntersectionObserver && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.title = title;
            }
          });
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(elementRef.current);

      // Cleanup observer
      return () => {
        observer.disconnect();
        document.title = prevTitle;
      };
    }
    
    // Cleanup function to restore the previous title when component unmounts
    return () => {
      document.title = prevTitle;
    };
  }, [title, enableIntersectionObserver, threshold, rootMargin]);

  return elementRef;
};

export default useDocumentTitle; 