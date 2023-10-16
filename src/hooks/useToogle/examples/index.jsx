import useToggle from "..";

const ToggleComponent = () => {
    const [value, toggledValue] = useToggle(false)


    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggledValue}>Toggle</button>
            <button onClick={() => toggledValue(true)}>Make True</button>
            <button onClick={() => toggledValue(false)}>Make False</button>
        </div>
    )
}

export default ToggleComponent