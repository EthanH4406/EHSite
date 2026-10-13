import type {Project} from '../data/projects';
import {projects} from '../data/projects';
import {esc} from '../utils/html';

const base = import.meta.env.BASE_URL;

function renderCard(p: Project): string {
    const thumb = p.image
        ? `<img src="${base}${esc(p.image)}" alt="${esc(p.title)} screenshot" loading="lazy"/>`
        : `<span class="project-initial" aria-hidden="true">${esc(p.title.charAt(0))}</span>`;

    const tags = p.tags
        .map((t) => `<span class="badge rounded-pill skill-badge">${esc(t)}</span>`)
        .join('');

    const links = [
        p.liveUrl
            ? `<a href="${esc(p.liveUrl)}" target="_blank" rel="noopener">Live site</a>`
            : '',
        p.repoUrl
            ? `<a href="${esc(p.repoUrl)}" target="_blank" rel="noopener">Source</a>`
            : '',
    ].join('');

    return `
        <div class="col">
            <article class="card project-card h-100">
                <div class="project-thumb">${thumb}</div>
                <div class="card-body d-flex flex-column">
                    <h3 class="h5 card-title">${esc(p.title)}</h3>
                    <p class="card-text text-body-secondary">${esc(p.description)}</p>
                    <div class="d-flex flex-wrap gap-2 mt-auto pt-2">${tags}</div>
                </div>
                ${links ? `<div class="card-footer project-links d-flex gap-4">${links}</div>` : ''}
            </article>
        </div>`;
}

export class ProjectGrid extends HTMLElement {
    connectedCallback() {
        const limit = Number(this.getAttribute('limit')) || projects.length;
        const items = projects.slice(0, limit);

        this.innerHTML = items.length
            ? `<div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                   ${items.map(renderCard).join('')}
               </div>`
            : `<p class="text-body-secondary">Projects coming soon.</p>`;
    }
}

customElements.define('project-grid', ProjectGrid);