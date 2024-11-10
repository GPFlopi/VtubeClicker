import { minionImageData } from "./interfaces";
import React from "react";
export declare class Profile {
    private _Localcount;
    private setLocalCount;
    private _TotalCount;
    private _incNumber;
    private _autoClickNum;
    private _theme;
    private setTheme;
    private _talents;
    private _cometics;
    private _upgrades;
    images: minionImageData[];
    setImages: React.Dispatch<React.SetStateAction<minionImageData[]>>;
    constructor(images: minionImageData[], setImages: React.Dispatch<React.SetStateAction<minionImageData[]>>, setLocalCount: React.Dispatch<React.SetStateAction<number>>, theme: string | undefined, setTheme: React.Dispatch<React.SetStateAction<string>>);
    Calculate(): void;
    incLocalCount(incNum?: number): void;
    decLocalCount(decNumber: number): void;
    setCurrentTheme(newTheme: string): void;
    get theme(): string | undefined;
    get incNumber(): number;
    get autoClickNum(): number;
    get talents(): string[];
    get cometics(): string[];
    get upgrades(): [string, number, number, boolean, boolean][];
    get Localcount(): number;
    get TotalCount(): number;
}
export default Profile;