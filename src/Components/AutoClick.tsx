import React, {useEffect} from "react";
import {ProfileProp} from "../interfaces";

export const AutoClick:React.FC<ProfileProp> = ({profile}) =>{
    useEffect(() => {
        const interval = setInterval(() => {
            profile.CalculateAutoClick()
            profile.incLocalCount(profile.autoClickNum)
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <></>
}

export default AutoClick;