const Button =({className,onClick,children})=>{
    return(
        <button 
        onClick={onClick}
        className={"flex m-auto mt-10 text-white font-bold py-2 px-4 rounded " + className}>
            {children}
        </button>
    )
}

export default Button