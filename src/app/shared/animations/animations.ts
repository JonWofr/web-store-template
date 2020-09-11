/**
 *
 * @param animationClass add animation from animation.style website e.g.: 'fadeIn'
 * @param querySelector add class that should be animated e.g.: '.your-class'
 */
export function animateOnScroll(
  animationClass: string,
  querySelector: string
): void {
  const options = {
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          entry.target.classList.add('animate__animated', animationClass);
        }
      });
    },
    options
  );
  document.querySelectorAll(querySelector).forEach((value) => {
    observer.observe(value);
    (value as HTMLElement).style.opacity = '0';
  });
}

/**
 *
 * @param animationClass add animation from animation.style website e.g.: 'fadeIn'
 * @param querySelector add class that should be animated e.g.: '.your-class'
 */
export function animateOnScrollWithDelay(
  animationClass: string,
  querySelector: string
): void {
  const options = {
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            (entry.target as HTMLElement).style.opacity = '1';
            entry.target.classList.add('animate__animated', animationClass);
          }, index * 100);
        }
      });
    },
    options
  );
  document.querySelectorAll(querySelector).forEach((value) => {
    observer.observe(value);
    (value as HTMLElement).style.opacity = '0';
  });
}
