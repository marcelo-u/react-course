import react from "react";
import "../styles/header-bar.css"

const HeaderBar = ({data}) => 
    <div className="header-bar">
        <p>{data}</p>
    </div>

export default HeaderBar;