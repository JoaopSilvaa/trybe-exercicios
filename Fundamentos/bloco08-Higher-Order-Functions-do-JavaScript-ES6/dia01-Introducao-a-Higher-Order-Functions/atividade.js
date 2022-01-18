const wakeUp = () => 'Acordando!!';

const breakFast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(sleep);
doingThings(wakeUp);
doingThings(breakFast);
