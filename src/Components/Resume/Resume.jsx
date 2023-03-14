import React from 'react'
import styles from "./Resume.module.css"
import { useContext } from "react";
import { useSpring, config, animated } from "react-spring";
import { MemoContext } from "../../Context/MemoFunContext"
import Star from "../Star/Star"
import ReactAudioPlayer from 'react-audio-player'

function Resume() {

    const { gStatus, setMemoPanelM } = useContext(MemoContext)
    const arrayStars = [];

    const efecto = useSpring({
        from: { opacity: 0, width: "60%", height: "80%" },
        to: { opacity: 1, width: "90%", height: "90%" },
        config: config.default,
    });

    for(let i=0; gStatus.rangeN > i; i++){
        arrayStars.push(i)
    }

  return (
    <animated.div className={styles.Resume} style={efecto}>
        <ReactAudioPlayer src="snowy.mp3" autoPlay loop/>
        <div className={styles.contScore}>
            <div className={styles.contData}>
                <h3>Turns:</h3>
                <h3 style={{color: "orange"}}>{gStatus.turns}</h3>
            </div>
            <div className={styles.contData}>
                <h3>Turn Points:</h3>
                <h3 style={{color: "orange"}}>{gStatus.turnPoints}</h3>
            </div>
            <div className={styles.contData}>
                <h3>Time:</h3>
                <h3 style={{color: "orange"}}>{gStatus.timeG}</h3>
            </div>
            <div className={styles.contData}>
                <h3>Time Points:</h3>
                <h3 style={{color: "orange"}}>{gStatus.timePoints}</h3>
            </div>
            <div className={styles.contData}>
                <h3>Total Points:</h3>
                <h3 style={{color: "yellow", fontSize: "1.2rem"}}>{gStatus.points}</h3>
            </div>
            <div className={styles.contData}>
                <h3>Range:</h3>
                <h3 style={{color: "orange", fontSize: "1.2rem"}}>{gStatus.range}</h3>
            </div>
            <div className={styles.contDataS}>
                <div className={styles.Stars}>
                    {arrayStars.map(element => <Star key={element}></Star>)}
                </div>
            </div>
            <div className={styles.contButton}>
                <button onClick={() => setMemoPanelM("2")}>Exit</button>
            </div>
        </div>
    </animated.div>
  )
}
export default Resume