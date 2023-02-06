import React, { useState } from "react";
import { useWizard } from "react-use-wizard";
import { timeout } from "./utils.js";
import "./WizardStyles.css";

const Step1 = () => {
  const { nextStep, handleStep, isLoading } = useWizard();
  const [stepOut, setStepOut] = useState(false);

  handleStep(async () => {
    setStepOut(true);
    await timeout();
  });

  const fadeOut = stepOut ? "fadeOut" : "";
  const loading = isLoading ? "loading" : "";

  return (
    <>
      <div className={`stepContainer ${fadeOut}`}>
        <div>
          <h2>Slide 1 title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor
            justo, sodales sit amet pharetra nec, feugiat ac nunc. Nullam
            sollicitudin nec mauris id tempus. Cras interdum fringilla
            sollicitudin. Quisque iaculis fermentum lacus. Sed vel quam turpis.
            Sed sed lacus commodo, mollis quam quis, aliquam tellus. Proin nec
            leo felis. Nullam eget dictum augue, non pharetra metus. Praesent
            commodo ipsum ut dapibus hendrerit. Phasellus ipsum dolor, blandit
            sed pharetra quis, fringilla vitae tellus. Praesent luctus laoreet
            ante, ut fringilla lacus. In nec aliquam est. Mauris fringilla dui
            nibh, sed condimentum orci condimentum eget. Duis sodales egestas
            metus sit amet convallis. Aenean tortor velit, bibendum ac dignissim
            a, laoreet et lorem. Quisque convallis hendrerit orci, id finibus
            tellus sagittis at. Proin vulputate elit sed tortor fermentum, vel
            finibus leo molestie. Duis nisi risus, tincidunt sed lacus a,
            vestibulum tristique arcu. Proin elementum ac velit vitae ultricies.
            Duis erat est, feugiat vel gravida id, semper ac nunc. Donec
            pharetra lobortis consequat. Aenean dapibus odio vitae velit mollis
            egestas. Vestibulum condimentum nulla vel nunc tincidunt, ac
            vulputate ligula vehicula. Sed et varius nisi, sit amet porttitor
            sapien. In ante neque, tempor vel mollis in, auctor ac arcu.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor
            justo, sodales sit amet pharetra nec, feugiat ac nunc. Nullam
            sollicitudin nec mauris id tempus. Cras interdum fringilla
            sollicitudin. Quisque iaculis fermentum lacus. Sed vel quam turpis.
            Sed sed lacus commodo, mollis quam quis, aliquam tellus. Proin nec
            leo felis. Nullam eget dictum augue, non pharetra metus. Praesent
            commodo ipsum ut dapibus hendrerit. Phasellus ipsum dolor, blandit
            sed pharetra quis, fringilla vitae tellus. Praesent luctus laoreet
          </p>
        </div>
      </div>

      <div className="footerContainer">
        <button
          className={`button skipButton ${fadeOut}`}
          onClick={() => nextStep()}
        >
          Skip
        </button>
        <button className={`button ${loading}`} onClick={() => nextStep()}>
          {!loading ? "Next" : ""}
        </button>
      </div>
    </>
  );
};

export default Step1;
