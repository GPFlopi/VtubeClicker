import {Profile} from "./Profile";
import React from "react";

export interface minionImageData {
    id: number;
    top: number;
    left: number;
    width: number;
    height: number;
    opacity: number;
    transition: string;
}


export interface Context_props {
    profile: Profile
    setProfile: React.Dispatch<React.SetStateAction<Profile>>
    images: minionImageData[];
    setImages: React.Dispatch<React.SetStateAction<minionImageData[]>>;
    setCurrentTheme: React.Dispatch<React.SetStateAction<string>>
}

export interface Theme {
    colors: {
        bg_shadow: string;
    };
}

export interface Themes {
    [key: string]: Theme;
}

export interface ProfileProp {
    profile: Profile;
}

export interface ItemListProps {
    items: string[];
    box_top:string;
    cont_top:string;
    theme:React.Dispatch<React.SetStateAction<string>>
}

// export interface upgradePreps{
//     upgrade:[string, string, number,number][]
// }