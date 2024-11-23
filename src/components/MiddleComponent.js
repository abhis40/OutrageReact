import React from "react";
import "../App.css";

const MiddleComponent = () => {
    return (
        <>
            <div className="middle-container">
                <div className="left-side">
                    <img
                        src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fg2badges.6e3302c0.png&w=1920&q=75"
                        alt="TeamPassword Badges"
                        className="left-image"
                    />
                </div>

                <div className="right-side">
                    <h1>Easy to Use <br />
                        Easy to Love</h1>
                    <p>
                        In the office or on the go, TeamPassword makes storing and sharing
                        passwords safely a synch.
                    </p>
                </div>
            </div>
            <div className="middle-container2">
                <div className="left-side">
                    <img
                        src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteampassword-dashboard.9c88c800.png&w=640&q=75"
                        alt="TeamPassword Badges"
                        className="left-image"
                    />
                </div>

                <div className="right-side">
                    <h1>Ditch the spreadsheet</h1>
                    <p>
                        TeamPassword keeps all your logins safe and in-sync, so your team can get the access they need when they need it.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MiddleComponent;