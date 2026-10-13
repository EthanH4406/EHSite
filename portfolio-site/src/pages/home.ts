
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

document.documentElement.classList.add('reveal-ready');

const observer = new IntersectionObserver(
    (entries) => {
        for(const entry of entries) {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        }
    },
    { threshold: 0.15 }
);

items.forEach((el) => observer.observe(el));