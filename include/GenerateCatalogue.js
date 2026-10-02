import fs from "fs";
import path from "path";

function scan(dir, baseDir = dir) {
    const result = [];

    for (const name of fs.readdirSync(dir)) {
        if (name.startsWith("_"))
                continue;


        const fullPath = path.join(dir, name);
        const stat = fs.statSync(fullPath);

        if (!stat.isDirectory())
            continue;

        const metaPath = path.join(fullPath, "meta.json");

        let meta = {};

        if (fs.existsSync(metaPath)) {
            meta = JSON.parse(
                fs.readFileSync(metaPath, "utf8")
            );
        }


        const relativePath = path.relative(
            path.dirname(baseDir),
            fullPath
        ).replaceAll("\\", "/");


        const children = scan(fullPath, baseDir);

        const item = {
            id: relativePath,
            title: meta.title ?? name
        };

        if (children.length > 0)
            item.children = children;

        if (meta.page || children.length === 0) {
            item.path =
                "../" +
                path.relative(
                    path.dirname(baseDir),
                    fullPath
                ).replaceAll("\\", "/") +
                "/";
        }

        result.push(item);
    }

    return result;
}

const catalogue = scan("../body");

fs.writeFileSync(
    "../body/catalogue-data.js",
    `export const Catalogue = ${JSON.stringify(catalogue, null, 4)};`
);