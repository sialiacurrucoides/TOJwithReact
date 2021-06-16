import { createAudio } from './createAudio';

const audioCTX = createAudio();
const sampleFrequency = 44100;
const nrOfChannels = 2;
const toneLength = sampleFrequency * 0.01;


let tone: Float32Array;

fetch('mtojsounds/tone.wav').then(data => data.arrayBuffer())
.then(arrayBuffer => audioCTX.decodeAudioData(arrayBuffer))
.then(decodedAudio => { 
    tone = decodedAudio.getChannelData(0);
});


export const createSoundSample = (startEar: string, ISI: number) => {

    const isiSilence = Array(ISI*sampleFrequency/1000).fill(0);
    const sampleLength = toneLength * 2 + isiSilence.length;    
    const toneSilence = Array(toneLength).fill(0);
    const leadingChannel = [...Array.from(tone), ...isiSilence, ...toneSilence];
    const laggingChannel = [...toneSilence, ...isiSilence, ...Array.from(tone)];

    const buffer = audioCTX.createBuffer(
        nrOfChannels,
        sampleLength,
        sampleFrequency
    );
    
    if (startEar === 'left'){
        buffer.getChannelData(0).set(leadingChannel);
        buffer.getChannelData(1).set(laggingChannel);
    } else {
        buffer.getChannelData(0).set(laggingChannel);
        buffer.getChannelData(1).set(leadingChannel);
    }

    const playSound = audioCTX.createBufferSource();
    playSound.buffer = buffer;

    const gainNode = audioCTX.createGain();
    gainNode.gain.setValueAtTime(0.5, audioCTX.currentTime);

    playSound.connect(gainNode).connect(audioCTX.destination);

    playSound.start();
};