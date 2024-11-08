import React from "react";
import {ItemListProps} from "../interfaces";
import * as Utils from "../utils";
import "../CSS/Dropdown.css"

export const ListDropDownComponent:React.FC<ItemListProps> = ({items,box_top,cont_top,profile}) => {
    return (
        <>
            <input className="checkbox" style={{ top: box_top }} type="checkbox" id="toggleCheckbox"/>
            <label className="dropLabel" htmlFor="toggleCheckbox"></label>

            <div className="dropdown-content" style={{ top: cont_top }}>
                {items.map((item:string, index:number) => (
                    <button key={index} className="dropItem" onClick={()=>Utils.setTheme(item,profile)}>{item}</button>
                ))}
            </div>
        </>
    );
};

export default ListDropDownComponent;