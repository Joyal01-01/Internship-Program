const Button = ({label, onClick}: {label:string; onClick: ()=> void}) => {
    return(
        <button type="button" className="btn btn-primary mx-1" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button  
