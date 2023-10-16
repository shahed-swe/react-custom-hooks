import { useState } from "react";
// importing dependent custom hook
import useEventListener from "../useEventListener";


const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEventListener("resize", () => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight})
    })


    return windowSize
}

export default useWindowSize