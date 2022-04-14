import { useEffect, useState } from "react";

function useTimer() {
    const [number, setNumber] = useState(1);
    const [timer, setTimer] = useState(1);
    const [isMultiple, setMultiple] = useState(false);

    const timer_interval = 1000;
    const number_timeout = 10000;
    const message_timeout = 4000;
    const min_random = 1;
    const max_random = 100;

    const increaseTimerInterval = () => setTimer(timer => timer + 1);

    const verifyMultiple = (randomNumber) => {
        if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
            setMultiple(true);
            setTimeout(() => setMultiple(false), message_timeout);
        }
    };
    
    const handleRandomNumber = () => {
        const randomNumber = Math.round(
            Math.floor(Math.random() * max_random) + min_random
        );
        verifyMultiple(randomNumber);
        setNumber(randomNumber);
        setTimeout(0);
    }

    useEffect(()=> {
        const interval = setInterval(handleRandomNumber, number_timeout);
        const setTimerInterval = setInterval(increaseTimerInterval, timer_interval);
        return () => {
            clearInterval(interval);
            clearInterval(setTimerInterval);
        }
    }, []);

    return { number, isMultiple, timer };
}

export default useTimer;
