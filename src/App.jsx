import React, { useState } from "react";
import SidebarNav from "./components/SidebarNav";
import PersonalForm from "./components/PersonalForm";
import PlanForm from "./components/PlanForm";
import AddOnsForm from "./components/AddOnsForm";
import SummaryForm from "./components/SummaryForm";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState("stepOne");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOn, setSelectedAddOn] = useState(null);
  const [priceDisplay, setPriceDisplay] = useState("monthly");

  const handlePlanSelect = (planValue) => {
    setSelectedPlan(planValue);
    console.log(selectedPlan);
  };

  const handleAddOnSelect = (addOnValue) => {
    setSelectedAddOn(addOnValue);
    console.log(selectedAddOn);
  };

  const handleNextClick = () => {
    if (currentStep === "stepOne") setCurrentStep("stepTwo");
    if (currentStep === "stepTwo") setCurrentStep("stepThree");
    if (currentStep === "stepThree") setCurrentStep("stepFour");
  };

  const handleBackClick = () => {
    if (currentStep === "stepTwo") setCurrentStep("stepOne");
    if (currentStep === "stepThree") setCurrentStep("stepTwo");
    if (currentStep === "stepFour") setCurrentStep("stepThree");
  };

  return (
    <div className="background">
      <div className="mainContainer">
        <SidebarNav currentStep={currentStep} />

        {currentStep === "stepOne" ?

          <PersonalForm /> : null}
        {currentStep === "stepTwo" ? (
          <PlanForm handlePlanSelect={handlePlanSelect} />
        ) : null}

        {currentStep === "stepThree" ? (
          <AddOnsForm handleAddOnSelect={handleAddOnSelect} />
        ) : null}

        {currentStep === "stepFour" ? (
          <SummaryForm
            selectedPlan={selectedPlan}
            selectedAddOn={selectedAddOn}
            priceDisplay={priceDisplay}
            AddOnPrice={null}
          />
        ) : null}

        <div className="allBtn">
          <button onClick={handleNextClick} className="nextBtn">
            {currentStep === "stepFour" ? "Confirm" : "Next Step"}
          </button>
        </div>

        <div className="allBtn">
          <button onClick={handleBackClick} className="backBtn">
            {currentStep === "stepOne" ? "" : "Go Back"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
