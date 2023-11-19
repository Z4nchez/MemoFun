import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { useSpring, config, animated } from "react-spring";
import { MemoContext } from "../../Context/MemoFunContext";

function Login() {
  const efecto = useSpring({
    from: { opacity: 0, width: "20%" },
    to: { opacity: 1, width: "100%" },
    config: config.default,
  });

  const { setMemoPanelM, setActualPlayer, checkField } =
    useContext(MemoContext);

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [nameField, setNameField] = useState("");
  const [passField, setPassField] = useState("");

  function loadPlayer() {
    let newPlayer = {
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
    };
    fetch(`${process.env.REACT_APP_SERVERURL}/api/players`)
      .then((res) => res.json())
      .then((data) => {
        newPlayer = data.find(
          (player) => player.pName === name && player.pass === pass
        );
      })
      .then(() => {
        if (newPlayer === undefined) {
          setInvalid(true);
        } else {
          setActualPlayer(newPlayer);
          setInvalid(false);
          setMemoPanelM("2");
        }
      });
  }

  return (
    <animated.div className={styles.Login} style={efecto}>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          loadPlayer();
        }}
      >
        <div className={styles.contUserLog}>
          <img src="userLog2.png" alt="" />
        </div>
        <div className={styles.contData}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your Name"
            autoComplete="off"
            value={nameField}
            onChange={(e) => {
              if(checkField(e.target.value) === true){
                setNameField(e.target.value)
              }
              setName(e.target.value);
            }}
          />
        </div>
        <div className={styles.contData}>
          <label htmlFor="userPass">Password</label>
          <input
            type="password"
            id="userPass"
            placeholder="Enter your password"
            autoComplete="off"
            value={passField}
            onChange={(e) => {
              if(checkField(e.target.value) === true){
                setPassField(e.target.value)
              }
              setPass(e.target.value);
            }}
          />
        </div>
        <div className={styles.contButton}>
          <input type="submit" value="Login" />
        </div>
        <div className={styles.contData} style={{height: "12px"}}>
          {invalid === true && <h3>User doesn't exists</h3>}
        </div>
      </form>
    </animated.div>
  );
}

export default Login;
