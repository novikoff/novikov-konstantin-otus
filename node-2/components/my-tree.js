import { LitElement, html, css } from "lit-element"
import { repeat } from 'lit-html/directives/repeat';

class MyTree extends LitElement {
    static get properties() {
        return {
            data: { type: String }
        }
    }
    constructor() {
        super();
        this.data = ``;
    }
    static get styles() {
        return css `
        .block{
            border:1px solid black;
            background:#CCFFAD;
        }
        .tree_name{
            margin-left:1rem;
            font-size:1.2em;
        }
        `;
    }
    render() {
            this.json = JSON.parse(this.data);
            return html `
            <div class="block">
                <div class="tree_name">
                    <my-leaf .id=${this.json.id}></my-leaf>
                </div>
                ${(this.json.items)?html `
                <div class="tree_list">
                    <ul>
                        ${repeat(
                            this.json.items,
                            (item, idx) => html`
                            <li><my-tree .data=${JSON.stringify(item)}></my-tree></li>`
                        )}
                    </ul>
                </div>
                `:html``
                }
            </div>
        `;
    }
}

customElements.define('my-tree',MyTree);