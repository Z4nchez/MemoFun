import React, { useContext } from 'react'
import styles from "./Login.module.css"
import {useSpring, config, animated} from 'react-spring'
import { MemoContext } from "../../Context/MemoFunContext"

function Login() {

  const efecto = useSpring({
    from: {opacity: 0, width: "20%"},
    to: {opacity : 1, width: "100%"},
    config: config.default
  })

  const { setMemoPanelM } = useContext(MemoContext)  

  return (
    <animated.div className={styles.Login} style={efecto}>
      <form action="" onSubmit={() => setMemoPanelM("2")}>
        <div className={styles.contUserLog}>
          <img src="userLog2.png" alt="" />
        </div>
        <div className={styles.contData}>
          <label htmlFor="userName">Username</label>
          <input type="text" id='userName' placeholder='Enter your Name'/>
        </div>
        <div className={styles.contData}>
          <label htmlFor="userPass">Password</label>
          <input type="password" id='userPass' placeholder='Enter your password'/>
        </div>
        <div className={styles.contButton}>
          <input type="submit" value="Login"/>
        </div>
      </form>
    </animated.div>
  )
}

export default Login