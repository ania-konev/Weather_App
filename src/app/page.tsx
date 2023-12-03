"use client";

import { useState } from "react";
import WeatherApp from "./WeatherApp";
import SearchBar from "./searchBar";
import axios from "axios";
import { Layout, Space } from "antd";
import LoadingImage from "./loadingImage";
import BackgroundImage from "./backgroundImage";

const { Header, Content } = Layout;

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [backgroundChange, setBackgroundChange] = useState(false);

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

  return (
    <div>
      <BackgroundImage
        search={search}
        backgroundChange={backgroundChange}
        setBackgroundChange={setBackgroundChange}
      ></BackgroundImage>
      {/* <Space className="space" direction="vertical" size="small"> */}
      <Layout className="layout">
        <Header className="header">
          <SearchBar
            search={search}
            setSearch={setSearch}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          />
        </Header>
        <Content className="content">
          <WeatherApp res={res} />
          <LoadingImage loading={loading} />
          {/* gdzie on sie znajduje */}
        </Content>
        {/* <Footer className="footer">{currentDate}</Footer> */}
      </Layout>
      {/* </Space> */}
    </div>
  );
}
