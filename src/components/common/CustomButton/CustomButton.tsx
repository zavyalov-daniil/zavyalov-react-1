import React from "react";
import classes from './CustomButton.module.css'
import clsx from "clsx";

interface CustomButtonProps {
    text: string;
    handleClick?: () => void;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text , handleClick = () => {}, className= classes.defaultBgAndPadding }) => {
    return (
        <button className={clsx(classes.customButton, className)} onClick={handleClick}>
            {text}
        </button>
    )
}

export default CustomButton;
