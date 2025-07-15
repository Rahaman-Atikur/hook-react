import React, { useEffect, useState } from 'react';
const Child = () => {
    const [value, setValue] = useState(0);
    const handleClick = () => {
        setValue(value + 1);
    }
    useEffect(() => {
        console.log(value);
    }, [value])
    return (
        <div>
            <p>Increment:{value}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};

export default Child;