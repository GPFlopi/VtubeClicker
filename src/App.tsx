import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface ImageData {
    id: number;
    top: number;
    left: number;
    width: number;
    height: number;
    opacity: number;
    transition: string;
}

function App() {
    const [LocalCount, incLocalCount] = useState(0)
    const [TotalCount, incTotalCount] = useState(0)
    const [images, setImages] = useState<ImageData[]>([]);


    function buttonClicked(){
        incLocalCount((LocalCount) => LocalCount + 1 );
        incTotalCount((TotalCount) => TotalCount + 1 )
    }

    const spawnImage = () => {

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

  return (
    <>
        <div>
            <h1>VtubeClicker</h1>
            <a target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo"
                     onClick={() =>{
                         buttonClicked()
                         spawnImage()
                     }
                    }
                />
                {images.map(image => (
                    <img
                        key={image.id}
                        src={reactLogo}
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
                ))}
            </a>
        </div>
        <div className="card">
            {LocalCount}
        </div>
        <div className={"total-count"}>
                Total Clicks: {TotalCount}
        </div>
    </>
  )
}




export default App
