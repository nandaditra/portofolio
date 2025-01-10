interface Blog {
    title:string,
    date:string,
    description:string,
}

function ListBlog({
    title, 
    date, 
    description       
}:Blog
) {
    return (
        <div className="flex flex-col gap-5 py-2">
            <div className="w-full md:w-1/2 mx-auto gap-4">
                <h2 className="text-black font-bold text-2xl">{title}</h2>
                <p className="text-black text-ms">📅 {date}</p>
                <div className="py-3"> 
                   <p className="text-md text-black">{description}</p>
                </div>
                <p className="text-black text-sm text-right">Read More</p>
            </div>
        </div>
    )
}

export default ListBlog