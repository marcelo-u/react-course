import react, { useEffect, useState } from "react";
import CityData from "./CityData";
import Button from "react-bootstrap/Button";

const API_KEY = process.env.REACT_APP_API_ID;

const WeatherMain = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    async function fetchData(city) {
      try {
        const apiString = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(apiString);
        const responseJson = await response.json();
        setData(responseJson);
      } catch (err) {
        console.log("Error " + err);
      }
    }
    fetchData(city);
  }, [city]);

  const submitCity = (e) => {
    setCity(query);
  };

  return (
    <>
      <h1>WeatherMain</h1>
      <section>
        <form onSubmit={() => false}>
          <label>
            Enter City:
            <input
              type="text"
              value={query}
              name="cityname"
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <Button type="button" onClick={submitCity}>
            Find
          </Button>
        </form>
      </section>
      {data && <CityData data={data} />}
    </>
  );
};
export default WeatherMain;
