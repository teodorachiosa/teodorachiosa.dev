import { tCSkyTemplate } from './sky.template.js';
import { tCSkyStyle } from './sky.style.js';

export class TCSky extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    get template() {
        return tCSkyTemplate;
    }

    get style() {
        return tCSkyStyle;
    }

    render() {
        this.shadowRoot.innerHTML = `${this.style}${this.template}`;
    }
}

customElements.define('tc-sky', TCSky);
