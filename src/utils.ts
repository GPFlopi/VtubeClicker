import * as Intf from "./interfaces.ts"
import themesData from "./themes.json" assert {type: 'json'};
import Profile from "./Profile";


const themes: Intf.Themes = themesData

export function setTheme(themeName:string,profile:Profile){
    const theme = themes[themeName]; // No more TypeScript error here
    if (theme && theme.colors) {
        Object.keys(theme.colors).forEach((key) => {
            document.documentElement.style.setProperty(`--${key}`, theme.colors[key as keyof typeof theme.colors]);
        });
        profile.setCurrentTheme(themeName);
    }
     // console.log("Theme set:" + profile.theme)
};

export function ButtonClicked(profile:Profile){
    profile.incLocalCount()
    SpawnImage(profile)
    const temp =  "src/assets/Talents/"+profile.theme+"/click.mp3"
    console.log(temp)
    playSound(temp)
}

const playSound = (song: string | undefined) => {
    const audio = new Audio(song);
    audio.play().catch(error => console.error('Error playing audio:', error));
};

export function SpawnImage(profile:Profile) {

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

    profile.setImages(prevImages => [...prevImages, newImage]);

    setTimeout(() => {
        profile.setImages(prevImages =>
            prevImages.map(image =>
                image.id === newImage.id ? { ...image, opacity: 1 } : image
            )
        );
    }, 50);

    setTimeout(() => {
        profile.setImages(prevImages =>
            prevImages.map(image =>
                image.id === newImage.id ? { ...image, opacity: 0 } : image
            )
        );
    }, 2500);

    setTimeout(() => {
        profile.setImages(prevImages => prevImages.filter(image => image.id !== newImage.id));
    }, 5000);

};