import { LitElement,html,css  } from "lit-element"
import {repeat} from 'lit-html/directives/repeat';

class MyLeaf extends LitElement{
    static get properties(){
        return {
            data:{type:String }
        }
    }
    constructor() {
        super();
        this.data = ``;
    }
    static get styles() {
        return css`
        .block{
            border:1px solid black;
            background:#FFA37F;
            margin:1rem 0rem;
        }
        .block ul>li{
            
        }
        .block .leaf_name{
            margin-left:1rem;
            margin-top:0.2rem;
            font-size:1.2em;
        }
        `;
    }
    render(){
        if(this.data!=""){
            this.json = JSON.parse(this.data);  
        }
        return html`
        <div class="block">
            <div class="leaf_name">
                ${this.json.id}
            </div>

            
           ${(this.json.items)?html`
           <div>
                <ul>
            
                    ${repeat(
                        this.json.items,
                        (item, idx) => html`
                    <li><my-leaf .data=${JSON.stringify(item)}></my-leaf></li>
                `
                    )}
                </ul>
            </div>
             `:html``}
        </div>
        `;
    }
}

customElements.define('my-leaf',MyLeaf);