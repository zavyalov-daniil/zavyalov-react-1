import React, { useState } from "react";
import classes from './CounterButton.module.css'

interface CounterButtonProps {
    defaultCount?: number;
}

const CounterButton: React.FC<CounterButtonProps> = ({ defaultCount = 0 }) => {
    const [count, setCount] = useState(defaultCount);

    const handleClick = () => {
        setCount((count) => count + 1);
    };

    return (
        <button className={classes.counterButton} onClick={handleClick}>
            count is {count}
        </button>
    )
}

export default CounterButton;
