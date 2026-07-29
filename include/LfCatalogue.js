class LfCatalogue extends HTMLElement
{
    constructor()
    {
        super();

        this._data = [];
        this._opened = new Set();
    }





    connectedCallback()
    {
        
        this.style.alignSelf = 'flex-start';
        this.style.position = 'sticky'
        Object.assign(this.style,{top:"0"});
        
        this.LoadState();
        
        this.addEventListener
        ("click", e =>
            {
                if(e.target.tagName != "SPAN")
                    return;
            
                const id = Number(e.target.dataset.id);
            
                const node = this.FindNode(this._data, id);
            
                if(!node)
                    return;
        
            
                if(node.children && node.children.length > 0)
                {
                    if(this._opened.has(id))
                        this._opened.delete(id);
                    else
                        this._opened.add(id);

                    this.SaveState();
                    this.Render();
                }
                else
                {
                    this.dispatchEvent(
                        new CustomEvent("pagechange", {
                            bubbles: true,
                            composed: true,
                            detail: {
                                path: node.path,
                                node: node
                            }
                        })
                    );
                }
            
                this.Render();
            }
        );

  

        this.Render();
    }


    async SetData(URL_)
    {
        const module = await import(URL_);

        this._data = module.Catalogue;

        this.Render();
    }



    Render()
    {
        let html = `
            <button class="toggle">☰</button>
        `;
        

        if(this._data && this.hasAttribute("open"))
        {
            html += this.BuildTree(this._data);
        }


        this.innerHTML = html;

        this.querySelector(".toggle").onclick = () =>
            {
                this.toggleAttribute("open");
            };
    
    }




    LoadState()
    {
        const data = JSON.parse(
            localStorage.getItem("catalogue-state")
        );
    
    
        if(data)
        {
            this._opened = new Set(data.opened);
    
    
            if(data.open)
            {
                this.toggleAttribute("open");
            }
        }
    }




    SaveState()
    {
        localStorage.setItem
        (
            "catalogue-state",
            JSON.stringify(
            {
                open: this.hasAttribute("open"),
                opened: [...this._opened]
            })
        );
    }





    static observedAttributes = ["open"];
    attributeChangedCallback(name, oldValue, newValue)
    {
        if (this.hasAttribute("open"))
        {
            let Msg = new CustomEvent
            (
                "Catalogue",
                {
                    detail:{open:true}
                }
            )
            document.dispatchEvent(Msg)
            this.SaveState()
            this.Render();
        }
        else
        {

            let Msg = new CustomEvent
            (
                "Catalogue",
                {
                    detail:{open:false}
                }
            )
            document.dispatchEvent(Msg)
            this.SaveState();
            this.Render();
        }
    }





    BuildTree(nodes)
    {
        let html="<ul>";

        for(const node of nodes)
        {
            html += "<li>";

            html += `
                <span 
                    data-id="${node.id}"
                >
                    ${node.title}
                </span>
            `;


            if(node.children && this._opened.has(node.id))
            {
                html += this.BuildTree(node.children);
            }

            html += "</li>";
        }


        html+="</ul>";

        return html;
    }


    FindNode(nodes,id)
    {
        for(const node of nodes)
        {
            if(node.id==id)
                return node;

            if(node.children)
            {
                const r=this.FindNode(node.children,id);

                if(r)
                    return r;
            }
        }

        return null;
    }

}

customElements.define("lf-catalogue", LfCatalogue);