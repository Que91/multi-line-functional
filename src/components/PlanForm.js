import React, { useState } from "react";

const PlanForm = ({ handlePlanSelect }) => {
    const [priceDisplay, setPriceDisplay] = useState("monthly");

    const [options, setOptions] = useState({
        option1: {
            title: "Arcade",
            monthlyPrice: 9,
            yearlyPrice: 90,
            selected: false,
        },

        option2: {
            title: "Advanced",
            monthlyPrice: 12,
            yearlyPrice: 120,
            selected: false,
        },

        option3: {
            title: "Pro",
            monthlyPrice: 15,
            yearlyPrice: 150,
            selected: false,
        },
    });

    const handleToggle = () => {
        setPriceDisplay((prevState) => (prevState === "monthly" ? "yearly" : "monthly"));
    };

    const handleOptionSelect = (option) => {
        const newOptions = { ...options };

        Object.keys(newOptions).forEach((key) => {
            newOptions[key].selected = false;
        });

        newOptions[option].selected = true;

        setOptions(newOptions);

        handlePlanSelect(options[option]);
    };

    return (
        <>
            <form className="planForm">
                <h1 className="header">Select your plan</h1>
                <h2 className="subHeader">
                    You have the option of monthly or yearly billing.
                </h2>

                <div className="monthlyOptions">
                    <div
                        className={`arcade ${options.option1.selected ? "active" : ""}`}
                        onClick={() => handleOptionSelect("option1")}
                    >
                        <h3>{options.option1.title}</h3>
                        {priceDisplay === "monthly" ? (
                            <div>${options.option1.monthlyPrice}/mo</div>
                        ) : (
                            <div>${options.option1.yearlyPrice}/yr</div>
                        )}
                    </div>

                    <div
                        className={`advanced ${options.option2.selected ? "active" : ""}`}
                        onClick={() => handleOptionSelect("option2")}
                    >
                        <h3>{options.option2.title}</h3>
                        {priceDisplay === "monthly" ? (
                            <div>${options.option2.monthlyPrice}/mo</div>
                        ) : (
                            <div>${options.option2.yearlyPrice}/yr</div>
                        )}
                    </div>

                    <div
                        className={`pro ${options.option3.selected ? "active" : ""}`}
                        onClick={() => handleOptionSelect("option3")}
                    >
                        <h3>{options.option3.title}</h3>
                        {priceDisplay === "monthly" ? (
                            <div>${options.option3.monthlyPrice}/mo</div>
                        ) : (
                            <div>${options.option3.yearlyPrice}/yr</div>
                        )}
                    </div>
                </div>

                <div className="toggle">
                    <p className="monthly">Monthly</p>
                    <input
                        className="togBtn"
                        type="checkbox"
                        checked={priceDisplay === "yearly"}
                        onChange={handleToggle}
                    />
                    <p className="yearly">Yearly</p>
                </div>
            </form>
        </>
    );
};

export default PlanForm;
