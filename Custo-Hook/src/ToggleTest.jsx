import useToggle from "./hooks/useToggle";

function ToggleTest() {
    const [isOpen, toggleOpen] = useToggle(true);

    return (
        <div>
            <button onClick={toggleOpen}>Toggle</button>
            {isOpen && <p>Hello, this is visible</p>}
        </div>
    );
}

export default ToggleTest;