import React from "react";
import {ProfileProp} from "../interfaces";

export const MinionComponent: React.FC<ProfileProp> = ({profile}) => {
    return (
        <>
            {profile.images.map(image =>
                <img
                    key={image.id}
                    src={"src/assets/Talents/"+profile.theme+"/minions/minion_1.png"}
                    alt="Random"
                    className={"fade_in"}
                    style={{
                        top: image.top,
                        left: image.left,
                        width: image.width,
                        height: image.height,
                        opacity: image.opacity,
                        position: "absolute",
                    }}
                />
            )}
        </>
    )
}

export default MinionComponent;