import React from "react";
import { useState, useContext } from "react";
import styles from "./Register.module.css";
import { useSpring, config, animated } from "react-spring";
import { MemoContext } from "../../Context/MemoFunContext";

function Register() {
  const efecto = useSpring({
    from: { opacity: 0, width: "20%" },
    to: { opacity: 1, width: "100%" },
    config: config.default,
  });

  const { RegisterUser, checkField } = useContext(MemoContext);

  const [newUser, setNewUser] = useState({
    pName: "",
    pLogo:
      "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468962/MemoFun/1_avatar_sqygs9.png",
    pLog1: "rgb(147,147,147)",
    pLog2:
      "linear-gradient(0deg, rgba(147,147,147,1) 0%, rgba(176,176,176,1) 100%)",
    pScore: 0,
    range: "Baby",
    rangeN: 1,
    pass: "",
  });
  const [nameField, setNameField] = useState("");
  const [passField, setPassField] = useState("");

  return (
    <animated.div className={styles.Register} style={efecto}>
      <form action="" onSubmit={() => RegisterUser(newUser)}>
        <div className={styles.contT}>
          <div className={styles.contTT}>
            <h2>Create Account</h2>
          </div>
        </div>
        <div className={styles.contData}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            autoComplete="off"
            placeholder="Enter your Name"
            value={nameField}
            onChange={(e) => {
              if(checkField(e.target.value) === true){
                setNameField(e.target.value)
              }
              setNewUser({ ...newUser, pName: e.target.value });
            }}
          />
        </div>
        <div className={styles.contData}>
          <label htmlFor="userPass">Password</label>
          <input
            type="password"
            id="userPass"
            autoComplete="off"
            placeholder="Enter your password"
            value={passField}
            onChange={(e) => {
              if(checkField(e.target.value) === true){
                setPassField(e.target.value)
              }
              setNewUser({ ...newUser, pass: e.target.value })
            }}
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
