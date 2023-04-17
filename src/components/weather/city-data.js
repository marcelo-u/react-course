import react, { Fragment } from "react"

const CityData = ({data}) => {
        const { weather } = data;
        const items = weather.map((el, index) => {
        return (<Fragment key={index}>
            <hr/>
            <img src={`http://openweathermap.org/img/w/${el.icon}.png`}/>
            <p>{el.description}</p>
            <hr/>
        </Fragment>)})
    return items
}
export default CityData;