import Link from "next/link"

interface NavigationProps {
    link:string,
    title_nav:string,
}

const Navigation = ({
    link,
    title_nav
}:NavigationProps) => {
    return ( 
      <li className="py-3 md:py-7 md:px-4 hover:text-black text-black hover:font-bold">
         <Link href={link}>
            {title_nav}
        </Link>
      </li>)
}

export default Navigation