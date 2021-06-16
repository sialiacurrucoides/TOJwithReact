export const createAudio = () => {
    const audioCTX = new AudioContext();
    if (!audioCTX) alert("Web Audio API is not supported in this browser");

    return audioCTX;
};

