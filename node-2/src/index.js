import '@components/my-tree.js';
import '@components/my-leaf.js';

window.addEventListener('load',()=>{
   const main  = document.querySelector('main');
   const el  = document.createElement("my-tree");
   el.data=`{
    "id": 1,
        "items": [{
            "id": 2,
            "items": [{ "id": 3 }]
        },
        {
            "id": 4,
            "items": [
                { "id": 5 },
                { 
                    "id": 6,
                    "items": [
                        { "id": 7 }
                    ]
                }
            ]
        }]
    }`;
    //el.article = article;
    main.appendChild(el);
});