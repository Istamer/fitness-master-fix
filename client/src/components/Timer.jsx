import { useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function TimerPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [key, setKey] = useState(0);

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            setIsPlaying(false);
        }

        return (
            <div className="flex flex-col items-center">
                <div className="text-4xl font-bold">
                    {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}
                    {remainingTime % 60}
                </div>
                <div className="text-gray-500 font-medium">minutes</div>
            </div>
        );
    };

    const handleComplete = () => {
        setIsPlaying(false);
        window.scrollTo({
            top: window.pageYOffset + 620,
            behavior: "smooth"
        });
    };

    const handleStart = () => {
        setIsPlaying(true);
        setKey(prevKey => prevKey + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-[300px] w-[300px] bg-white fixed border border-gray-300 shadow-2xl rounded-lg">
            <CountdownCircleTimer
                key={key}
                isPlaying={isPlaying}
                duration={60}
                colors={[['#F44336']]}
                onComplete={handleComplete}
            >
                {renderTime}
            </CountdownCircleTimer>

            <div className="mt-6">
                <button
                    className={`px-4 py-2 rounded-lg ${
                        isPlaying ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                    }`}
                    onClick={isPlaying ? () => setIsPlaying(false) : handleStart}
                >
                    {isPlaying ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
}

export default TimerPage;


