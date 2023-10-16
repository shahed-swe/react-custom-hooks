import { useCallback, useRef, useState } from "react";

const useStateWithHistory = (
    defaultValue,
    { capacity = 10 } = {}
) => {
    const [data, setData] = useState(defaultValue);
    const historyRef = useRef([data])
    const pointerRef = useRef(0)


    const set = useCallback(value => {
        // for getting resolved value
        const resolvedValue = typeof value === "function" ? value(data) : value

        if(historyRef.current[pointerRef.current] !== resolvedValue){
            if(pointerRef.current < historyRef.current.length - 1){
                historyRef.current.splice(pointerRef.current + 1)
            }
            historyRef.current.push(resolvedValue)
            
            while(historyRef.current.length > capacity){
                historyRef.current.shift()
            }
            pointerRef.current = historyRef.current.length - 1
        }
        setData(resolvedValue)

    }, [capacity, data])


    const back = useCallback(() => {
        if(pointerRef.current <= 0) return
        pointerRef.current--
        setData(historyRef.current[pointerRef.current])
    },[])

    const forward = useCallback(() => {
        if(pointerRef.current >= historyRef.current.length - 1) return
        pointerRef.current++
        setData(historyRef.current[pointerRef.current])
    },[])

    const go = useCallback(index => {
        if(index < 0 || index > historyRef.current.length - 1) return
        pointerRef.current = index
        setData(historyRef.current[pointerRef.current])
    },[])

    return [
        data,
        set,
        {
            history: historyRef.current,
            pointer: pointerRef.current,
            back,
            forward,
            go
        }
    ]
} 


export default useStateWithHistory