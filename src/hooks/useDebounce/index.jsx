import { useEffect } from "react";
// dependent hooks importing
import useTimeout from "../useTimeout";

const useDebouce = (callback, delay, dependencies) => {
    const { reset, clear } = useTimeout(callback, delay)

    // making debouncer
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [clear])
}

export default useDebouce