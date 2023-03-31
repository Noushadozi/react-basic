import React, { useState } from 'react';

const ObjectExample = () => {
    const [value, setValue] = useState({
        name:'rakib',
        age: 32,
        hobby: 'dev'
    })
    const handleShowMe = () =>{
        setValue({
            ...value,
            name:'noushad',
            age: 2313,
           
        })
    }
    return (
        <div>
            <h1>{value.name}</h1>
            <p>{value.age}</p>
            <p>{value.hobby}</p>
            <button onClick={handleShowMe}>Show Me</button>
        </div>
    );
};

export default ObjectExample;