

export class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="container py-4 text-body-secondary border-top">
                &copy; ${new Date().getFullYear()} EH Portfolio
            </footer>
        `;
    }
}

customElements.define('site-footer', SiteFooter);