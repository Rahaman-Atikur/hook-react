import React, { useState } from 'react';
const child = () => {
    const [fromApi, setFromApi] = useState([]);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .then((data) => setFromApi(data));
    console.log(data);
    return (
        <div>
            <h1>I am Child</h1>
        </div>
    );
};

export default child;