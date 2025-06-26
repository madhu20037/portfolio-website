// Simple scroll animation utility
export const setupScrollAnimations = () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate-active');
      }
    });
  };
  
  // Run once on load
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Clean up function
  return () => window.removeEventListener('scroll', animateOnScroll);
};