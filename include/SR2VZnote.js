import "./VizzyForWeb/SR2VIZZY.js"
import "./LfCatalogue.js"
import "./LfContent.js";
import "./LfEntryTemplate.js";

import { Page } from "./LfEntryTemplate.js";

let page = new Page();




const PAGE_ID_KEY = "current-page-id";
const DEFAULT_PAGE_ID = "body/vzIntroduction/Introduction";

async function ShowPage(node)
{
    const { ContentData } = await import(`${node.path}ContentData.js`);
    page.SetContent(ContentData);
}

await page.catalogueReady;

const savedId = localStorage.getItem(PAGE_ID_KEY);
const node =
    page.catalogue.GetNode(savedId) ??
    page.catalogue.GetNode(DEFAULT_PAGE_ID);

await ShowPage(node);

document.addEventListener("pagechange", async (e) =>
{
    const node = e.detail.node;

    localStorage.setItem(PAGE_ID_KEY, node.id);
    await ShowPage(node);
});