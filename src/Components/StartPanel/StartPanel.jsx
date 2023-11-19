import React from "react";
import { useContext, useState } from "react";
import styles from "./StartPanel.module.css";
import { useSpring, config, animated } from "react-spring";
import { MemoContext } from "../../Context/MemoFunContext"
import ReactAudioPlayer from 'react-audio-player'
import Star from "../Star/Star";
import AvatarPanel from "../AvatarPanel/AvatarPanel"

function StartPanel() {

  const efecto = useSpring({
    from: { opacity: 0, width: "60%", height: "80%" },
    to: { opacity: 1, width: "90%", height: "90%" },
    config: config.default,
  });

  const { setMemoPanelM, listCubes, actualPlayer, setActualPlayer, setGStatus, gStatus, audioM } = useContext(MemoContext)

  const [avatarI, setAvatarI] = useState("A")

  function shuffle(array) {
    array.forEach(element => {
      element.state = 0
    });
    array.sort(() => Math.random() - 0.5);
  }

  function initStatus() {
    setGStatus({...gStatus, player: actualPlayer.pName, record: actualPlayer.pScore, recordRange: actualPlayer.range, recordRangeN: actualPlayer.rangeN})
  }

  const arrayStars = [];

  for(let i=0; actualPlayer.rangeN > i; i++){
      arrayStars.push(i)
  }

  shuffle(listCubes);

  return <animated.div className={styles.StartPanel} style={efecto}>  
    <ReactAudioPlayer src="snow.mp3" autoPlay loop muted={audioM}/>
    <div className={styles.infoPanel}>
        <div className={styles.logoCont}>
            <div className={styles.backLogo} style={{background: actualPlayer.pLog1, background: actualPlayer.pLog2}}>
              <img src={actualPlayer.pLogo} alt="" title="Character" onClick={() => setAvatarI("B")} className={styles.logo}/> 
            </div>                      
            {avatarI === "B" && <AvatarPanel updatePanel={setAvatarI} player={actualPlayer} setPlayer={setActualPlayer}></AvatarPanel>}
        </div>
        <div className={styles.dataPanel}>
            <div className={styles.nameCont}>
                <h2>{actualPlayer.pName}</h2>
            </div>
            <div className={styles.dataCont}>
                <div className={styles.statCont}>{`Record: ${actualPlayer.pScore}`}</div>
                <div className={styles.statCont}>{`Range: ${actualPlayer.range}`}</div>
                <div className={styles.statCont}>
                  {arrayStars.map(element => <Star key={element}></Star>)}
                </div>
            </div> 
        </div>              
    </div>
    <div className={styles.gamePanel}>
        <button className={`${styles.buttonStart} ${styles.resplandor}`} onClick={() => {initStatus(); setMemoPanelM("3")}}>Start Game</button>
    </div>
    <div className={styles.ctrPanel}>
      <button className={styles.buttonBack} onClick={() => setMemoPanelM("1")}>Exit</button>
    </div>
  </animated.div>;
}

export default StartPanel;
