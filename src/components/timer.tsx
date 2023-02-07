import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
    const words = ["Bonjour", "Maman", "Flow", "Utopique", "Mer"];

    const [word, setWord] = useState("Word");

    const [sec, setSec] = useState(45);

    useEffect(() => {
        let interval = setInterval(() => {
            setSec(_sec => {
                if (_sec === 0) {
                    let index = Math.floor(Math.random() * words.length);
                    setWord(words[index]);
                    return 45;
                }
                return _sec -1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="timer">
            <p className="bg-[#41410142] px-4 py-2 rounded-md absolute top-1/2">
                {word}               
            </p>
        </div>
    )
}

export default Timer;