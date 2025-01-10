import Link from "next/link"

interface Career {
    company:string,
    title:string,
    location:string,
    date:string,
    description:string,
}

function ListCareer({
    company,
    title,
    location,
    date,
    description
}: Career) {
    return (
        <div className="text-black">
            <h3 className="font-semibold text-2xl">{company}</h3>
            <p>{title}</p>
            <p className="text-sm">📬 {location}</p>
            <p className="text-sm">📅 {date}</p>
            <p className="text-sm text-justify my-3">
              {description}
            </p>

            <button className="text-sm float-right font-semibold bg-black text-white p-2 rounded-md">
                <Link href="/sagara">
                   View Project
                </Link>
            </button>
       </div>
    )
}

export default ListCareer