import react from "react";
import FooterBar from "./components/footer-bar";
import HeaderBar from "./components/header-bar";
import WeatherMain from "./components/weather/weather-main";


const data = {
    footerMsg : "Hello from the footer",
    headerMsg : "Hello from the header"
}

const App = () =>  
    <div>
        <HeaderBar data={data.headerMsg}/>
        <WeatherMain/> 
        <FooterBar data={data.footerMsg}/>
    </div>

export default App;