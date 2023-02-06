import React from "react";
import { useWizard } from "react-use-wizard";
import "./WizardStyles.css";

const Footer = () => {
  const { handleStep, previousStep, nextStep } = useWizard();

  // Attach an optional handler
  handleStep(() => {
    console.log("Going to next step");
  });

  return (
    <div className="footerContainer">
      <button onClick={() => previousStep()}>Previous</button>
      <button onClick={() => nextStep()}>Next</button>
    </div>
  );
};

export default Footer;
