import Link from "next/link"

interface BrandProps {
    link:string,
    icon:string,
}

const Brand = ({
    link, 
    icon
}:BrandProps) => {
    return (
        <li className="px-3 hover:animate-bounce transition duration-150 ease-in-out">
            <Link href={link}>
                <i className={icon}></i>
            </Link>
        </li>
    )
}

export default Brand