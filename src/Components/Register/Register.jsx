import React from "react";
import { useState, useContext } from "react";
import styles from "./Register.module.css";
import { useSpring, config, animated } from "react-spring";
import { MemoContext } from "../../Context/MemoFunContext"

function Register() {
  const efecto = useSpring({
    from: { opacity: 0, width: "20%" },
    to: { opacity: 1, width: "100%" },
    config: config.default,
  });

  const { RegisterUser } = useContext(MemoContext);

  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  return (
    <animated.div className={styles.Register} style={efecto}>
      <form action="" onSubmit={() => RegisterUser(name, pass)}>
        <div className={styles.contT}>
          <div className={styles.contTT}>
            <h2>Create Account</h2>
          </div>
        </div>
        <div className={styles.contData}>
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={styles.contData}>
          <label htmlFor="userPass">Password</label>
          <input
            type="password"
            id="userPass"
            placeholder="Enter your password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className={styles.contButton}>
          <input type="submit" value="Register" />
        </div>
        <div className={styles.contData}></div>
      </form>
    </animated.div>
  );
}

export default Register;
