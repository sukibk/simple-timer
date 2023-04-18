import {useRef, useState} from 'react';


export default function App() {

    const [currentTime, setCurrentTime] = useState(null)
    const [startTime, setStartTime] = useState(null);
    let timerId = useRef();

    function handleStartTimer() {
        setStartTime(Date.now());
        setCurrentTime(Date.now());

        timerId.current = setInterval(() => {
            setCurrentTime(Date.now())
        }, 10)
    }

    function handleCancelTimer() {
        clearInterval(timerId.current)
    }

    // To be changed
    let secondsPassed = (currentTime - startTime) / 1000;

    return (
        <div className='timer'>
            <div className={'text'}>
                <h1>Timer: {secondsPassed}</h1>
            </div>
            <div className='actions'>
                <button onClick={handleStartTimer}>Start</button>
                <button onClick={handleCancelTimer}>Stop</button></div>
        </div>
    );
}