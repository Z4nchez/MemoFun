import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.logoCont}>
            <img src="memo2.svg" alt='logo'/>
        </div>
    </div>
  )
}

export default Header