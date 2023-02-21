import React, {useEffect} from 'react';
import './App.css';

function App() {
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const name = urlParams.get("name")
        let i = 0;
        const txt = name ? name : 'Kyriakos Milad'; /* The text */
        const speed = 70; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("name")!.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter()
    });

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="Name" id="name"></h1>
                <a
                    className="App-link"
                    href="https://www.github.com/KyriakosMilad"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/KyriakosMilad"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </header>
        </div>
    );
}

export default App;
