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
        <div className="px-3 hover:animate-bounce transition duration-150 ease-in-out">
            <Link href={link}>
                <i className={icon}></i>
            </Link>
        </div>
    )
}

export default Brand