import React from "react";
import {ProfileProp} from "../interfaces";
import styled from "styled-components";

const enabledUpgrade= ():React.CSSProperties =>{
    return {
        backgroundColor: "white"
    }
}

const disabledUpgrade= ():React.CSSProperties =>{
    return {
        backgroundColor: "grey"
    }
}

export const UpgradeComponent: React.FC<ProfileProp> = ({profile}) => {

    return (
        <div>
            <div className="card">
                <div className="bg">
                    {profile.upgrades.map((item: [string, number,number,boolean], index: number) => (
                        <StyledWrapper key={index}>
                            <button key={index + 1} onClick={() => {
                                    if((profile.Localcount - item[1]) >= 0 && item[3]){
                                        profile.decLocalCount(item[1]);

                                        item[1] *= 1.2;
                                        item[2] *= 1.2;
                                    }
                                }
                            } style={item[3] ? enabledUpgrade() : disabledUpgrade()}>
                                <span key={index+2} className="text">{item[0]}</span>
                                <span key={index+3}>{(( (index % 2) == 0) ?
                                    "This will increase the viewers/click amount\n "
                                    : "This will increase the viewers/sec amount") }<br/>{item[1]}</span>
                            </button>
                        </StyledWrapper>
                    ))}
                </div>
                <div className="blob"></div>
            </div>
        </div>
    );
};

const StyledWrapper = styled.div`
    
    button {
      top: 10px;
      width: 280px;
        height: auto;
      position: relative;
      overflow: hidden;
      border: 1px solid #18181a;
      color: #18181a;
      display: inline-block;
      font-size: 17px;
      line-height: 15px;
      padding: 18px 18px 18px;
      text-decoration: none;
      cursor: crosshair;
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
    height: auto;
    width: 100%;
    line-height: normal;
}

button:after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg_shadow, white);
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
}`;


export default UpgradeComponent;

