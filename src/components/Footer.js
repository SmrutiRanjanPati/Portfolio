import React from "react";
import "./../css/footer.css"

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return(
        <div className="footer">
            <span>copyright &copy; &nbsp;{year} Pravnit. All Rights Reserved.</span>
        </div>
    )
}

export default Footer;