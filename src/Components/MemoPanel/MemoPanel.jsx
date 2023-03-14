import React, { useContext } from 'react'
import styles from "./MemoPanel.module.css"
import Sesion from "../Sesion/Sesion"
import StartPanel from "../StartPanel/StartPanel"
import Game from "../Game/Game"
import Resume from '../Resume/Resume'
import { MemoContext } from "../../Context/MemoFunContext"

function MemoPanel() {

  const { memoPanelM } = useContext(MemoContext)

  return (
    <div className={styles.memoPanel}>
      {memoPanelM === "1" && <Sesion></Sesion>}
      {memoPanelM === "2" && <StartPanel></StartPanel>}
      {memoPanelM === "3" && <Game></Game>}
      {memoPanelM === "4" && <Resume></Resume>}
    </div>
  )
}

export default MemoPanel