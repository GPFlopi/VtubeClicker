import { ReactNode, useState} from "react";
import "../Profile.ts";
import Profile from "../Profile";
import myContext from "./myContext";
import {minionImageData} from "../interfaces";



export const ContextProvider = ({children}:{children: ReactNode}) => {
    const [images, setImages] = useState<minionImageData[]>([]);
    const [,setLocalCount] = useState<number>(0);
    const [CurrentTheme,setCurrentTheme] = useState('PirateSoftware');
    const [profile,setProfile] = useState(new Profile(images,setImages,setLocalCount,CurrentTheme,setCurrentTheme));
    profile.images = images;


    const ret ={
        profile,setProfile,
        images, setImages,
        setCurrentTheme,
    }

    return (
            <myContext.Provider value={ret}>
                {children}
            </myContext.Provider>
    );
};


export default ContextProvider