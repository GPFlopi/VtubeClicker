import {minionImageData} from "./interfaces";
import React from "react";

export class Profile{

    //region parameters
    private _Localcount: number;
    private _TotalCount: number;
    private incNumber: number;

    private _talents:string[]=["Cecilia","Laimu","Neuro","Shoomimi","Evil","Raora"];
    private _cometics:string[]=["Happy","Sad","Evil","Coomer","Excited","Thinking"];
    private _upgrades:[string, string, number][]=[
        ["U1","Long textLong textLong text",1],
        ["U2","Long textLong textLong text",2],
        ["U3","Long textLong textLong text",3],
        ["U4","Long textLong textLong text",4]
    ];

    public images: minionImageData[];
    public setImages:React.Dispatch<React.SetStateAction<minionImageData[]>>;
//endregion


    constructor(images:minionImageData[],setImages:React.Dispatch<React.SetStateAction<minionImageData[]>>){
        this._Localcount = 0;
        this._TotalCount = 0;
        this.incNumber = 1;
        this.images=images;
        this.setImages=setImages;
    }

    incLocalCount(){
        this._Localcount = this._Localcount + this.incNumber;
        this._TotalCount = this._TotalCount + this.incNumber;
    }
    decLocalCount(decNumber:number){
        if((this._Localcount - decNumber) >= 0)
            this._Localcount = this._Localcount - decNumber;
    }

//region getter-setter

    get talents(): string[] {
        return this._talents;
    }

    get cometics(): string[] {
        return this._cometics;
    }

    get upgrades(): [string, string, number][] {
        return this._upgrades;
    }


    get Localcount(): number {
        return this._Localcount;
    }

    get TotalCount(): number {
        return this._TotalCount;
    }

    //endregion


}

export default Profile;