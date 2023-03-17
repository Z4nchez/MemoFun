import React from 'react'
import styles from "./Cube.module.css"
import { useContext } from 'react';
import { MemoContext } from "../../Context/MemoFunContext"

function Cube({dato, lista, turnoActual, setTurnoActual }) {

  const { UpdateCube } = useContext(MemoContext)

  function FlipCube(cube) {

    if (dato.state === 1){
      if (turnoActual.cube1 === ""){
        setTurnoActual({...turnoActual, cube1: cube.par, pick: turnoActual.pick + 1})
      }
      else{
        setTurnoActual({...turnoActual, cube2: cube.par, pick: turnoActual.pick + 1})
      }
    }
  }
   
  return (
    <div className={styles.Cube}>
      {dato.state === 0 && <img className={styles.anim1} onClick={() => {UpdateCube(dato, 1, lista); FlipCube(dato)}} alt="cube" src='back.svg'/>}
      {dato.state === 1 && <img className={styles.anim1} onClick={() => {UpdateCube(dato, 0, lista); FlipCube(dato)}} alt="cube" src={`cube/${dato.img2}.png`}/>}
      {dato.state === 2 && <img className={styles.anim1} onClick={() => UpdateCube(dato, 2, lista)} alt="cube" src="none.png"/>}
      {dato.state === 3 && <img className={styles.bye} onClick={() => UpdateCube(dato, 3, lista)} alt="cube" src="none.png"/>}
    </div>
  )
}

export default Cube