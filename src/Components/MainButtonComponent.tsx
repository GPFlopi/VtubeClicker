import React from "react";
import {ProfileProp} from "../interfaces";
import * as Utils from "../utils";
import reactLogo from "../assets/react.svg";

export const MainButtonComponent:React.FC<ProfileProp> = ({profile}) =>{
    const mainClick= ()=>{
        Utils.ButtonClicked(profile)
    }

    return (
        <div>
            <h1>VtubeClicker</h1>
            <a target="_blank">
                <img id="mainButton" src={reactLogo} className="logo react" alt="React logo" onClick={mainClick}/>
            </a>
        </div>
    )
}

export default MainButtonComponent;