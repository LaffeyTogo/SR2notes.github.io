
export class Page
{
    constructor()
    {
        document.head.insertAdjacentHTML(
            "beforeend",
            `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>老狗的RS2文档</title>
            `
        )

        this.catalogue      = document.createElement("lf-catalogue");
        this.content        = document.createElement("lf-content");
        this.contributor    = document.createElement("lf-contributor");

        const container = document.createElement("div");
        container.style.display         = "flex";
        container.style.flexdirection   = "row";
        
        container.append
        (
            this.catalogue,
            this.content
        );

        document.body.append(
            container,
            this.contributor
        );


        this.catalogue.SetData('../body/catalogue-data.js')


    }

    SetContent(HTML)
    {
        this.content.innerHTML = HTML;
    }


    SetContributor(HTML)
    {
        this.content.innerHTML = HTML;
    }
}