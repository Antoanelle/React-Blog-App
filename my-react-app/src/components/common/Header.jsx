import React from 'react';
import styles from './Header.module.css';
import { useTheme } from './ThemeContext';
import { Link } from 'react-router';

function Header(){
    const {toggleTheme} =  useTheme()
    return(
        <header className={styles.header}>
            <h1>My Blog</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </ul>
            </nav>

        </header>
    );
}

export default Header;