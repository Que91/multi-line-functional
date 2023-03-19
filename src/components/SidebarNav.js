
import React from 'react';


const SidebarNav = ({currentStep}) => {


    return (
        <>
            <div className="sidebarNavContainer">
                <div className="stepNumbers">
                    <div
                        
                        className={`stepOne ${currentStep === "stepOne" ? "active" : ""}`}
                    >
                        1
                    </div>

                    <div 
                        className={`stepTwo ${currentStep === "stepTwo" ? "active" : ""}`}
                    >
                        2
                    </div>

                    <div
                        className={`stepThree ${currentStep === "stepThree" ? "active" : ""}`}
                    >
                        3
                    </div>

                    <div
                        className={`stepFour ${currentStep === "stepFour" ? "active" : ""}`}
                    >
                        4
                    </div>
                </div>

                <div className="navbarSteps">
                    <h3 className="stepHead">Step 1</h3>
                    <h2 className="stepSubHead">Your Info</h2>

                    <h3 className="stepHead">Step 2</h3>
                    <h2 className="stepSubHead">Select Plan</h2>

                    <h3 className="stepHead">Step 3</h3>
                    <h2 className="stepSubHead">Add-Ons</h2>

                    <h3 className="stepHead">Step 4</h3>
                    <h2 className="stepSubHead">Summary</h2>
                </div>
            </div>
        </>
    );
};

export default SidebarNav;
