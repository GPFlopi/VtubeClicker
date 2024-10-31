import reactLogo from './assets/react.svg';
import soundEffect from './assets/short_chicken_noise.mp3';
import './CSS/styles.css'
import * as comp from './Components.tsx'
import * as Utils from './utils.ts'
// import * as Intf from './interfaces.ts'
import ContextProvider from "./Contexts/Context";
import {useProfileContext} from "./Contexts/useProfileContext";



function App() {


  return (
      <ContextProvider>
         <MainComponent />
      </ContextProvider>
  )
}


export default App


/*TODO
* - Figure out why the decrease is delayed
* - optimeze the project even more, for example image component etc
* */

const MainComponent = () => {
    const {profile, setCurrentTheme} = useProfileContext();


    const playSound = () => {
        const audio = new Audio(soundEffect); // Provide the path to your sound file here
        audio.play().catch(error => console.error('Error playing audio:', error));
    };

    const mainClick= ()=>{
        Utils.ButtonClicked(profile)
         playSound()
    }

    return (
        <>
            <comp.dropdown items={profile.talents} box_top={'3%'} cont_top={'7%'} theme={setCurrentTheme}/>
            <comp.dropdown items={profile.cometics} box_top={'46%'} cont_top={'50%'} theme={setCurrentTheme}/>

            <div>
                <h1>VtubeClicker</h1>
                    <a target="_blank">
                         <img id="mainButton" src={reactLogo} className="logo react" alt="React logo" onClick={mainClick}/>

                        {profile.images.map(image =>
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
                        )}
                    </a>
            </div>
            <div>
                <div className="card">
                    <div className="bg">
                        <comp.Ubutton profile={profile}/>
                    </div>
                    <div className="blob"></div>
                </div>
            </div>
            <div>
                {profile.Localcount}
            </div>
            <div className={"total-count"}>
                Total Clicks: {profile.TotalCount}
            </div>
        </>
    );
};





