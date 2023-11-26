import React, {Component} from "react";
import styles from './create.module.css';
import Button from "../ui-elements/button/button";
import Checkbox from "../ui-elements/checkbox/checkbox";

const Create = (props) => {

    return ( <div className={styles.container}><Checkbox title='hello' id='1'/> </div>
       
    );
}

export default Create;