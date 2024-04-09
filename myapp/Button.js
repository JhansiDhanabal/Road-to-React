import "../styles/Button.css"

const Button = ({ name, type, handleLogin}) => {
    return (
        <button onClick={handleLogin} type={type}>
            {name}
        </button>
    )
}
export default Button;