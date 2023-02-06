import React from "react";
import { useWizard } from "react-use-wizard";
import "./WizardStyles.css";

const Header = () => {
  const { activeStep, stepCount } = useWizard();
  const currentStep = activeStep + 1;
  const { goToStep } = useWizard();

  return (
    <div className="headerContainer">
      <span>
        Step <b>{currentStep}</b> from <b>{stepCount}</b> in total
      </span>
      <button className="button" onClick={() => goToStep(0)}>
        Reset
      </button>
    </div>
  );
};

export default Header;
