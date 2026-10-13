import { esc } from '../utils/html';

export class PageHero extends HTMLElement {
    connectedCallback() {
        const eyebrow = this.getAttribute('eyebrow');
        const heading = this.getAttribute('heading') ?? document.title;
        const subtitle = this.getAttribute('subtitle');

        this.innerHTML = `
            <section class="page-hero">
                <div class="container">
                    <div class="hero-content">
                        ${eyebrow ? `<p class="hero-eyebrow">${esc(eyebrow)}</p>` : ''}
                        <h1 class="display-5 fw-bold mb-3">${esc(heading)}</h1>
                        ${subtitle ? `<p class="lead mb-0">${esc(subtitle)}</p>` : ''}
                    </div>
                </div>
                <svg class="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none"
                     aria-hidden="true">
                    <path d="M0,64 C240,120 480,0 720,48 C960,96 1200,112 1440,40 L1440,120 L0,120 Z" />
                </svg>
            </section>`;
    }
}

customElements.define('page-hero', PageHero);