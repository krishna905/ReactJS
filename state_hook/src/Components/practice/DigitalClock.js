import React, { useState, useEffect } from "react";

const DigitalClock = () => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const [ctime, setTime] = React.useState(time);
    const [cdate, setDate] = React.useState(date);
    React.useEffect(() => {
        let time = new Date().toLocaleTimeString();
        let date = new Date().toLocaleDateString();
        const timer = window.setInterval(() => {
            setDate(date);
            setTime(time); // <-- Change this line! 
        }, 1000);
        return () => {
            window.clearInterval(timer);
        };
    }, [ctime]);

    return (
        <div id="main">
            <div className="date-time">
                {cdate}, {ctime}
            </div>
        </div>
    );
};

export default DigitalClock;