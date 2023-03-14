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

  const { setMemoPanelM, listCubes } = useContext(MemoContext)

  const [avatarI, setAvatarI] = useState("A")
  const [avatar, setAvatar] = useState("https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468962/MemoFun/1_avatar_sqygs9.png")
  const [backcolor1, setBackColor1] = useState("rgb(255,255,255)")
  const [backcolor2, setBackColor2] = useState("radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(96,96,96,1) 100%)")

  function shuffle(array) {
    array.forEach(element => {
      element.state = 0
    });
    array.sort(() => Math.random() - 0.5);
  }

  shuffle(listCubes);

  return <animated.div className={styles.StartPanel} style={efecto}>  
    <ReactAudioPlayer src="snowy.mp3" autoPlay loop/>
    <div className={styles.infoPanel}>
        <div className={styles.logoCont}>
            <div className={styles.backLogo} style={{background: backcolor1, background: backcolor2}}>
              <img src={avatar} alt="" title="Shark" onClick={() => setAvatarI("B")} className={styles.logo}/> 
            </div>                      
            {avatarI === "B" && <AvatarPanel updatePanel={setAvatarI} updateLogo={setAvatar} updateBColor1={setBackColor1} updateBColor2={setBackColor2}></AvatarPanel>}
        </div>
        <div className={styles.dataPanel}>
            <div className={styles.nameCont}>
                <h2>Walter</h2>
            </div>
            <div className={styles.dataCont}>
                <div className={styles.statCont}>Record: 11370</div>
                <div className={styles.statCont}>Range: Master</div>
                <div className={styles.statCont}>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                  <Star></Star>
                </div>
            </div> 
        </div>              
    </div>
    <div className={styles.gamePanel}>
        <button className={`${styles.buttonStart} ${styles.resplandor}`} onClick={() => setMemoPanelM("3")}>Start Game</button>
    </div>
    <div className={styles.ctrPanel}>
      <button className={styles.buttonBack} onClick={() => setMemoPanelM("1")}>Exit</button>
    </div>
  </animated.div>;
}

export default StartPanel;
