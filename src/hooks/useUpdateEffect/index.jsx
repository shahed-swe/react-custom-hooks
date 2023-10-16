import { useEffect, useRef } from "react";


// this hook requires a callback function and a list of dependencies by which it will interact
const useUpdateEffect = (callback, dependencies) => {
    const firstRenderRef = useRef(true)


    useEffect(() => {
        if(firstRenderRef.current){
            firstRenderRef.current = false
            return
        }
        return callback()
    }, [dependencies, callback])
}

export default useUpdateEffect