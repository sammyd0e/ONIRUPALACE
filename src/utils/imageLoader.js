// Utility function to optimize image loading
export const getImageUrl = (filename) => {
  return `/projects/${filename}`;
};

// Lazy load images
export const lazyLoadImage = (element) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    imageObserver.observe(element);
  } else {
    element.src = element.dataset.src;
  }
};
