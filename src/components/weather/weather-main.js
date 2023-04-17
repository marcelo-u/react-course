import react, { useEffect, useState } from "react"
import CityData from "./city-data"

const API_KEY1 = "622c308d808b1628c68060eeaf37c12d"
const API_KEY = process.env.REACT_APP_API_ID


const WeatherMain = () => {
    let [data, setData] = useState(null);
    let [city, setCity] = useState(null);

    useEffect(() => {
        async function fetchData(city) {
            try {
                const apiString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
                const response = await fetch(apiString)
                const responseJson = await response.json();
                setData(responseJson)
            } catch (err) {
                console.log("Error " + err)
            }
        }
        fetchData("London")
    }, [city])

    return (<body>
                <h1>WeatherMain</h1>
                <section>
                    <form ref="form">
                        <label>Enter City: 
                            <input type="text" name="cityname"/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </section>
                {data ? (<CityData data={data}/>) : (<div>Data not found</div>)}
            </body>)
}
export default WeatherMain;