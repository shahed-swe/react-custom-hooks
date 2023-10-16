// importing custom hook
import useWindowSize from "..";

const WindowSizeComponent = () =>{
    const {width, height} = useWindowSize()

    return (
        <div>
            <span>Window Size </span>
            {width} x {height}
        </div>
    )
}

export default WindowSizeComponent