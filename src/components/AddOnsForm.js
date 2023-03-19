import React, { useState } from "react";

const AddOns = (props) => {
  const [addOnPrice, setAddOnPrice] = useState("monthly");
  
  const [addOn1, setAddOn1] = useState({
    title: "Online Service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
    selected: false,
  });
  const [addOn2, setAddOn2] = useState({
    title: "Larger Storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  });
  const [addOn3, setAddOn3] = useState({
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
    selected: false,
  });

  const handleAddOnSelect = (selectedAddOn) => {
    console.log(
      `${selectedAddOn.title} ${selectedAddOn.description} ${
        addOnPrice === "monthly"
          ? selectedAddOn.monthlyPrice
          : selectedAddOn.yearlyPrice
      }`
    );
    props.handleAddOnSelect(selectedAddOn);
  };

  return (
    <>
      <div className="addOnsContainer">
        <h1 className="header">Pick add-ons</h1>
        <h2 className="subHeader">
          Add-ons help enhance your gaming experience.
        </h2>
        <div className="addOnOptions">
          <div className="onlineService">
            <input
              className="oServiceCheck"
              type="checkbox"
              onClick={() => handleAddOnSelect(addOn1)}
            ></input>
            <div id="AddOnDescription">
              <p>{addOn1.title}</p>
              <p>{addOn1.description}</p>
              {addOnPrice === "monthly" ? (
                <div className="oServicePrice">${addOn1.monthlyPrice}/mo</div>
              ) : (
                <div className="oServicePrice">{addOn1.yearlyPrice}/yr</div>
              )}
            </div>
          </div>
          <div className="largerStorage">
            <input
              className="lStorageCheck"
              type="checkbox"
              onClick={() => handleAddOnSelect(addOn2)}
            ></input>
            <div id="AddOnDescription">
              <p>{addOn2.title}</p>
              <p>{addOn2.description}</p>
              {addOnPrice === "monthly" ? (
                <div className="oServicePrice">${addOn2.monthlyPrice}/mo</div>
              ) : (
                <div className="oServicePrice">{addOn2.yearlyPrice}/yr</div>
              )}
            </div>
          </div>
          <div className="customizableProfile">
            <input
              className="cProfileCheck"
              type="checkbox"
              onClick={() => handleAddOnSelect(addOn3)}
            ></input>
            <div id="AddOnDescription">
              <p>{addOn3.title}</p>
              <p>{addOn3.description}</p>
              {addOnPrice === "monthly" ? (
                <div className="oServicePrice">${addOn3.monthlyPrice}/mo</div>
              ) : (
                <div className="oServicePrice">{addOn3.yearlyPrice}/yr</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOns;
