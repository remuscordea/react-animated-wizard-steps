import React from "react";
import { Wizard } from "react-use-wizard";
import Header from "./Header";
import Footer from "./Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./WizardStyles.css";

const OnboardingWizard = () => {
  return (
    <div className="onboardingWizard">
      <Wizard startIndex={0} header={<Header />}>
        <Step1 />
        <Step2 />
        <Step3 />
      </Wizard>
    </div>
  );
};

export default OnboardingWizard;
