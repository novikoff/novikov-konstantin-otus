import { LitElement, html, css } from "lit-element"
import { repeat } from 'lit-html/directives/repeat';

class MyLeaf extends LitElement {
    static get properties() {
        return {
            id: { type: Number }
        }
    }
    constructor() {
        super();
        this.id = ``;
    }
    static get styles() {
        return css `
        .leaf{
            border:1px solid black;
            background:#FFA37F;
            margin:1rem 0rem;
            padding-left:1rem
            padding-top:0.2rem
            font-size:1.2em;
        }
       
        `;
    }
    render() {
        return html `
        <div class="leaf">
                ${this.id}
        </div>
        `;
    }
}
customElements.define('my-leaf', MyLeaf);