import React, { useEffect, useState } from 'react';
const Child = () => {
    const [value, setValue] = useState(0);
    const [anotherValue, setAnotherValue] = useState([]);
    const handleClick = () => {
        setValue(value + 1);
    }
    useEffect(() => {
        console.log(value);
        console.log("Mount");
    }, [value])
    return (
        <div>
            <p>Increment:{value}</p>
            <button onClick={handleClick}>Click</button>
            <button onClick={ }>Decrement Button</button>
        </div>
    );
};

export default Child;