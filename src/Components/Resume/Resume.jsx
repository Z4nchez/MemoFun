import React from 'react'
import styles from "./Resume.module.css"
import { useContext } from "react";
import { useSpring, config, animated } from "react-spring";
import { MemoContext } from "../../Context/MemoFunContext"
import Star from "../Star/Star"

function Resume() {

    const { gStatus, setMemoPanelM, setActualPlayer, actualPlayer, loadRecords, arrayRecords, setGameOver } = useContext(MemoContext)    

    const efecto = useSpring({
        from: { opacity: 0, width: "60%", height: "80%" },
        to: { opacity: 1, width: "90%", height: "90%" },
        config: config.default,
    });

    const arrayStars = [];

    for(let i=0; gStatus.rangeN > i; i++){
        arrayStars.push(i)
    }

    function newRecord(points, range, rangeN) {
        let newRecordR = {
            _id: actualPlayer._id,
            pName: actualPlayer.pName,
            pLogo: actualPlayer.pLogo, 
            pLog1: actualPlayer.pLog1, 
            pLog2: actualPlayer.pLog2, 
            pScore: points, 
            range: range, 
            rangeN: rangeN,
            pass: actualPlayer.pass
        }

        return newRecordR;
    }

    async function updatePlayer(status) {
        if (status.points > status.record){
            let newRecordR = await newRecord(status.points, status.range, status.rangeN)
                fetch(`${process.env.REACT_APP_SERVERURL}/api/players/${newRecordR._id}`, {
                    method: "PUT",
                    body: JSON.stringify(newRecordR),
                    headers: {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                    },
                }) 
                .then(setActualPlayer(newRecordR))
                                      
        }
        else {
            setActualPlayer({...actualPlayer, pScore: status.record, range: status.recordRange, rangeN: status.recordRangeN})
        }
    }

    function updateRanking() {

        let weakRanked = arrayRecords[0]
        
        if (weakRanked.pScore < gStatus.points){
            weakRanked.pName = actualPlayer.pName;
            weakRanked.pLogo = actualPlayer.pLogo;
            weakRanked.pLog1 = actualPlayer.pLog1;
            weakRanked.pLog2 = actualPlayer.pLog2;
            weakRanked.pScore = gStatus.points;
        }
        
        saveRanking(weakRanked._id, weakRanked);
    }

    function saveRanking(id, record) {
        fetch(`${process.env.REACT_APP_SERVERURL}/api/records/${id}`, {
            method: "PUT",
            body: JSON.stringify(record),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
        })
        .then(record => console.log(record))
    }

  return (
    <animated.div className={styles.Resume} style={efecto}>
        <div className={styles.contScore}>
            <div className={styles.contData} style={{justifyContent: 'center', backgroundColor: "rgb(30, 145, 173)"}}>
                <h3 style={{color: "rgba(0, 0, 0, 0.9)"}}>{actualPlayer.pName}</h3>
            </div>
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
            <div className={styles.contData} style={{borderColor: "rgb(30, 145, 173)"}}>
                <h3>Total Points:</h3>
                <h3 style={{color: "yellow", fontSize: "1.2rem"}}>{gStatus.points}</h3>
            </div>
            <div className={styles.contData}>
                <h3>Previous Record:</h3>
                <h3 style={{color: "orange"}}>{gStatus.record}</h3>
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
                <button onClick={() => {updateRanking(); updatePlayer(gStatus); setGameOver(false); setMemoPanelM("2"); loadRecords()}}>Exit</button>
            </div>
        </div>
    </animated.div>
  )
}
export default Resume