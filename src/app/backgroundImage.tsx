"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import Image from "next/image";

const BackgroundImage: React.FC<{
  search: string;
  backgroundChange: boolean;
  setBackgroundChange: Dispatch<SetStateAction<boolean>>;
}> = ({ search, backgroundChange, setBackgroundChange }) => {
  const [backgroundUrl, setBackgroundUrl] = useState(
    "/golden-gate-unsplash.jpg"
  );

  useEffect(() => {
    if (backgroundChange) {
      axios.get("/api/image/?search=" + search).then((url) => {
        setBackgroundUrl(url.data);
        setBackgroundChange(false);
      });
    }
  }, [backgroundChange]);

  return (
    <Image
      src={backgroundUrl}
      alt="Image of the city"
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        padding: "0",
      }}
      className="background-image"
    ></Image>
  );
};

export default BackgroundImage;
