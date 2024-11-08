import React from "react";
import {ProfileProp} from "../interfaces";
import * as Utils from "../utils";
import AutoClick from "./AutoClick";

export const MainButtonComponent:React.FC<ProfileProp> = ({profile}) =>{
    const mainClick= ()=>{
        Utils.ButtonClicked(profile)
    }

    return (
        <div className={"gameName"}>
            <h1 style={{fontFamily:"cursive"}}>VtubeClicker</h1>
            <a target="_blank">
                <img id="mainButton"
                     src={"src/assets/Talents/"+profile.theme+"/buttons/button_1.png"}
                     className="logo react"
                     alt="React logo"
                     onClick={mainClick}
                />
                <AutoClick profile={profile}/>
            </a>

        </div>
    )
}

export default MainButtonComponent;