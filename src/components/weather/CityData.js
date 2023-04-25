import react, { Fragment } from "react";
import Alert from "react-bootstrap/Alert";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Card from "react-bootstrap/Card";

const CityData = ({ data }) => {
  const { weather } = data;

  const items = weather ? (
    weather.map((item, index) => (
      <ListGroupItem as={"li"} key={index}>
        <Card.Img
          style={{ width: "80px" }}
          variant=""
          src={"https://openweathermap.org/img/wn/" + item.icon + ".png"}
        />
        <Card.Title>
          <Alert variant="info">{item.description}</Alert>
        </Card.Title>
      </ListGroupItem>
    ))
  ) : (
    <Alert variant="danger">NO INFO</Alert>
  );

  return (
    <Card
      style={{
        width: "25%",
        margin: "10px",
        padding: "20px",
      }}
    >
      {items}
      <Card.Body>
        {data.main && (
          <>
            <h3>Temperature</h3>
            <p>
              Feels like: + <strong>{data.main.feels_like || ""} Cº</strong>
            </p>
            <p>
              Humidty: + <strong>{data.main.humidity || ""} %</strong>
            </p>
            <p>Pressure: + {data.main.pressure || ""} Ha</p>
            <p>Temperature: + {data.main.temp} Cº</p>
            <p>
              Max Temperature: + <strong>{data.main.temp_max || ""} Cº </strong>
            </p>
            <p>Min Temperature: + {data.main.temp_min || ""}</p>
          </>
        )}
      </Card.Body>
    </Card>
  );
};
export default CityData;
