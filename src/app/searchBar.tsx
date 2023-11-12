"use client";

import React, { useState, useEffect } from "react";
import { AutoComplete, Input } from "antd";

const SearchBar: React.FC = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<{ value: string }[]>([]);

  const handleChange = (e: string) => {
    setSearch(e);
  };

  useEffect(() => {
    fetch("/world_cities.json")
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
      });
  }, []);

  const getPanelValue = () => {
    return searchData
      .filter((item: any, index: any) => {
        return item.name.toLowerCase().startsWith(search.toLowerCase());
      })
      .map((item: any, index: any) => {
        console.log(item);
        return { value: item.name };
      });
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  return (
    <>
      <AutoComplete
        options={getPanelValue()}
        style={{ width: 200 }}
        onSelect={onSelect}
        onChange={handleChange}
        placeholder="Search..."
      >
        <Input.Search size="large" />
      </AutoComplete>
    </>
  );
};

export default SearchBar;
