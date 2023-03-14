import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Login from "../Login/Login"
import Register from "../Register/Register"
import styles from "./Sesion.module.css"
import Cubiks from "../Cubiks/Cubiks"
import ReactAudioPlayer from 'react-audio-player'
import { MemoContext } from "../../Context/MemoFunContext"

function Sesion() {

    const [mode, setMode] = useState("1")
    const { loadRecords, arrayRecords } = useContext(MemoContext)

    useEffect(() => {
        loadRecords()
      }, [])

  return (
    <div className={styles.Sesion}>
        <ReactAudioPlayer src="snowy.mp3" autoPlay={true} loop/>
        <div className={styles.tittleSesion}>
            <div className={styles.tittleCont}>
                <div className={styles.linkSesion} onClick={() => setMode("1")}>Login</div>
                <div className={styles.linkSesion} onClick={() => setMode("2")}>Resgister</div>
            </div>
        </div>
        <div className={styles.scores}>
            <div className={styles.scoreTittle}>
                <div className={styles.scoreName}>Ranking</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.scoreName}>{arrayRecords[3].pName}</div>
                <div className={styles.scoreValue}>{arrayRecords[3].pScore}</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.scoreName}>{arrayRecords[2].pName}</div>
                <div className={styles.scoreValue}>{arrayRecords[2].pScore}</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.scoreName}>{arrayRecords[1].pName}</div>
                <div className={styles.scoreValue}>{arrayRecords[1].pScore}</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.scoreName}>{arrayRecords[0].pName}</div>
                <div className={styles.scoreValue}>{arrayRecords[0].pScore}</div>
            </div>
        </div>
        <div className={styles.panel2}>
            <Cubiks></Cubiks>
        </div>
        <div className={styles.panel0}>
            {mode === "1" && <Login></Login>}
            {mode === "2" && <Register></Register>}            
        </div>       
        <div className={styles.panel1}>
            <Cubiks></Cubiks>
        </div>
    </div>
    
  )
}

export default Sesion