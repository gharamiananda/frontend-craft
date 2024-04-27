 export type TDocs ={
    id: string;
    order: number;
    title: string;
    date: string;
    parent: string;
    author: string;
    category: string;
    tags: string[];
}
export function getDocumentsByCategory(docs:TDocs[], category:string) {
    return docs.filter(doc => doc.category === category);
 }


export function getDocumentsByAuthor(docs:TDocs[], author:string) {
    return docs.filter(doc => encodeURI(doc.author) === author);
}


export function getDocumentsByTag(docs:TDocs[], tag:string) {
    return docs.filter(doc => doc.tags.some(inputTag => inputTag === tag));
}
