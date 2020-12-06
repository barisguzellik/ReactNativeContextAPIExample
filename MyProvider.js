import React, { useState } from 'react';
import MyContext from './MyContext';

export default function MyProvider(props) {

    const [count, setCount] = useState(0);

    return (
        <MyContext.Provider value={{
            count: count,
            incrementCount: () => { setCount(count + 1) },
            decrementCount: () => { setCount(count - 1) }
        }}>
            {props.children}
        </MyContext.Provider>
    )
}