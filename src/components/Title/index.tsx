interface Title {
   style:string,
   title:string
}

const Title =({
    style,
    title
}:Title) => {
    return (
        <h1 className={style}>{title}</h1>
    )
}

export default Title