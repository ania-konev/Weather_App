import LoadingImage from "./loadingImage";

const WeatherApp: React.FC<{
  res: {
    data: {
      main: { temp: string; humidity: string };
      name: string;
    };
  } | null;
}> = ({ res }) => {
  if (res === null) {
    <LoadingImage />;
  } else {
    return (
      <div>
        temp: {res.data.main.temp}
        city: {res.data.name}
        humidity: {res.data.main.humidity}
      </div>
    );
  }
};

export default WeatherApp;
