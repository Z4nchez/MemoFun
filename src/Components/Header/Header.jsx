import React from 'react'
import styles from "./Header.module.css"
import { useContext } from 'react'
import { MemoContext } from "../../Context/MemoFunContext"

function Header() {

  const { setAudioM, audioM } = useContext(MemoContext)

  return (
    <div className={styles.header}>
        <div className={styles.logoCont}>
            <img src="memo2.svg" alt='logo'/>
        </div>
        <div className={styles.audioCont}>
            {audioM === false && <img src="audioOn.png" alt='logo' onClick={() => setAudioM(true)}/>}
            {audioM === true && <img src="audioOff.png" alt='logo' onClick={() => setAudioM(false)}/>}
        </div>
    </div>
  )
}

export default Header