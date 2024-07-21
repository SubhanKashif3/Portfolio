import { useNavigate } from "react-router-dom";
const Button = ({
    text = "",
    className = "",
    href = "",
    ...props
    
}) => {
    const navigate = useNavigate();
    return (
        <button className="mr-3 text-white text-md hover:bg-slate-700 rounded-sm py-2 px-3" onClick={()=>{
            href ? navigate(href) : null
        }} {...props}>{text}</button>
    )
};
export default Button;