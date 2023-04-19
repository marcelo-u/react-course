import react, { Fragment } from "react"

const CityData = ({data}) => {
        const { weather } = data;
        console.log(weather);
    
    const item = weather ? weather.map((item, index) => (
        <li key={index}>
            {item.description}
        </li>
    )) : ( <div>NO INFO</div>) 
    
    return (<div>
        {item}
    </div>
    ) 
}
export default CityData;