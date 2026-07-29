class LfContributor extends HTMLElement
{
    constructor()
    {
        super();    
    }


    SetData(data)
    {
        this.items.innerHTML = "";

        for(const item of data)
        {
            this.items.insertAdjacentHTML(
                "beforeend",
                `<div>${item}</div>`
            );
        }
    }


}

customElements.define("lf-contributor", LfContributor);