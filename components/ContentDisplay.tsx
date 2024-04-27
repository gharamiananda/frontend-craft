import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import React from "react";
import Tag from "./Tag";
const ContentDisplay:React.FC<{id:string}> = async ({id}) => {
  const documentContent = await getDocumentContent(id);


  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent.title as string}</h1>
      <div>
        <span>Published On: {documentContent.date  as string}</span> by {" "}
        <Link href={`/author/${documentContent.author}`}>
          {documentContent.author  as string}
        </Link> {" "}
        under the{" "}
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category  as string}
        </Link>{" "}
        category.
      </div>
      <div>
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{__html: documentContent.contentHtml  as string}} />
    </article>
  )
}

export default ContentDisplay