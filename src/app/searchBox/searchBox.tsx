import axios from "axios";
// import { useState, useEffect } from "react";

const WeatherApp = async () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  const res = await axios.get(url);
  return (
    <div>
      temp:{res.data.main.temp}
      city: {res.data.name}
      humiditdddy: {res.data.main.humidity}
    </div>
  );
};

export default WeatherApp;
// export default function WeatherApp() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState({});
//   const [loading, setLoading] = useState(false);
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

//   const axiosWeather = (e)=>{
//     e.prevntDefault()
//     setLoading(true)

//     axios.get(url).then((response) =>{
//         setWeather(response.data)
//         console.log(response.data)
//     })
//     setCity('')
//     setLoading(false)

//   }

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
//   const GetAllData = () => {
//     const allData = await axios
//       .get(url)
//       .then((response: any) => {
//         // const allData = response.data.main.temp;
//         return(
//             temp: response.data.main.temp
//         )
//       })
//       .catch((error) => console.error("Error: ${error}"));
//     return <div>allData</div>;
//   };
//   return <GetAllData />;
// }

// function WeatherApp{
// const [weather, setWeather] =useState("")
// const [city, setCity] = useState("")
// const apiKey = process.env.React_APP_APIKEY

// const apiCAll = async (e) =>{
//     e.preventDefault()
//     const loc=e.target.elements.loc.value
//     const url=`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
//     const req = axios.get(url)
//     const res = await req;
//     setWeather({
//         descp: res.data.weather[0].description,
//         temp: res.data.main.temp,
//         city: res.data.name,
//         humidity: res.data.main.humidity,
//         press: res.data.main.pressure,
//     })
//     setCity(res.data.name)
// }
