import {minionImageData} from "./interfaces";
import React from "react";

export class Profile{

    //region parameters
    private _Localcount: number;
    private setLocalCount:React.Dispatch<React.SetStateAction<number>>
    private _TotalCount: number;
    private _incNumber: number;
    private _autoClickNum: number | undefined;
    private _theme:string | undefined;
    private setTheme: React.Dispatch<React.SetStateAction<string>>;

    private _talents:string[]=["MaidMint","Limealicious","Shoomimi","CeciliaImmergreen", "PirateSoftware"];
    private _cometics:string[]=["Happy","Sad","Evil","Coomer","Excited","Thinking"];
    /*
    *   Upgrade Name  -  upgrade cost  - click/autoclick increase - enables - unlocked
    * */
    private _upgrades:[string, number,number, boolean,boolean][]=[
        ["Start stream\n",1,1,false,true],
        ["Set up a schedule\n",1,1,false,true],
        ["Make 'cute' noises\n",100,10,false,false],
        ["Get new emotes\n",100,10,false,false],
        ["Handcam stream\n",500,20,false,false],
        ["Upgrade PC\n",500,20,false,false],
        ["Do a collab\n",1500,50,false,false],
        ["Get a 3D model\n",1500,50,false,false],
        ["3D model stream\n",5000,100,false,false],
        ["Do a Subathon\n",5000,100,false,false],
    ];

    public images: minionImageData[];
    public setImages:React.Dispatch<React.SetStateAction<minionImageData[]>>;
//endregion


    constructor(images:minionImageData[],
                setImages:React.Dispatch<React.SetStateAction<minionImageData[]>>,
                setLocalCount:React.Dispatch<React.SetStateAction<number>>,
                theme:string | undefined,
                setTheme:React.Dispatch<React.SetStateAction<string>>){
        this.setLocalCount = setLocalCount;
        this._Localcount = 1;
        this._TotalCount = 1;
        this._incNumber = 1;
        this.images=images;
        this._theme = theme;
        this.setTheme = setTheme
        this.setImages=setImages;
        this.Calculate()
    }

    Calculate(){
        let Auto_ret = 0
        let Click_ret = 0

        this._upgrades.forEach((upgrade,index:number) => {
            upgrade[3] = upgrade[1] <= this.Localcount;

            if(upgrade[4]) {
                if ((index % 2) == 0)
                    Click_ret += upgrade[2];
                else
                    Auto_ret += upgrade[2];
            }
        })

        this._autoClickNum = Math.ceil(Auto_ret);
        this._incNumber = Math.ceil(Click_ret);
        this._Localcount = Math.ceil(this._Localcount);
        this._TotalCount = Math.ceil(this._TotalCount);

        // console.log(this.Localcount)

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

    setCurrentTheme(newTheme:string){
        this._theme = newTheme;
        this.setTheme(this._theme);
    }

//region getter-setter


    get theme(): string | undefined {
        return this._theme;
    }

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

    get upgrades(): [string, number,number,boolean,boolean][] {
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