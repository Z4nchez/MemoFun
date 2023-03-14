import React from 'react'
import styles from "./Backscreen.module.css"
import { useContext } from 'react'
import { MemoContext } from "../../Context/MemoFunContext"


function Backscreen() {

  const { gameOn } = useContext(MemoContext)

  return (
    <>
      {gameOn === true ? <video className={styles.fondo} src="blend2.mp4" autoPlay muted loop></video> : <video className={styles.fondo} src="blue3.mp4" autoPlay muted loop></video>}
      <div className={styles.blur}></div>
      <div className={gameOn === true ? styles.lumin2 : styles.lumin}></div>
    </>
  )
}

export default Backscreen