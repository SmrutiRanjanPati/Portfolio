import React, {useState} from "react";
import { FaMoon, FaSun} from "react-icons/fa";
import "./../css/Darkmode.css";


const DarkMode = () =>{
    const [isIcon,setIsIcon] = useState(false);
    const toggleTheme = (e) => {
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme")){
            setIsIcon(true)
        }
        else{
            setIsIcon(false)
        }
    };
    return(
        <div className="dark-mode">
        <button onClick={() => toggleTheme(this)}>
        <div id="icon">
        {isIcon ? <FaMoon/>: <FaSun/>}
        </div>
        </button>
        </div>
    );
};

export default DarkMode;