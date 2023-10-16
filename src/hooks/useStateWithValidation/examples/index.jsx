import useStateWithValidation from "..";

const StateWithValidationComponent = () => {
    const [username, setusername, isValid] = useStateWithValidation(
        name => name.length > 5, ""
    )


    return (
        <div>
            <div>Valid: {isValid.toString()}</div>
            <input
                type="text"
                value={username}
                onChange={event => setusername(event.target.value)}
            />
        </div>
    )
}

export default StateWithValidationComponent