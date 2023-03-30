import react from "react";
import FooterBar from "./components/footer-bar";
import HeaderBar from "./components/header-bar";

const data = {
    footerMsg : "Hello from the footer",
    headerMsg : "Hello from the header"
}

const App = () =>  
    <div>
        <HeaderBar data={data.footerMsg} />
        <h1>Hello!</h1>
        <FooterBar data={data.headerMsg}/>
    </div>

export default App;