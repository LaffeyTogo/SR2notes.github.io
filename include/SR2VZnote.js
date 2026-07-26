import "./VizzyForWeb/SR2VIZZY.js"
import "./LfCatalogue.js"
import "./LfContent.js";

import { Catalogue } from "../body/catalogue-data.js";
const menu = document.querySelector("lf-catalogue");
menu.data = Catalogue;

