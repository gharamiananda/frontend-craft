import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc.utils";
import React from "react";

const AuthorPage:React.FC<{params:{name:string}}> = ({params:{name}}) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);
  return (
    <ContentDisplay id={matchedDocs[0].id} />
  )
}

export default AuthorPage