import {minionImageData} from "./interfaces";
import React from "react";

export class Profile{

    //region parameters
    private _Localcount: number;
    private setLocalCount:React.Dispatch<React.SetStateAction<number>>
    private _TotalCount: number;
    private _incNumber: number;
    private _autoClickNum: number | undefined;

    private _talents:string[]=["Cecilia","Laimu","Neuro","Shoomimi","Evil","Raora"];
    private _cometics:string[]=["Happy","Sad","Evil","Coomer","Excited","Thinking"];
    /*
    *   Upgrade Name  -  Upgrade text  -  upgrade cost  - click/autoclick increase - enables
    * */
    private _upgrades:[string, string, number,number, boolean][]=[
        ["Start stream","Long textLong textLong text - I -",1,1,false],
        ["Set up a schedule","Long textLong textLong text - A -",1,1,false],
        ["Make 'cute' noises","Long textLong textLong text - I -",10,5,false],
        ["Get new emotes","Long textLong textLong text - A -",10,1,false],
        ["Handcam stream","Long textLong textLong text - I -",50,1,false],
        ["Upgrade PC","Long textLong textLong text - A -",50,1,false],
        ["Do a collab","Long textLong textLong text - I -",150,1,false],
        ["Get a 3D model","Long textLong textLong text - A -",150,1,false],
        ["3D model stream","Long textLong textLong text - I -",500,1,false],
        ["Do a Subathon","Long textLong textLong text - A -",500,1,false],
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
        this._incNumber = 1;
        this.images=images;
        this.setImages=setImages;
        this.Calculate()
    }

    Calculate(){
        let Auto_ret = 0
        let Click_ret = 0

        this._upgrades.forEach((upgrade,index:number) => {
            upgrade[4] = upgrade[2] <= this.Localcount;

            if( (index % 2) == 0)
                Click_ret += upgrade[3];
            else
                Auto_ret += upgrade[3];
        })

        this._autoClickNum = Auto_ret;
        this._incNumber = Click_ret;
    }

    incLocalCount(incNum = this._incNumber){
        this._Localcount = this._Localcount + incNum;
        this.setLocalCount(this._Localcount);
        this._TotalCount = this._TotalCount + incNum;
    }
    decLocalCount(decNumber:number){
        this._Localcount = this._Localcount - decNumber;
        this.setLocalCount(this._Localcount);
    }

//region getter-setter


    get incNumber(): number {
        return this._incNumber;
    }

    get autoClickNum(): number {
        return <number>this._autoClickNum;
    }

    get talents(): string[] {
        return this._talents;
    }

    get cometics(): string[] {
        return this._cometics;
    }

    get upgrades(): [string, string, number,number,boolean][] {
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