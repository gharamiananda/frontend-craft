import { TDocs } from "@/utils/doc.utils";
import Link from "next/link";
import React from "react";

const SearchResults:React.FC<{searchTerm:string;searchResult:TDocs[];closeSearchResults:(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>void}> = ({searchTerm,searchResult,closeSearchResults}) => {
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow"
              >
                <p className="!text-lg">
                  Showing results for
                  <span className="font-semibold"> {searchTerm}:</span>
                </p>
                <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
                {
                    searchResult.map(result => (
                        <li key={result.id}>
                            <Link href={`/docs/${result.id}`} className="transition-all hover:text-emerald-600"
                            onClick={(e) => closeSearchResults(e)}>
                                {result.title}
                             </Link>
                        </li>
                    ))
                }
                </ul>
              </div>
  )
}

export default SearchResults