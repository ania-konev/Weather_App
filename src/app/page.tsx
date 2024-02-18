"use client";

import { useEffect, useState } from "react";
import WeatherDisplay from "./weatherDisplay";
import SearchBar from "./searchBar";
import axios from "axios";
import { Layout, message } from "antd";
import LoadingImage from "./loadingImage";
import BackgroundImage from "./backgroundImage";
import HelpTutorial from "./helpTutorial";
import Image from "next/image";

const { Header, Content, Footer } = Layout;

export default function Home() {
  const [backgroundLoc, setBgLoc] = useState("");
  const [loading, setLoading] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);
  const [isHelpHidden, setIsHelpHidden] = useState(false);

  const [res, setRes] = useState<{
    main: { temp: string; humidity: string };
    name: string;
    wind: { speed: string };
    weather: Array<{ main: string }>;
  } | null>(null);

  const [messageApi, contextHolder] = message.useMessage();

  const errorMessage = () => {
    messageApi.open({
      type: "error",
      content: "City not found!",
    });
  };

  const searchForWeather = (search: string) => {
    setLoading(true);
    setIsHelpHidden(true);
    setBgLoc(search);
    axios
      .get("/api/?search=" + search)
      .then((value) => {
        setBackgroundChange(true);
        setRes(value.data);
        setLoading(false);
      })
      .catch((error) => {
        setBackgroundChange(false);
        errorMessage();
      });
  };

  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  //  to mount SearchBar component before creating HelpPage component

  const display =
    res === null ? null : (
      <WeatherDisplay
        temp={res.main.temp}
        humidity={res.main.humidity}
        cityName={res.name}
        windSpeed={res.wind.speed}
        weather={res.weather[0].main}
      />
    );

  if (loading) {
    <>
      <LoadingImage /> {display}{" "}
    </>;
  }

  const content = isHelpHidden ? (
    display
  ) : (
    <>
      {hasMounted && <HelpTutorial />} {display}
    </>
  );

  return (
    <div>
      <> {contextHolder}</>
      <BackgroundImage
        search={backgroundLoc}
        backgroundChange={backgroundChange}
        setBackgroundChange={setBackgroundChange}
      ></BackgroundImage>
      <Layout>
        <Layout className="layout">
          <Header className="header">
            <SearchBar searchCallback={searchForWeather} />
          </Header>
          <Content className="content">{content}</Content>
        </Layout>
        <Footer>
          <div className="license-note">
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
              <Image
                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                style={{ height: "1rem" }}
                alt="open_weather_map_logo"
              ></Image>
            </strong>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}
