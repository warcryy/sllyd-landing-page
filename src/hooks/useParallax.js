import { useEffect } from 'react';

const useParallax = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.hero-image, .about-image, .experience-image, .waitlist-image');
    
    // Check if device is tablet or mobile
    const isTabletOrMobile = () => {
      return window.innerWidth <= 1024;
    };
    
    const handleScroll = () => {
      // Disable parallax on tablets and mobile
      if (isTabletOrMobile()) {
        parallaxElements.forEach((element) => {
          element.style.transform = 'none';
        });
        return;
      }
      
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.2 + (index * 0.05); // Reduced speed to prevent overlap
        const yPos = -(scrolled * speed);
        
        // Add bounds checking to prevent extreme movements
        const maxMove = 200; // Maximum pixels to move
        const limitedYPos = Math.max(-maxMove, Math.min(maxMove, yPos));
        
        element.style.transform = `translateY(${limitedYPos}px)`;
      });
    };
    
    // Handle resize events
    const handleResize = () => {
      if (isTabletOrMobile()) {
        parallaxElements.forEach((element) => {
          element.style.transform = 'none';
        });
      }
    };

    // Section animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Ensure proper scroll behavior on load
    const handleLoad = () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    window.addEventListener('load', handleLoad);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};

export default useParallax;


