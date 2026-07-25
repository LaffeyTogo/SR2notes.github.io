class LfContent extends HTMLElement
{
    constructor()
    {
        super();    
    }





    connectedCallback()
    {
        document.addEventListener("Catalogue", this.CatalogueMsg);

        this.LoadState()

    }





    disconnectedCallback()
    {
        document.removeEventListener("Catalogue", this.CatalogueMsg);
    }





    CatalogueMsg = (e) =>
    {
        if (e.detail.open)
        {
            this.setAttribute("tight", "");
        }
        else
        {
            this.removeAttribute("tight");
        }
    }





    SaveState()
    {
        localStorage.setItem
        (
            "content-state",
            JSON.stringify(
            {
                open: this.hasAttribute("tight"),
            })
        );
    }





    LoadState()
    {
        const data = JSON.parse(
            localStorage.getItem("content-state")
        );


        if(data)
        {
            if(data.open)
            {
                this.setAttribute("tight","");
            }
            else
            {
                this.removeAttribute("tight");
            }
        }
    }
    


    static observedAttributes = ["tight"];
    attributeChangedCallback(name, oldValue, newValue)
    {
        this.SaveState();
    }
}

customElements.define("lf-content", LfContent);