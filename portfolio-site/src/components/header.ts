const base = import.meta.env.BASE_URL;

const links = [
    {id: 'home', label: 'Home', href: 'index.html'},
    {id: 'projects', label: 'Projects', href: 'projects.html'},
    {id: 'experience', label: 'Experience', href: 'experience.html'},
];

const leafIcon = `
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>`;

export class Navbar extends HTMLElement {
    private onScroll = () => {
        this.querySelector('.site-nav')
            ?.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    
    connectedCallback() {
        const active = this.getAttribute('active');

        this.innerHTML = `
            <nav class="navbar navbar-expand-lg site-nav" data-bs-theme="dark" aria-label="Main">
                <div class="container">
                <a class="navbar-brand" href="${base}index.html">
                    <span class="brand-mark" aria-hidden="true">${leafIcon}</span>
                    <span>EH</span>
                </a>

                <button class="navbar-toggler border-0 shadow-none" type="button"
                        data-bs-toggle="collapse" data-bs-target="#primary-nav"
                        aria-controls="primary-nav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="primary-nav">
                    <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                    ${links
                        .map(
                        (l) => `<li class="nav-item">
                            <a class="nav-link ${l.id === active ? 'active' : ''}"
                            ${l.id === active ? 'aria-current="page"' : ''}
                            href="${base}${l.href}">${l.label}</a>
                        </li>`
                        )
                        .join('')}
                    </ul>
                    <a class="btn btn-cta rounded-pill ms-lg-3 mt-3 mt-lg-0"
                    href="${base}contact.html">Get in touch</a>
                </div>
                </div>
            </nav>
        `;

        window.addEventListener('scroll', this.onScroll, {passive: true});
        this.onScroll();
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.onScroll);
    }
}

customElements.define('site-header', Navbar);