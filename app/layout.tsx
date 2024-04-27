import Header from "@/components/Header";
import { getDocuments } from "@/lib/doc";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend -A documentation for frontend developer",
  description: "A Documentation website by protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const allDocuments=getDocuments();
  
  return (
    <html lang="en">
      <body className={inter.className}>
  <div className="h-full lg:ml-72 xl:ml-80">
    <Suspense fallback={<p>Loading...........</p>}>      
        <Header docs={allDocuments} />
        
    <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
  <main className="flex-auto py-12">
    
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div
        className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
        </div>
      </div>
    </div>
    

  
    {children}
  </main>

  <footer className="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
    <div className="relative h-8"></div>
    <div
      className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        © Copyright 2023. All rights reserved.
      </p>
    </div>
  </footer>
    </div>
    </Suspense>

        </div>
        </body>
    </html>
  );
}
