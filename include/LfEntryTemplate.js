
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
        
        document.body.insertAdjacentHTML(
            "beforeend",
            `
            <lf-catalogue></lf-catalogue>
            <lf-content></lf-content>
            `
        );

        this.catalogue = document.querySelector("lf-catalogue");
        this.content = document.querySelector("lf-content");
    }

    SetContent(HTML)
    {
        this.content.innerHTML = HTML;
    }
}