"use client";

import { useState } from "react";
import WeatherApp from "./WeatherApp";
import SearchBar from "./searchBar";
import axios from "axios";
import { Layout, Space } from "antd";
import LoadingImage from "./loadingImage";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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

    axios.get(url).then((value) => {
      setRes(value);
      setLoading(false);
    });
  };

  return (
    <Space
      className="space"
      direction="vertical"
      style={{ width: "50%", height: "90vh" }}
      size="small"
    >
      <Layout className="layout">
        <Header className="header">
          <SearchBar
            search={search}
            setSearch={setSearch}
            onClick={handleClick}
          />
        </Header>
        <Content className="content">
          <WeatherApp res={res} />
          <LoadingImage loading={loading} />
        </Content>
        <Footer className="footer"></Footer>
      </Layout>
    </Space>
  );
}
