interface Title {
   style:string,
   title:string
}

const Title =({
    style,
    title
}:Title) => {
    return (
        <div className={style}>{title}</div>
    )
}

export default Title