import {minionImageData} from "./interfaces";
import React from "react";

export class Profile{

    //region parameters
    private _Localcount: number;
    private setLocalCount:React.Dispatch<React.SetStateAction<number>>
    private _TotalCount: number;
    private incNumber: number;
    private _autoClickNum: number | undefined;

    private _talents:string[]=["Cecilia","Laimu","Neuro","Shoomimi","Evil","Raora"];
    private _cometics:string[]=["Happy","Sad","Evil","Coomer","Excited","Thinking"];
    private _upgrades:[string, string, number,number][]=[
        ["Start stream","Long textLong textLong text",1,1],
        ["Set up a schedule","Long textLong textLong text",1,1],
        ["Make 'cute' noises","Long textLong textLong text",10,1],
        ["Get new emotes","Long textLong textLong text",10,1],
        ["Handcam stream","Long textLong textLong text",50,1],
        ["Upgrade PC","Long textLong textLong text",50,1],
        ["Do a collab","Long textLong textLong text",150,1],
        ["Get a 3D model","Long textLong textLong text",150,1],
        ["3D model stream","Long textLong textLong text",500,1],
        ["Do a Subathon","Long textLong textLong text",500,1],

    ];

    public images: minionImageData[];
    public setImages:React.Dispatch<React.SetStateAction<minionImageData[]>>;
//endregion


    constructor(images:minionImageData[],
                setImages:React.Dispatch<React.SetStateAction<minionImageData[]>>,
                setLocalCount:React.Dispatch<React.SetStateAction<number>>){
        this.setLocalCount = setLocalCount;
        this._Localcount = 0;
        this._TotalCount = 0;
        this.incNumber = 1;
        this.images=images;
        this.setImages=setImages;
        this.CalculateAutoClick()
    }

    CalculateAutoClick(){
        let ret = 0

        this._upgrades.forEach((upgrade,index:number) => {
            if( (index % 2) == 0)
                ret += upgrade[3]
        })

        this._autoClickNum = ret;
        console.log("AutoClickNum-"+this._autoClickNum + "\nClickNum-" + this.incNumber);
    }

    incLocalCount(incNum = this.incNumber){
        this._Localcount = this._Localcount + incNum;
        this.setLocalCount(this._Localcount);
        this._TotalCount = this._TotalCount + incNum;
    }
    decLocalCount(decNumber:number){
        this._Localcount = this._Localcount - decNumber;
        this.setLocalCount(this._Localcount);
    }

//region getter-setter


    get autoClickNum(): number {
        return <number>this._autoClickNum;
    }

    get talents(): string[] {
        return this._talents;
    }

    get cometics(): string[] {
        return this._cometics;
    }

    get upgrades(): [string, string, number,number][] {
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