import React from "react";

const SummaryForm = (props) => {
  return (
    <>
      <div className="finishingUpContainer">
        <h1 className="header">Finishing up</h1>
        <h2 className="subHeader">
          Double-check everything looks OK before confirming
        </h2>
        <div className="summaryContainer">
          <p>
            {props.selectedPlan ? (
              props.priceDisplay === "monthly"
                ? `${props.selectedPlan.monthlyPrice}/mo`
                : `${props.selectedPlan.yearlyPrice}/yr`
            ) : null}
            {props.selectedAddOn ? (
              props.AddOnPrice === "monthly"
                ? `${props.selectedPlan.monthlyPrice}/mo`
                : `${props.selectedPlan.yearlyPrice}/yr`
            ) : null}
          </p>
        </div>
        <div className="selectionTotals">Total{}</div>
        <p className="summaryTotal">${props.selectedPlan.monthlyPrice}/mo</p>
      </div>
    </>
  );
};

export default SummaryForm;
