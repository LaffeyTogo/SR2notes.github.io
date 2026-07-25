import "./VizzyForWeb/SR2VIZZY.js"
import "./LfCatalogue.js"
import "./lfContent.js";

import { Catalogue } from "./catalogue-data.js";
const menu = document.querySelector("lf-catalogue");
menu.data = Catalogue;

