import React from 'react'
import styles from './IndividualComment.module.css'

function IndividualComment({value}) {
    console.log(value);
    return (<div className={styles.individualComment}>
        <p>Name: {value.name}</p>
        <p>"{value.content}"</p>
    </div>
    );
}

export default IndividualComment