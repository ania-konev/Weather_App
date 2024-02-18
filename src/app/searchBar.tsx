import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

const SearchBar: React.FC<{
  searchCallback: any; // called when user wishes to search for smth with "search" input
}> = ({ searchCallback }) => {
  const [searchData, setSearchData] = useState<{ name: string }[]>([]);
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const handleChange = (e: string) => {
    setSearchInput(e);
  };
  const onKeyDown = (event: any) => {
    if (event.key === "Enter") {
      if (searchInput !== null) searchCallback(searchInput);
    }
  };
  const onClick = () => {
    if (searchInput !== null) searchCallback(searchInput);
  };

  useEffect(() => {
    fetch("/world-cities.json")
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data);
      });
  }, []);

  const getOptionsValue = () => {
    return searchData.map((item: { name: string }) => {
      return { value: item.name };
    });
  };

  return (
    <>
      <AutoComplete
        className="search-bar"
        id="search-bar"
        options={getOptionsValue()}
        filterOption={true}
        style={{ width: "200px" }}
        onChange={handleChange}
        placeholder="Search..."
        onKeyDown={onKeyDown}
      ></AutoComplete>
      <Button
        className="search-bar"
        id="search-button"
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
        onClick={onClick}
      />
    </>
  );
};

export default SearchBar;
