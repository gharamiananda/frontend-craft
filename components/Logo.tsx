import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
         src="/logo.svg"
         width={100}
         height={24}
         alt="Protocol" className="h-6 w-auto"
         priority
         />
      </Link>
    </div>
  )
}

export default Logo