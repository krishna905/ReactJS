import React, { useEffect, useState } from "react";

function CurTime() {
    const [time, setTime] = useState();

    const display = () => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
    };

    return (
        <>
            <button onClick={display}>display</button>
            <h3>{time}</h3>
        </>
    );
}

export default CurTime;