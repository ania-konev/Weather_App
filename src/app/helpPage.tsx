"use client";
import { useState } from "react";
import Joyride, { Step } from "react-joyride";

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
    <div className="help_message">
      <strong>Welcome in a Weather Application Website!</strong> <br />
      <i>
        Enter city name and click on the "search" button to check the weather.
      </i>
      <Joyride
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />
    </div>
  );
};

export default HelpPage;
