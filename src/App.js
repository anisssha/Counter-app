import React, { useState } from 'react';
const App = () => {
    const [count, setCount] = useState(1);

    return (
        <div>
            <p>COUNTER</p>
            <h1>{count}</h1>
            <button className='btn' onClick={()=>setCount(count -1)}>Decrement</button>
            <button className='btn1' onClick={()=>setCount(0)}>Reset</button>
            <button className='btn2' onClick={()=>setCount(count +1)}>Increment</button>
        </div>
    )
}

export default App;