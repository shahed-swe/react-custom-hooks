import { useState } from "react";
// importing custom hook
import useStateWithHistory from "..";


const StateWithHistoryComponent = () => {
    // getting hook functions and attrs
    const [count, setCount, {history, pointer, back, forward, go}] = useStateWithHistory(1)
    const [name, setName] = useState('Ashik')

    return (
        <div>
            <div>{count}</div>
            <div>{history.join(", ")}</div>
            <div>Pointer - {pointer}</div>
            <div>{name}</div>

            {/* buttons for interfareing */}
            <button onClick={() => setCount(currentCount => currentCount * 2)}>
                Double
            </button>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                Increment
            </button>
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={() => go(2)}>Go To Index 2</button>
            <button onClick={() => setName("Shahed")}>Change State Name to check state</button>

        </div>
    )
}


export default StateWithHistoryComponent