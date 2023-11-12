"use client";

import { useState } from "react";
import WeatherApp from "./searchData";
import SearchBar from "./searchBar";
import axios from "axios";

export default function Home() {
  const [search, setSearch] = useState("");

  const [res, setRes] = useState<{
    data: {
      main: { temp: string; humidity: string };
      name: string;
    };
  } | null>(null);

  const handleClick = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    axios.get(url).then((value) => {
      setRes(value);
    });
  };

  return (
    <main>
      <h1>
        <SearchBar
          search={search}
          setSearch={setSearch}
          onClick={handleClick}
        />
        <WeatherApp res={res} />
      </h1>
    </main>
  );
}
