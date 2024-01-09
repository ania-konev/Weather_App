"use client";

import { useEffect, useState } from "react";
import WeatherApp from "./WeatherApp";
import SearchBar from "./searchBar";
import axios from "axios";
import { Layout } from "antd";
import LoadingImage from "./loadingImage";
import BackgroundImage from "./backgroundImage";
import HelpPage from "./helpPage";

const { Header, Content } = Layout;

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);
  const [isHelpHidden, setIsHelpHidden] = useState(false);

  const [res, setRes] = useState<{
    data: {
      main: { temp: string; humidity: string };
      name: string;
      wind: { speed: string };
      weather: Array<{ main: string }>;
    };
  } | null>(null);

  const handleClick = () => {
    setLoading(true);
    setIsHelpHidden(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    setBackgroundChange(true);
    axios.get(url).then((value) => {
      setRes(value);
      setLoading(false);
    });
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  //  to mount SearchBar component before creating HelpPage component

  const content = isHelpHidden ? (
    <>
      <WeatherApp res={res} />
      <LoadingImage loading={loading} />
    </>
  ) : (
    <>{hasMounted && <HelpPage />}</>
  );

  return (
    <div>
      <BackgroundImage
        search={search}
        backgroundChange={backgroundChange}
        setBackgroundChange={setBackgroundChange}
      ></BackgroundImage>
      <Layout className="layout">
        <Header className="header">
          <SearchBar
            search={search}
            setSearch={setSearch}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          />
        </Header>
        <Content className="content">{content}</Content>
      </Layout>
      <div className="license_note">
        <strong>
          *All{" "}
          <a href="https://datahub.io/core/world-cities#resource-world-cities">
            data
          </a>{" "}
          of the city name is licensed under the{" "}
          <a href="https://creativecommons.org/licenses/by/3.0/">
            Creative Common Attribution License{" "}
          </a>
          as is the original data from{" "}
          <a href="https://www.geonames.org/">geonames</a>. All photos are
          fetched from <a href="https://unsplash.com/">Unsplash.</a> Weather
          data provided by{" "}
          <a href="https://openweathermap.org/">OpenWeather.</a>{" "}
          <img
            src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
            width="50px"
          ></img>
        </strong>
      </div>
    </div>
  );
}
