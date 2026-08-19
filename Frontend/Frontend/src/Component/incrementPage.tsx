import { useState } from 'react'
import React from 'react';
import Button from './Button';

const IncrementPage: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h1>{count}</h1>
            <div>
                <Button label='increment' onClick={increment} />
                <Button label='decrement' onClick={decrement} />
            </div>
        </>
    );
};

export default IncrementPage;