import React, { useState } from 'react';
import { guns } from '../../../test'
const ArrayExamples = () => {
    const [data, setData] = useState(guns);
    const handleRemove = (id) => {
        // const filteredData= data.filter(pd=>pd.id !== id);
        // setData(filteredData)
        setData(data.filter(pd => pd.id !== id))
    }
    const handleChange = (value) => {
        console.log(value)
    }
    return (
        <div>
            <div className='text-center text-xl font-bold my-2'>
                {data && data.map((singleData) => (
                    <>
                        <p>{singleData.name}</p>
                        <button onClick={() => handleRemove(singleData.id)} className='btn btn-success mt-4 btn=xs'>Remove</button>
                    </>
                ))}
            </div>
            <div className='text-center mt-4'>
                <button onClick={() => setData([])} className='btn btn-accent'>Remove all</button>
                <input type="text" onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    );
};

export default ArrayExamples;