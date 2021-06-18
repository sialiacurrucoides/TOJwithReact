import React, { useState } from "react";
import { useAppDispatch } from "./storeManipulation";
import { generalStateActions } from "../store";
import useTOJtrialCommon from "./useTOJtrialCommon";

const useTOJtrialMobile = () => {
    const {correctAnswer, playTrial} = useTOJtrialCommon();
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const dispatch = useAppDispatch();

    const handleClick = (event: React.MouseEvent) => {
        const clickedElement = (event.target as HTMLDivElement).dataset['id'];
        setIsCorrect(clickedElement === correctAnswer);
        dispatch(generalStateActions.setActiveArrow(clickedElement));
        setShowFeedback(true);
        setTimeout(() => {
            setShowFeedback(false);
            dispatch(generalStateActions.setActiveArrow('none'));
        }, 500);
    };

    return {isCorrect, showFeedback, playTrial, handleClick};
}

export default useTOJtrialMobile;