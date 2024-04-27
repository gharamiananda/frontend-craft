'use client';

import { TDocs, getDocumentsByAuthor, getDocumentsByCategory, getDocumentsByTag } from "@/utils/doc.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar:React.FC<{docs: TDocs[]}>  = ({ docs }) => {

    const pathname=usePathname();
    const [rootNodes, setRootNodes] = useState<TDocs[]>([]);
    const [nonRootNodesGrouped, setNonRootNodesGrouped] = useState<any>({});

    useEffect(()=>{
  
    

        let matchedDocs=docs;
        if(pathname.includes('/tags')){
            const tag=pathname.split('/')[2];
            matchedDocs=getDocumentsByTag(docs, tag);
        }else  if(pathname.includes('/authors')){
            const authors=pathname.split('/')[2];
        
              matchedDocs=getDocumentsByAuthor(docs, authors);

        }else  if(pathname.includes('/categories')){
            const categories=pathname.split('/')[2];
        
              matchedDocs=getDocumentsByCategory(docs, categories);

        }

        const roots = matchedDocs.filter((post) => !post.parent)

        const nonRoots = Object.groupBy(
        matchedDocs.filter((post) => post.parent),
        ({ parent }:any) => parent
        );

        const nonRootsKeys = Reflect.ownKeys(nonRoots);
        nonRootsKeys.forEach(key => {
            const foundInRoots = roots.find((root) => root.id === key);
            if(!foundInRoots) {
                const foundInDocs = docs.find((doc) => doc.id === key);
                roots.push(foundInDocs as any);
            }
        });

        roots.sort((a, b) => {
            if (a.order < b.order) {
              return -1;
            }
            if (a.order > b.order) {
              return 1;
            }
            return 0;
          });

        setNonRootNodesGrouped(nonRoots);
        setRootNodes(roots)

      
    },[pathname])

  

   
    return (
        <nav className="lg:block my-10">
            <ul>
                <div className="relative mt-3 pl-2">
                    <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
                    <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                    <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
                    <ul role="list" className="border-l border-transparent">
                        {rootNodes.map((rootNode) => (
                            <li key={rootNode.id as string} className="relative">
                                <Link
                                    aria-current="page"
                                    className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                                    href={`/docs/${rootNode.id}`}
                                >
                                    <span className="truncate">
                                        {rootNode.title as string}
                                    </span>
                                </Link>
                                {nonRootNodesGrouped[rootNode.id] && (
                                    <ul
                                        role="list"
                                        className="border-l border-transparent"
                                    >
                                        {nonRootNodesGrouped[rootNode.id].map(
                                            (subRoot:any) => (
                                                <li key={subRoot.id as string}>
                                                    <Link
                                                        className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href={`/docs/${rootNode.id}/${subRoot.id}`}
                                                    >
                                                        <span className="truncate">
                                                            {subRoot.title as string}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </nav>
    );
};

export default Sidebar;