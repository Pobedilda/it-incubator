import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);

    const clickInc = () => {
        setCounter(counter + 1)
    }

    const clickReset = () => {
        setCounter(0);
    }

    return (
        <div className="App">
            <div className={counter >= 5 ? "max" : ""}>
                Counter: {counter}
            </div>
            <div>
                <button disabled={counter >= 5} onClick={clickInc} >More</button>
                <button disabled={counter <= 0} onClick={clickReset}>Reset</button>
            </div>
        </div>
    );
}

export default App;
