import { useEffect, useState } from "react";
import "./Timer.css";

function Timer() {
    const words = ["Bonjour", "Maman", "Flow", "Utopique", "Mer"];

    const [word, setWord] = useState("Word");

    const [sec, setSec] = useState(45);

    useEffect(() => {
        let interval = setInterval(() => {
            setSec(_sec => {
                let percentage = _sec / 45;
                let progressBar = document.getElementById("progress");
                if (progressBar) {
                    progressBar.style.background = `conic-gradient(
                        #4d5df9 ${percentage * 360}deg,
                        #b44040 0deg
                    )`
                }
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
        <div className="timer" id="progress">
            <p className="bg-[#41410142] px-4 py-2 rounded-md absolute top-1/2">
                {word}               
            </p>
        </div>
    )
}

export default Timer;