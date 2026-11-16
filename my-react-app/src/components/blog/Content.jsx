import React from 'react'
import styles from './Content.module.css';


function Content({title, author, content}){
    return (
        <main className={styles.content}>
            <h1>{title}</h1>
            <p><strong>Author: </strong>{author}</p>
            <p>{content}</p>
        </main>
    );
}

export default Content