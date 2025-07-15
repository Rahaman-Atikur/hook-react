import React, { useEffect, useState } from 'react';
const Child = () => {
    const [value, setValue] = useState(0);
    const [anotherValue, setAnotherValue] = useState(0);
    const handleClick = () => {
        setValue(value + 1);

    }
    const handleDecrement = () => {
        setAnotherValue(anotherValue - 1);
    }
    useEffect(() => {
        console.log(value);
        console.log(anotherValue);
    }, [value, anotherValue])
    return (
        <div>
            <p>Increment:{value}</p>
            <button onClick={handleClick}>Click</button>
            <button onClick={handleDecrement}>Decrement Button</button>
        </div>
    );
};

export default Child;