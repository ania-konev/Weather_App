import { Col, Row } from "antd";
import { FaDroplet as HumidityIcon } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import WeatherIcons from "./weatherIcons";

const WeatherApp: React.FC<{
  res: {
    data: {
      main: { temp: string; humidity: string };
      name: string;
      wind: { speed: string };
      weather: Array<{ main: string }>;
    };
  } | null;
}> = ({ res }) => {
  if (res === null) {
    console.log("null");
  } else {
    const tempInCalvin = res.data.main.temp;
    const tempInCelsius = Math.round(Number(tempInCalvin) - 273.15);
    return (
      <Row className="container">
        <Col span={5} className="humidity">
          <div>
            <div>
              <HumidityIcon className="icons" /> humidity
            </div>
            {res.data.main.humidity}%
          </div>
        </Col>
        <Col span={14}>
          <div className="weather_icons">
            <WeatherIcons weather={res.data.weather[0].main} />
          </div>
          <div className="temperature">{tempInCelsius}&deg; C</div>
          <div className="city_name">{res.data.name}</div>
        </Col>
        <Col span={5} className="wind">
          <div>
            <div className="icons">
              <FaWind /> wind
            </div>
            {res.data.wind.speed} m/s
          </div>
        </Col>
      </Row>
    );
  }
};

export default WeatherApp;
