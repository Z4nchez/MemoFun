import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Login from "../Login/Login"
import Register from "../Register/Register"
import Ranking from '../Ranking/Ranking'
import styles from "./Sesion.module.css"
import Cubiks from "../Cubiks/Cubiks"
import ReactAudioPlayer from 'react-audio-player'
import { MemoContext } from "../../Context/MemoFunContext"

function Sesion() {

    const [mode, setMode] = useState("1")
    const { loadRecords, arrayRecords, audioM } = useContext(MemoContext)

    useEffect(() => {
        loadRecords()
      }, [])

  return (
    <div className={styles.Sesion}>
        <ReactAudioPlayer src="home.mp3" autoPlay loop muted={audioM}/>
        <div className={styles.tittleSesion}>
            <div className={styles.tittleCont}>
                <div className={styles.tittleA}>
                    <div className={styles.linkSesion} onClick={() => setMode("3")}>Ranking</div>
                </div>
                <div className={styles.tittleB}>
                    <div className={styles.linkSesion} onClick={() => setMode("1")}>Login</div>
                    <div className={styles.linkSesion} onClick={() => setMode("2")}>Resgister</div>
                </div>
            </div>
        </div>
        <div className={styles.scores}>
            <div className={styles.scoreTittle}>
                <div className={styles.scoreName}>Ranking</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.char} style={{background: arrayRecords[3].pLog1, background: arrayRecords[3].pLog2}}>
                    <img src={arrayRecords[3].pLogo} alt="" />
                </div>
                <div className={styles.scoreName}>{arrayRecords[3].pName}</div>
                <div className={styles.scoreValue}>{arrayRecords[3].pScore}</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.char} style={{background: arrayRecords[2].pLog1, background: arrayRecords[2].pLog2}}>
                    <img src={arrayRecords[2].pLogo} alt="" />
                </div>
                <div className={styles.scoreName}>{arrayRecords[2].pName}</div>
                <div className={styles.scoreValue}>{arrayRecords[2].pScore}</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.char} style={{background: arrayRecords[1].pLog1, background: arrayRecords[1].pLog2}}>
                    <img src={arrayRecords[1].pLogo} alt="" />
                </div>
                <div className={styles.scoreName}>{arrayRecords[1].pName}</div>
                <div className={styles.scoreValue}>{arrayRecords[1].pScore}</div>
            </div>
            <div className={styles.scoreGroup}>
                <div className={styles.char} style={{background: arrayRecords[0].pLog1, background: arrayRecords[0].pLog2}}>
                    <img src={arrayRecords[0].pLogo} alt="" />
                </div>
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
            {mode === "3" && <Ranking></Ranking>}          
        </div>       
        <div className={styles.panel1}>
            <Cubiks></Cubiks>
        </div>
    </div>
    
  )
}

export default Sesion