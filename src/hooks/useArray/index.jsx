import { useState } from "react";


const useArray = (defaultValue) => {
    const [array, setArray] = useState(defaultValue)

    // pushing new elements
    const push = (element) => {
        setArray(value => [...value, element])
    }

    // for filtering elements
    const filter = (callback) => {
        setArray(value => value.filter(callback))
    }

    // for updating a single data of specific index
    const update = (index, newElement) => {
        setArray(value => [
            ...value.slice(0, index),
            newElement,
            ...value.slice(index + 1, value.length)
        ])
    }

    // for removing a single data of specific index
    const remove = (index) => {
        setArray(value => [...value.slice(0, index), ...value.slice(index + 1, value.length)])
    }

    // for clearing the array
    const clear = () => {
        setArray([])
    }

    return { array, set: setArray, push, filter, update, remove, clear }
}

export default useArray