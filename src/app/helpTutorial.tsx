"use client";
import Joyride, { Step } from "react-joyride";

const HelpTutorial = () => {
  const run = true;
  const steps: Array<Step> = [
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
      locale: { skip: <strong>Skip</strong> },
      placement: "bottom",
      target: "#search-bar",
      title: "First step",
    },
    {
      content: <h2>Click enter or the &quot;search&quot; button.</h2>,
      locale: { skip: <strong>SKIP</strong> },
      placement: "bottom",
      target: "#search-button",
      title: "Second step",
    },
  ];

  return (
    <div className="help-tutorial">
      <strong>Welcome in a Weather Application Website!</strong> <br />
      <i>
        Enter city name and click on the &quot;search&quot; button to check the
        weather.
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

export default HelpTutorial;
