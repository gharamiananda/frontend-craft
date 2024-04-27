import Image from "next/image"

const Search = () => {
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
      style={{
        // '--bg-opacity-light': 0.5,
        // " --bg-opacity-dark": 0.2
        }}>
      <div className="container flex h-14 items-center justify-between gap-12">
        <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>

        <div className="hidden lg:block lg:max-w-md lg:flex-auto">
          <button type="button"
            className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex">
            <img src="./assets/icons/search.svg" className="h-5 w-5" />
            <input type="text" placeholder="Search..." className="flex-1 focus:border-none focus:outline-none" />
            <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
              <kbd className="font-sans">Ctrl </kbd>
              <kbd className="font-sans">K</kbd></kbd>
          </button>
        </div>

        <div className="flex items-center gap-5 lg:hidden">
          <button type="button"
            className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
            aria-label="Toggle navigation">
            <img src="./assets/icons/hamburger.svg" alt="Menu" className="w-2.5 stroke-zinc-900 dark:stroke-white" />
          </button>
          <a aria-label="Home" href="/">
            <Image
            width={100}
            height={100}
             src="logo.svg" alt="Protocol" className="h-6" />
          </a>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"></div>
          <div className="flex gap-4">
            <div className="contents lg:hidden">
              <button type="button"
                className="focus:[&amp;:not(:focus-visible)]:outline-none flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden"
                aria-label="Find something...">
                <Image
                
            width={100}
            height={100}
                src="./search.svg" alt="Search" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search