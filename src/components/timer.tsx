import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
    const words = ["Bonjour", "Maman", "Flow", "Utopique", "Mer"];

    const [word, setWord] = useState("Word");

    const [sec, setSec] = useState(1);

    useEffect(() => {
        let interval = setInterval(() => {
            setSec(_sec => _sec + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="timer">
            <p className="bg-[#41410142] px-4 py-2 rounded-md">
                {word}               
            </p>
            <p>
                {sec}
            </p>
        </div>
    )
}

export default Timer;