import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allDocumnets = fileNames.map((fileName) => {
        const id = fileName.replace(".md", "");

        const fullPath = path.join(postsDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, "utf8");

        const matterResult :any= matter(fileContents);


        const returnObj:   {
            id: string,
            order: number,
            title: string,
            date: string,
            parent: string,
            author:string,
            category: string,
            tags:string[],
          }={ id,
            ...matterResult.data,}
    
        return returnObj
    });

    return allDocumnets.sort((a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    });
}

export async function getDocumentContent(id:string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult:any = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);

    const contentHtml = processedContent.toString();

    const returnObj:   {
        id: string,
        order: undefined|number,
        title: string,
        date: string,
        parent: string,
        author:string,
        category: string,
        tags:string[],
        contentHtml:string,
      }={ id,
        contentHtml,
        ...matterResult.data,}

    return returnObj
    
}