import React from "react";
import styles from './checkbox.module.css';

const Checkbox = (props) => {
    return (
        <div className={styles.checkboxContainer}>
            <input id={props.id} type="checkbox" name={props.name} className={styles.customCheckbox}/>
            <label className={styles.label} htmlFor={props.id}>{props.title}</label>
        </div>
    )
}

export default Checkbox;

