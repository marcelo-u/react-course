import react, { useEffect, useState } from "react"
import CityData from "./CityData"

const API_KEY = process.env.REACT_APP_API_ID


const WeatherMain = () => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState(null);

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
        fetchData(city)
    }, [])

    console.log(city + " <---- CITY ")

    return (<>
                <h1>WeatherMain</h1>
                <section>
                    <form>
                        <label>Enter City: 
                            <input type="text" name="cityname" onChange={(e) => setCity(e.target.value)}/>
                        </label>
                    </form>
                </section>
                {data && (<CityData data={data}/>)}
            </>)
}
export default WeatherMain;