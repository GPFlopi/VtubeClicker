import React, {useEffect} from "react";
import {ProfileProp} from "../interfaces";

export const AutoClick:React.FC<ProfileProp> = ({profile}) =>{
    useEffect(() => {
        const interval = setInterval(() => {
            profile.Calculate()
            profile.incLocalCount(profile.autoClickNum)
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // console.log(profile.autoClickNum);

    return <></>
}

export default AutoClick;