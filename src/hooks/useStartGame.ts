import { useState } from 'react';
import balloonImg from '../assets/imgs/juli_jatek_lufi.png';
import balloonGoImg from '../assets/imgs/juli_jatek_lufi_GO.png'; 
import { initialISI } from '../constants/constants';


const useStartGame = (playTrial: (isi:number) => void) => {
    const [balloonToShow, setBalloonToShow] = useState(balloonGoImg);
    const [gameOn, setGameOn] = useState(false);

    const handleStart = () => {
        if (!gameOn){
            setBalloonToShow(balloonImg);
            setGameOn(true);
            playTrial(initialISI);
        }
    };
    return {balloonToShow, gameOn, handleStart};
};

export default useStartGame;