import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";

const BackgroundImage: React.FC<{
  search: string;
  backgroundChange: boolean;
  setBackgroundChange: Dispatch<SetStateAction<boolean>>;
}> = ({ search, backgroundChange, setBackgroundChange }) => {
  const [backgroundUrl, setBackgroundUrl] = useState(
    "/golden_gate-unsplash.jpg"
  );

  const unsplash = createApi({
    accessKey: "4ITKdSSv06TlWBKZsyA8Qvctw3QeUXk0zCT-13icG0I",
    fetch: fetch,
  });

  useEffect(() => {
    if (backgroundChange) {
      unsplash.photos.getRandom({ query: search, count: 1 }).then((result) => {
        if (result.response === undefined) {
          console.warn("Undefined response from photos api");
          return;
        }
        const url = (result.response as Random[])[0].urls?.raw;
        setBackgroundUrl(url);
        setBackgroundChange(false);
      });
    }
  }, [backgroundChange]);

  return (
    <img
      src={backgroundUrl}
      alt="Image of the city"
      sizes="100vw"
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        padding: "0",
      }}
      className="background_image"
    ></img>
  );
};

export default BackgroundImage;
