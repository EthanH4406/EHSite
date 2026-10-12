const base = import.meta.env.BASE_URL;

const links = [
    {id: 'home', label: 'Home', href: 'index.html'},
    {id: 'contact', label: 'Contact Me', href: 'contact.html'},
];

export class Navbar extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active');

        this.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-body-tertiary>
                <div class="container">
                    <a class="navbar-brand" href="${base}index.html>EH</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                        <span class="navbar-toggler-icon></span>
                    </button>
                    <div class="collapse navbar-collapse" id="nav">
                        <ul class="navbar-nav ms-auto">
                            ${links
                                .map(
                                    (l) => `<li class="nav-item">
                                    <a class="nav-link" ${l.id === active ? 'active' : ''}"
                                    href="${base}${l.href}">${l.label}</a></li>`
                                )
                                .join('')
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        `;

    }
}

customElements.define('site-header', Navbar);