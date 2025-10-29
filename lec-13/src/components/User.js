import { useEffect, useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h3>Functional Component</h3>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h2>Location: Bhopal</h2>
            <h2>Contact: @utkarsh.com</h2>
        </div>
    )
}

export default User;