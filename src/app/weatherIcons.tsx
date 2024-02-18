import {
  WiThunderstorm,
  WiCloudy,
  WiRainMix,
  WiRain,
  WiSnowWind,
  WiMoonFull,
  WiWindy,
} from "weather-icons-react";

const WeatherIcons: React.FC<{
  weather: string;
}> = ({ weather }) => {
  if (weather === "Thunderstorm") {
    return <WiThunderstorm className="cloud-rain-icon" />;
  } else if (weather === "Drizzle") {
    return <WiRainMix className="cloud-rain-icon" />;
  } else if (weather === "Rain") {
    return <WiRain className="cloud-rain-icon" />;
  } else if (weather === "Snow") {
    return <WiSnowWind />;
  } else if (weather === "Clear") {
    return <WiMoonFull className="clear-sky-icon" />;
  } else if (weather === "Clouds") {
    return <WiCloudy className="cloud-rain-icon" />;
  } else {
    return <WiWindy className="cloud_rain_icon" />;
  }
};

export default WeatherIcons;
