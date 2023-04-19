import react from "react";
import FooterBar from "./components/FooterBar";
import HeaderBar from "./components/HeaderBar";
import WeatherMain from "./components/weather/WeatherMain";


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