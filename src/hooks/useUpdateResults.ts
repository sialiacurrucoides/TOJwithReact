import { useCallback, useRef } from 'react';
import { useAppDispatch } from '../hooks/storeManipulation';
import { generalStateActions } from '../store';
import { referenceThreshold } from '../constants/constants';

const useUpdateResults = () => {
    const dispatch = useAppDispatch();
    let trialNumber = useRef<number>(0);

    const updateResults = useCallback(
        (calculatedThreshold: number) => {
            dispatch(generalStateActions.setLongestRun(trialNumber.current));
            dispatch(generalStateActions.setSmallestThreshold(calculatedThreshold));
            if (calculatedThreshold < referenceThreshold) dispatch(generalStateActions.setBetterTimes());
        },
        [trialNumber, dispatch]
    );

    return { updateResults };
};

export default useUpdateResults;

