import React from "react";
import { Spin } from "antd";

const LoadingImage = ({ loading }: { loading: boolean }) => {
  if (loading) {
    return <Spin />;
  }
};

export default LoadingImage;
