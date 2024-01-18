import React from "react";

function Footer() {
    const tm = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright {tm}</p>
        </footer>
    )
}

export default Footer;