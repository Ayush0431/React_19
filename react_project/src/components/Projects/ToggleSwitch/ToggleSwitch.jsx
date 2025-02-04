import { useState } from "react";
import "./ToggleSwitch.css";

export const ToogleSwitch = ()=>{


    const[isOn , setisOn]= useState(false); 

    const handleToggleSwitch=()=>{
        setisOn(!isOn);
    }

    const  checkison = isOn ? 'on' : 'off';


    return <div className="toggle-switch"
    style={{backgroundColor : isOn ? "#4caf50" : "#f44336"}} onClick={handleToggleSwitch}>
        <div className={`switch ${checkison}`}>
            <span className="switch-state">{checkison}</span>
        </div>
    </div>
}