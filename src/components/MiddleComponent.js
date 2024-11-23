import React from "react";
import "../App.css";

const MiddleComponent = () => {
    return (
        <>
            <div className="middle-container">
                <div className="right-side">
                    <h1>
                        Intuitive Design <br />
                        Tailored for Teams
                    </h1>
                    <p>
                        Designed to make password management effortless, our tool empowers your team to collaborate without friction, securely.
                    </p>
                </div>
            </div>
            <div className="middle-container2">
                <div className="right-side">
                    <h1>Move Beyond Manual Tracking</h1>
                    <p>
                        Say goodbye to scattered notes and shared spreadsheets. Our dashboard streamlines access management so your team stays productive.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MiddleComponent;
