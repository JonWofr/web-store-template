export function animateOnScroll(animationClass: string, querySelector: string) {
  const options = {
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', animationClass);
        }
      });
    },
    options
  );
  document.querySelectorAll(querySelector).forEach((value) => {
    observer.observe(value);
  });
}
