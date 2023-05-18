// import useState from "react-redux";
import React, { useEffect, useState } from 'react';
import "../Clock.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const getRotationStyle = (unit, totalUnits) => {
        const rotationPercentage = (unit / totalUnits) * 360;
        return {
            transform: `rotate(${rotationPercentage}deg)`,
        };
    };

    const localTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className="clock">
            <div className="hand hour" style={getRotationStyle(time.getHours() + time.getMinutes() / 60, 12)}></div>
            <div className="hand minute" style={getRotationStyle(time.getMinutes() + time.getSeconds() / 60, 60)}></div>
            <div className="hand second" style={getRotationStyle(time.getSeconds(), 60)}></div>
            <div className="digital-clock">{localTime}</div>
        </div>
    );
};

export default Clock;









// import './Clock.css';
//
// const Clock = () => {
//     let time = new Date().toLocaleTimeString();
//     const [currentTime, setCurrentTime] = useState(time);
//
//
//     const updateTime = () => {
//         let time = new Date().toLocaleTimeString();
//         setCurrentTime(time);
//     }
//
//     setInterval(updateTime, 1000);
//
//
//     return(
//         <div className="clock">
//             <h1>{currentTime}</h1>
//         </div>
//     )
// }
//
// export default Clock;