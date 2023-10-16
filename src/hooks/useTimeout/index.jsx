import { useCallback, useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
    const callbackref = useRef(callback)
    const timeoutRef = useRef()

    // for getting current callback reference
    useEffect(() => {
        callbackref.current = callback
    },[callback])

    // for setting current callbacks delay using callback function
    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackref.current(), delay)
    },[delay])


    // for clearing timeout
    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    },[])

    useEffect(() => {
        set()
        return clear
    },[delay, set, clear])

    const reset = useCallback(() => {
        clear()
        set()
    },[clear, set])

    return {reset, clear}
}

export default useTimeout