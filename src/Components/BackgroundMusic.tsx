import { useEffect } from 'react';

const BackgroundMusic = () => {
    useEffect(() => {
        const audio = new Audio('src/assets/bgm.mp3'); // Path to your audio file in the public folder
        audio.loop = true; // Set to loop
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0; // Reset time if you stop
        };
    }, []);

    return null; // No visible element needed
};

export default BackgroundMusic;
