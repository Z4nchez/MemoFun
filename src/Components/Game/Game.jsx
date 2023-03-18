import { useContext, useState, useEffect } from 'react'
import { MemoContext } from "../../Context/MemoFunContext"
import styles from "./Game.module.css"
import { useSpring, config, animated } from 'react-spring'
import Cube from "../Cube/Cube"
import ReactAudioPlayer from 'react-audio-player'

function Game() {

  const { listCubes, getPairs, backPairs, setGStatus, gStatus, setMemoPanelM, winGame, setGameOver, gameOver, audioM, allBack, allPairs } = useContext(MemoContext);

    const efecto = useSpring({
        from: { opacity: 0, width: "60%", height: "80%" },
        to: { opacity: 1, width: "90%", height: "90%" },
        config: config.default,
    });

    useEffect(() => {
      setTimeout(() => {allPairs()}, 50)
      setTimeout(() => {allBack()}, 100)
    }, [])
    

    const [gameStatus, setGameStatus] = useState({
      player: "",
      points: 0,
      turnPoints: 0,
      timePoints: 0,
      range: "",
      rangeN: 0,
      turns: 0,
      progress: 0,
      record: 0,
      start: 0,
      timeG: 0
    })

    const [actualTurn, setActualTurn] = useState({
      pick: 0,
      cube1: "",
      cube2: ""
    })

    const [timer, setTimer] = useState(0)
    const [startT, setStartT] = useState(0)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
      if(finished === true) { 
        setTimeout(() => {winGame()}, 300)
      }
    }, [finished])
    

    useEffect(() => {
      if (actualTurn.pick === 2){

        if (actualTurn.cube1 === actualTurn.cube2){
          setTimeout(() => {getPairs(actualTurn.cube1)}, 800)
          setGameStatus({...gameStatus, progress: gameStatus.progress + 1, turns: gameStatus.turns + 1, start: 1}) 
        }
        else{
          setTimeout(() => {backPairs(actualTurn.cube1, actualTurn.cube2)}, 800)
          setGameStatus({...gameStatus, turns: gameStatus.turns + 1, start: 1}) 
        }

        setActualTurn({
          pick: 0,
          cube1: "",
          cube2: ""
        })
      } 
      
      if(gameStatus.start === 1){
        setStartT(1)
      }
      if(gameStatus.progress === 20){  
        setStartT(0);
        setGameOver(true);
        setFinished(true);     
        setGameStatus({...gameStatus, timeG: timer}) 
        setTimeout(() => {setMemoPanelM("4")}, 2400)             
      }
      
    }, [actualTurn])

    useEffect(() => {
      if(startT === 1) { 
        const interval = setInterval(() => {
          setTimer( (timer) => timer + 1 );
        }, 1000);

        return () => {
          clearInterval(interval); 
        }
      }
    }, [startT])

    function EndGame(timeS) {
      let gameTotalPoins = 0;
      let gameTurnPoins = 0;
      let gameTimePoins = 0;
      let rrange = "";
      let rrangeN = 0;

      if(gameStatus.turns <= 25){
        gameTurnPoins = 8000;
      }
      if(26 <= gameStatus.turns && gameStatus.turns <= 32){
        gameTurnPoins = 7000;
      }
      if(33 <= gameStatus.turns && gameStatus.turns <= 40){
        gameTurnPoins = 6000;
      }
      if(41 <= gameStatus.turns && gameStatus.turns <= 50){
        gameTurnPoins = 5000;
      }
      if(51 <= gameStatus.turns && gameStatus.turns <= 65){
        gameTurnPoins = 4000;
      }
      if(66 <= gameStatus.turns && gameStatus.turns <= 80){
        gameTurnPoins = 3000;
      }
      if(81 <= gameStatus.turns && gameStatus.turns <= 100){
        gameTurnPoins = 2000;
      }
      if(100 < gameStatus.turns){
        gameTurnPoins = 1000;
      }

      if(timeS < 60){
        gameTimePoins = 8400;
      }
      if(300 >= timeS && timeS >= 60){
        gameTimePoins = 8400 - ((timeS - 60) * 35)
      }
      if(timeS > 300){
        gameTimePoins = 0;
      }

      gameTotalPoins = gameTimePoins + gameTurnPoins;

      if(gameTotalPoins >= 13000){
        rrange = "Legendary"
        rrangeN = 8
      }
      if(11000 <= gameTotalPoins && gameTotalPoins < 13000){
        rrange = "Master"
        rrangeN = 7
      }
      if(9500 <= gameTotalPoins && gameTotalPoins < 11000){
        rrange = "Elite"
        rrangeN = 6
      }
      if(8000 <= gameTotalPoins && gameTotalPoins < 9500){
        rrange = "Advanced"
        rrangeN = 5
      }
      if(6800 <= gameTotalPoins && gameTotalPoins < 8000){
        rrange = "Junior"
        rrangeN = 4
      }
      if(5000 <= gameTotalPoins && gameTotalPoins < 6800){
        rrange = "Rookie"
        rrangeN = 3
      }
      if(2000 <= gameTotalPoins && gameTotalPoins < 5000){
        rrange = "Trainee"
        rrangeN = 2
      }
      if(2000 > gameTotalPoins){
        rrange = "Baby"
        rrangeN = 1
      }

      setGStatus({
        player: "",
        points: gameTotalPoins,
        turnPoints: gameTurnPoins,
        timePoints: gameTimePoins,
        range: rrange,
        rangeN: rrangeN,
        turns: gameStatus.turns,
        progress: gameStatus.progress,
        record: gStatus.record,
        recordRange: gStatus.recordRange,
        recordRangeN: gStatus.recordRangeN,
        start: 0,
        timeG: timeS
      })

    }    
    
  return (
    <animated.div className={styles.Game} style={efecto}>
      {gameOver === false && <ReactAudioPlayer src="under.mp3" autoPlay loop muted={audioM}/>}
      <div className={styles.tittleGame}>
        <div className={styles.contTurns}>
          <h2>{`Turns: ${gameStatus.turns}`}</h2>
        </div>
        <div className={styles.contProgress}>
          <div className={styles.maxProgress}>
            <div className={styles.progress} style={{width: `${(gameStatus.progress / 20) * 100}%`}}></div>
          </div>
        </div>
        <div className={styles.contTime}>
          <h2>{`Time: ${timer}`}</h2>
          {gameStatus.progress === 20 && setTimeout(() => {EndGame(timer)}, 100)}
        </div>
      </div>
      <div className={styles.panelGame}>
        {listCubes.map((cube) => <Cube key={cube.id} dato={cube} lista={listCubes} turnoActual={actualTurn} setTurnoActual={setActualTurn}></Cube>)}
      </div>
    </animated.div>
  )
}

export default Game