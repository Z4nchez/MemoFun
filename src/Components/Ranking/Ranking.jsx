import React from "react";
import { useContext } from "react";
import styles from "./Ranking.module.css";
import { useSpring, config, animated } from "react-spring";
import { MemoContext } from "../../Context/MemoFunContext"

function Ranking() {

    const efecto = useSpring({
        from: { opacity: 0, width: "20%" },
        to: { opacity: 1, width: "100%" },
        config: config.default,
      });
    
      const { arrayRecords } = useContext(MemoContext);

  return (
    <animated.div className={styles.Ranking} style={efecto}>
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
    </animated.div>
  )
}

export default Ranking