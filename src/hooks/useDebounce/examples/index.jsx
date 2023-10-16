import { useState } from "react";
import useDebouce from "..";

const DebounceComponent = () => {
    const [count, setCount] = useState(10)
    useDebouce(() => alert(count), 1000, [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}

export default DebounceComponent