import React, { useContext } from 'react'
import styles from "./MemoPanel.module.css"
import Sesion from "../Sesion/Sesion"
import StartPanel from "../StartPanel/StartPanel"
import Game from "../Game/Game"
import Resume from '../Resume/Resume'
import { MemoContext } from "../../Context/MemoFunContext"
import ReactAudioPlayer from 'react-audio-player'

function MemoPanel() {

  const { memoPanelM, gameOver, audioM } = useContext(MemoContext)

  return (
    <div className={styles.memoPanel}>
      {gameOver === true && <ReactAudioPlayer src="win.mp3" autoPlay loop muted={audioM}/>}
      {memoPanelM === "1" && <Sesion></Sesion>}
      {memoPanelM === "2" && <StartPanel></StartPanel>}
      {memoPanelM === "3" && <Game></Game>}
      {memoPanelM === "4" && <Resume></Resume>}
      <a className={styles.footer} href='https://z4nchez.github.io/portfolio'>By Walter Sanchez</a>
    </div>
  )
}

export default MemoPanel