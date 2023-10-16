import { useState } from "react";


const useToggle = () => {
    const [state, setState] = useState(false)

    const toggledValue = (value) => {
        setState(initialValue => typeof value === "boolean" ? value: !initialValue)
    }

    return [state, toggledValue]
}

export default useToggle