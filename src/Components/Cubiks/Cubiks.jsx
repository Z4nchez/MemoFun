import React from "react";
import styles from "./Cubiks.module.css";

function Cubiks() {
  return (
    <div className={styles.Cubiks}>
      <div className={`${styles.cubiksPanel} ${styles.desplazamientoV}`}>
        <div className={styles.cPanel1}>
          <div className={styles.cube1Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube2Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube3Cont}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={styles.cube4Cont}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={styles.cube5Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube6Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube7Cont}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={styles.cube8Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
        </div>
        <div className={styles.cPanel2}>
          <div className={`${styles.cube1Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={`${styles.cube2Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={`${styles.cube3Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={`${styles.cube4Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={`${styles.cube5Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={`${styles.cube6Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={`${styles.cube7Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={styles.cube8Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
        </div>
        <div className={styles.cPanel3}>
          <div className={`${styles.cube1Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube2Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube3Cont}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={`${styles.cube4Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={`${styles.cube5Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={`${styles.cube6Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={`${styles.cube7Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={`${styles.cube8Cont} ${styles.nonVisible}`}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
        </div>
        <div className={styles.cPanel4}>
          <div className={styles.cube1Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube2Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube3Cont}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={styles.cube4Cont}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={styles.cube5Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube6Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
          <div className={styles.cube7Cont}>
            <div className={`${styles.cube} ${styles.cubeB}`}></div>
          </div>
          <div className={styles.cube8Cont}>
            <div className={`${styles.cube} ${styles.cubeA}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cubiks;
