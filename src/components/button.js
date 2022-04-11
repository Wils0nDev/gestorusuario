import './css/button.css'
const Button = ({children},formulario) =>{
    
    // 
    return (
        <button className="button">
            {children}
        </button>
    )
}

export default Button;