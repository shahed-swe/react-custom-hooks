// importing custom hooks
import { useSessionStorage, useLocalStorage } from "..";

const StorageComponent = () => {
    const [name, setName, removeName] = useSessionStorage('name', 'kyle')
    const [age, setAge, removeAge] = useLocalStorage("age", 26)


    return (
        <div>
            <div>{name} - {age}</div>
            <button onClick={() => setName("John")}>Set name</button>
            <button onClick={() => setAge(42)}>Set Age</button>
            <button onClick={removeName}>Remove Name</button>
            <button onClick={removeAge}>Remove Age</button>
        </div>
    )
}

export default StorageComponent