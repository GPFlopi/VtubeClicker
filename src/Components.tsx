import React from "react";
import styled from "styled-components";
import * as Utils from './utils.ts';
import './CSS/Dropdown.css'
import {ButtonProps, ItemListProps} from "./interfaces";




export const dropdown:React.FC<ItemListProps> = ({items,box_top,cont_top,theme}) => {
    return (
        <>
            <input className="checkbox" style={{ top: box_top }} type="checkbox" id="toggleCheckbox"/>
            <label className="dropLabel" htmlFor="toggleCheckbox"></label>

            <div className="dropdown-content" style={{ top: cont_top }}>
                {items.map((item:string, index:number) => (
                    <button key={index} className="dropItem" onClick={()=>Utils.setTheme(item,theme)}>{item}</button>
                ))}
            </div>
        </>
    );
};

export const Ubutton: React.FC<ButtonProps> = ({profile}) => {
    return (
        <>
            {profile.upgrades.map((item:[string, string, number], index:number) => (
                <>
                    <StyledWrapper>
                        <button key={index} onClick={() => profile.decLocalCount(item[2])}>
                            <span className="text">{item[0]}</span>
                            <span key={index}>{item[1]}</span>
                        </button>
                    </StyledWrapper>
                </>
            ))}
        </>
    );
};

const StyledWrapper = styled.div`
    
    button {
      top: 10px;
      width: 180px;
      position: relative;
      overflow: hidden;
      border: 1px solid #18181a;
      color: #18181a;
      display: inline-block;
      font-size: 15px;
      line-height: 15px;
      padding: 18px 18px 18px;
      text-decoration: none;
      cursor: pointer;
      background: #fff;
      font-weight: 800;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
}

button span:first-child {
  position: relative;
  transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 10;
}

button span:last-child {
    display: block;
    position: absolute;
    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
    z-index: 100;
    opacity: 0;
    top: 30%;
    left: 50%;
    bottom: 30%;
    transform: translateY(225%) translateX(-50%);
    height: 14px;
    line-height: 13px;
}

button:after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #91C9FF;
  transform-origin: bottom center;
  transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
  transform: skewY(9.3deg) scaleY(0);
  z-index: 50;
}

button:hover:after {
    transform-origin: bottom center;
  transform: skewY(9.3deg) scaleY(2);
}

button:hover span:last-child {
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
    font-size: 75%;
    text-align: center;
}
`;


