import "./VizzyForWeb/SR2VIZZY.js"
import "./LfCatalogue.js"
import "./LfContent.js";
import "./LfEntryTemplate.js";

import { Page } from "./LfEntryTemplate.js";

let page = new Page();




const contentURL = new URL("./body/vzIntroduction/Introduction/ContentData.js", location.href);
const { ContentData } = await import(contentURL.href);
page.SetContent(ContentData);



document.addEventListener("pagechange", async (e) =>
{
;
    const path = e.detail.path;


    const { ContentData } = await import(`${path}ContentData.js`);

    page.SetContent(ContentData);
});