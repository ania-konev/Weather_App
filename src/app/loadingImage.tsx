import React from "react";
import { Spin } from "antd";

const LoadingImage = ({ loading }: { loading: boolean }) => {
  console.log("hello");
  if (loading) {
    return <Spin />;
  }
};

export default LoadingImage;
