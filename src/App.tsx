import { useState} from 'react';
import reactLogo from './assets/react.svg';
import soundEffect from './assets/short_chicken_noise.mp3';
import './CSS/styles.css'
import * as comp from './Components.tsx'
import * as Utils from './utils.ts'
import * as Intf from './interfaces.ts'



function App() {
    const [LocalCount, setLocalCount] = useState(0)
    const [TotalCount, setTotalCount] = useState(0)
    const [images, setImages] = useState<Intf.minionImageData[]>([]);

    const playSound = () => {
        const audio = new Audio(soundEffect); // Provide the path to your sound file here
        audio.play().catch(error => console.error('Error playing audio:', error));
    };

    const talents:string[]=["Cecilia","Laimu","Neuro","Shoomimi","Evil","Raora"];
    const cometics:string[]=["Happy","Sad","Evil","Coomer","Excited","Thinking"];
    const upgrades:[string, string, number][]=[
        ["U1","Long textLong textLong text",1],
        ["U2","Long textLong textLong text",2],
        ["U3","Long textLong textLong text",3],
        ["U4","Long textLong textLong text",400]
    ];




  return (
      <>
          <comp.dropdown items={talents} box_top={'3%'} cont_top={'7%'}/>
          <comp.dropdown items={cometics} box_top={'46%'} cont_top={'50%'}/>

          <div>
              <h1>VtubeClicker</h1>
              <a target="_blank">
                  <img id="mainButton" src={reactLogo} className="logo react" alt="React logo"
                       onClick={() => {
                           Utils.buttonClicked(100,setLocalCount, setTotalCount)
                           Utils.spawnImage(setImages)
                           playSound()
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
          <div>
              <div className="card">
                  <div className="bg">
                      <comp.Ubutton setLocalCount={setLocalCount} upgrades={upgrades}/>

                  </div>
                  <div className="blob"></div>
              </div>
          </div>
          <div>
              {LocalCount}
          </div>
          <div className={"total-count"}>
              Total Clicks: {TotalCount}
          </div>
      </>
  )
}


export default App
