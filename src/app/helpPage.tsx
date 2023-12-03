"use client";
import { useEffect, useState } from "react";
import Joyride, { Step, STATUS } from "react-joyride";

const HelpPage = () => {
  const [{ run, steps }, setState] = useState<{
    run: boolean;
    steps: Array<Step>;
  }>({
    run: true,
    steps: [
      {
        content: <h2>Welcome in a Weather Application Website!</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: ".content",
      },
      {
        content: (
          <h2>Enter the name of the city you want to check the weather for.</h2>
        ),
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#search_bar",
        title: "First step",
      },
      {
        content: <h2>Click enter or the "search" button.</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#search_button",
        title: "Second step",
      },
    ],
  });

  return (
    <Joyride
      run={run}
      steps={steps}
      hideCloseButton
      scrollToFirstStep
      showSkipButton
      showProgress
    />
  );
};

export default HelpPage;

// This is a Weather Application Website. Enter the name of the city you want
// to check the weather for and click enter or the "search" button.
