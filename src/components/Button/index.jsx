import "./button.css";

const Button = ({text, number, handleClick}) => {
  return <button className="boton" onClick={() => handleClick(text)}>
    {text} {number}
    </button>
  
}

export default Button