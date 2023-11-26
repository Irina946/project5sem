import React from "react";
import styles from './button.module.css';
import clsx from 'clsx';

const Button = (props) => {
    const shadowClass = props.shadow === 'shadow' ? styles.shadow : '';
    const sizeClass = props.size === 'big' ? styles.big : '';
    const colorClass = props.color === 'orange' ? styles.orange : 'empty' ? styles.empty : '';

    return (
        <button className={clsx(styles.myButton, shadowClass, sizeClass, colorClass)} >
            {props.title}
        </button>
    );
}

export default Button;