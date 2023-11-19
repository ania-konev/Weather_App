import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

const SearchBar: React.FC<{
  search: string;
  setSearch: any;
  onClick: () => void;
}> = ({ search, setSearch, onClick }) => {
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
        return { value: item.name };
      });
  };

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  return (
    <>
      <AutoComplete
        className="search_bar"
        options={getPanelValue()}
        style={{ width: 200 }}
        onSelect={onSelect}
        onChange={handleChange}
        placeholder="Search..."
      ></AutoComplete>
      <Button
        className="search_bar"
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
        onClick={onClick}
      />
    </>
  );
};

export default SearchBar;
