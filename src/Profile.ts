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
    *   Upgrade Name  -  upgrade cost  - click/autoclick increase - enables
    * */
    private _upgrades:[string, number,number, boolean][]=[
        ["Start stream\n",1,1,false],
        ["Set up a schedule\n",1,1,false],
        ["Make 'cute' noises\n",10,1,false],
        ["Get new emotes\n",10,1,false],
        ["Handcam stream\n",50,1,false],
        ["Upgrade PC\n",50,1,false],
        ["Do a collab\n",150,1,false],
        ["Get a 3D model\n",150,1,false],
        ["3D model stream\n",500,1,false],
        ["Do a Subathon\n",500,1,false],
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
            upgrade[3] = upgrade[1] <= this.Localcount;

            if( (index % 2) == 0)
                Click_ret += upgrade[2];
            else
                Auto_ret += upgrade[2];
        })

        this._autoClickNum = Math.ceil(Auto_ret);
        this._incNumber = Math.ceil(Click_ret);
        this._Localcount = Math.ceil(this._Localcount);
        this._TotalCount = Math.ceil(this._TotalCount);

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

    get upgrades(): [string, number,number,boolean][] {
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