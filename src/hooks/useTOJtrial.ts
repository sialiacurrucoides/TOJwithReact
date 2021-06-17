import { useState, useEffect } from "react";
import { useAppDispatch } from "./storeManipulation";
import { generalStateActions } from "../store";
import { createSoundSample } from '../utils/createSoundSample';

const useTOJtrial = () => {
    const [correctAnswer, setCorrectAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const dispatch = useAppDispatch();
    
    const playTrial = (isi:number) => {
        if (Math.random() > 0.5){
            setCorrectAnswer('ArrowRight');
            createSoundSample('right', isi);
        } else {
            setCorrectAnswer('ArrowLeft');
            createSoundSample('left', isi);
        }
        
    };
    useEffect(() => {
        const handleResponse = (event: KeyboardEvent) => {
            setIsCorrect(event.code === correctAnswer);
            dispatch(generalStateActions.setActiveArrow(event.code));
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
                dispatch(generalStateActions.setActiveArrow('none'));
            }, 500);
        };
        document.addEventListener('keydown', handleResponse, false);
        return () => {
            document.removeEventListener('keydown', handleResponse, false);
        }
    },[correctAnswer, dispatch]);

    return {isCorrect, showFeedback, playTrial};
}

export default useTOJtrial;