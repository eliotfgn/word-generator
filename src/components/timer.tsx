import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
    const words = ["Bonjour", "Maman", "Flow", "Utopique", "Mer"];

    const [word, setWord] = useState("Word");

    const [sec, setSec] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setSec(_sec => _sec + 1);
            console.log("we are at: "+sec);
        }, 1000);
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