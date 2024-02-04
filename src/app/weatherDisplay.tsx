import { Col, Row, Space } from "antd";
import { FaDroplet as HumidityIcon } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import WeatherIcons from "./weatherIcons";
import getDate from "./getDate";
import { useState } from "react";

const WeatherDisplay: React.FC<{
  temp: string;
  humidity: string;
  cityName: string;
  windSpeed: string;
  weather: string;
}> = (res) => {
  const tempInCalvin = res.temp;
  const tempInCelsius = Math.round(Number(tempInCalvin) - 273.15);

  const [currentTime, setCurrentTime] = useState(getDate());

  setInterval(() => {
    setCurrentTime(getDate());
  }, 1000);

  return (
    <Row className="weather-display-container">
      <Col span={5} className="humidity">
        <Space direction="vertical" size={4}>
          <HumidityIcon className="icons" />
          humidity
          <div>{res.humidity}%</div>
        </Space>
      </Col>

      <Col span={14} className="middle-col">
        <div className="weather-icons">
          <WeatherIcons weather={res.weather} />
        </div>
        <div className="temperature">{tempInCelsius}&deg; C</div>
        <div className="city-name">{res.cityName}</div>
        {currentTime}
      </Col>
      <Col span={5} className="wind">
        <Space direction="vertical" size={4}>
          <div className="icons">
            <FaWind />
          </div>
          wind
          <div>{res.windSpeed} m/s</div>
        </Space>
      </Col>
    </Row>
  );
};

export default WeatherDisplay;
