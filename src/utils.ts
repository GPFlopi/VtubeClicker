import React from "react";
import * as Intf from "./interfaces.ts"

export function buttonClicked(num:number,setLocalCount:React.Dispatch<React.SetStateAction<number>>,
                              setTotalCount:React.Dispatch<React.SetStateAction<number>>){
    incLocalCount(num,setLocalCount)
    setTotalCount((TotalCount) => TotalCount + num )
}

export function incLocalCount(num: number,setLocalCount:React.Dispatch<React.SetStateAction<number>>){
    setLocalCount((LocalCount) => LocalCount + num );
}

export function decLocalCount(num:number,setLocalCount:React.Dispatch<React.SetStateAction<number>>){
    setLocalCount((LocalCount) => {
        if((LocalCount - num) >= 0)
            return LocalCount - num
        else
            return LocalCount
    });
}

export function spawnImage(setImages:React.Dispatch<React.SetStateAction<Intf.minionImageData[]>>) {

    const randomTop = Math.floor(Math.random() * window.innerHeight);
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    const randomHeight = Math.random() * (100 - 10) + 10
    const randomWidth = Math.random() * (100 - 10) + 10
    const newImage = {
        id: Date.now(),
        top: randomTop,
        left: randomLeft,
        width: randomWidth,
        height: randomHeight,
        opacity: 0,
        transition: "opacity 2s ease-in",
    };

    setImages(prevImages => [...prevImages, newImage]);

    setTimeout(() => {
        setImages(prevImages =>
            prevImages.map(image =>
                image.id === newImage.id ? { ...image, opacity: 1 } : image
            )
        );
    }, 50);

    setTimeout(() => {
        setImages(prevImages =>
            prevImages.map(image =>
                image.id === newImage.id ? { ...image, opacity: 0 } : image
            )
        );
    }, 2500);

    setTimeout(() => {
        setImages(prevImages => prevImages.filter(image => image.id !== newImage.id));
    }, 5000);

};