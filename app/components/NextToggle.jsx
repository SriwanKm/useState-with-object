import React from "react";
import styles from "../page.module.css"

export default function NextToggle(props){
    return(
        <img onClick={props.handleClick} className={props.favorite ? styles.next_blue: styles.next} src="next.svg" alt="next" />

    )
}