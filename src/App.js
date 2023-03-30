import react from "react";
import FooterBar from "./components/footer-bar";
import HeaderBar from "./components/header-bar";

const data = {
    footerMsg : "Hello from the footer",
    headerMsg : "Hello from the header"
}

const App = () =>  
    <div>
        <HeaderBar data={data.headerMsg} />
        <h1>Hello!</h1>
        <FooterBar data={data.footerMsg}/>
    </div>

export default App;