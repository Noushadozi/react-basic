import React, { useState, useEffect } from 'react';

const Basic = () => {
    const [value, setValue] = useState(0);
    console.log(value);
    // let count = 0;
    const handleCount = () => {
        setValue(value + 1)
    };
    useEffect(() => {
        console.log('hello');
    }, []);
    return (
        <div className='text-center text-3xl mt-6'>
            <h1>Count: {value}</h1>
            <button onClick={handleCount} className='btn btn-primary mr-2'>+</button>
            <button className='btn btn-error'>-</button>
        </div>
    );
};

export default Basic;