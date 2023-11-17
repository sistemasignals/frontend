const Card =({children,className})=>{
    return(
        <div  className={"w-full rounded overflow-hidden shadow-lg p-4 "+className}>
        {children}
        </div>
    )
}
Card.defaultProps = {
    className:"bg-gray-100"
}
export default Card;