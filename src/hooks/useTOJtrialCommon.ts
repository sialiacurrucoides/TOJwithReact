import { useState } from "react";
import { createSoundSample } from '../utils/createSoundSample';

const useTOJtrialCommon = () => {
    const [correctAnswer, setCorrectAnswer] = useState<string>("");
    
    const playTrial = (isi:number) => {
        if (Math.random() > 0.5){
            setCorrectAnswer('ArrowRight');
            createSoundSample('right', isi);
        } else {
            setCorrectAnswer('ArrowLeft');
            createSoundSample('left', isi);
        } 
    };

    return {correctAnswer, playTrial};
};

export default useTOJtrialCommon;