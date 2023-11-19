import React from 'react'
import styles from "./AvatarPanel.module.css"
import { useSpring, config, animated } from "@react-spring/web"
import { useContext } from 'react';
import { MemoContext } from '../../Context/MemoFunContext';

function AvatarPanel({updatePanel, player, setPlayer}) {

    const { actualPlayer } = useContext(MemoContext);

    const efecto = useSpring({
        from: { opacity: 0, width: "50vw", height: "40vh", left: "20vw" },
        to: { opacity: 1, width: "50vw", height: "50vh", left: "25vw" },
        config: config.default,
    });

    function updateUser(p) {
        fetch(`${process.env.REACT_APP_SERVERURL}/api/players/${p._id}`, {
            method: "PUT",
            body: JSON.stringify(p),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
        });
    }

  return (
    <animated.div className={styles.AvatarPanel} style={efecto}>
        <div className={styles.contTittle2}>
            <div className={styles.button} onClick={() => {updatePanel("A"); updateUser(player)}}>Close and Save</div>
        </div>
        <div className={styles.contLogo}>            
            <div className={styles.logos}>
                { actualPlayer.rangeN > 0 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468962/MemoFun/1_avatar_sqygs9.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468962/MemoFun/1_avatar_sqygs9.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 2 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/3_rookie2_kmfytk.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/3_rookie2_kmfytk.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 2 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/3_rookie3_c28y98.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/3_rookie3_c28y98.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 2 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/3_rookie1_d0kbfr.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/3_rookie1_d0kbfr.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 2 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/3_rookie4_kvwblg.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/3_rookie4_kvwblg.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 3 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/4_junior1_jwxt1x.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/4_junior1_jwxt1x.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 3 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/4_junior2_v6xeda.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/4_junior2_v6xeda.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 3 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/4_junior4_ikdsyv.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/4_junior4_ikdsyv.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 3 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/4_junior3_frkjng.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468889/MemoFun/4_junior3_frkjng.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 4 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced4_ds976f.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced4_ds976f.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 4 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced3_lrf6ho.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced3_lrf6ho.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 4 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced2_mhobnz.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced2_mhobnz.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 4 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced1_dc8hjx.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/5_advanced1_dc8hjx.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 5 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/6_elite3_o6m7h4.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/6_elite3_o6m7h4.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 5 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/6_elite2_wfhysn.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/6_elite2_wfhysn.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 5 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/6_elite4_rvlsmr.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/6_elite4_rvlsmr.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 5 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/6_elite1_l77qnh.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468890/MemoFun/6_elite1_l77qnh.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 6 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468892/MemoFun/7_master4_fbfzf1.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468892/MemoFun/7_master4_fbfzf1.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 6 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468892/MemoFun/7_master3_gccwvc.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468892/MemoFun/7_master3_gccwvc.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 6 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/7_master2_bhuyqk.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/7_master2_bhuyqk.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 6 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/7_master1_oawokk.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468891/MemoFun/7_master1_oawokk.png"})}}/> : <img src='signo.png' alt='avatar'></img>} 
                { actualPlayer.rangeN > 7 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468894/MemoFun/8_legendary4_u24gqx.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468894/MemoFun/8_legendary4_u24gqx.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 7 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468893/MemoFun/8_legendary3_qdit7z.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468893/MemoFun/8_legendary3_qdit7z.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 7 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468893/MemoFun/8_legendary5_uwiymn.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468893/MemoFun/8_legendary5_uwiymn.png"})}}/> : <img src='signo.png' alt='avatar'></img>}
                { actualPlayer.rangeN > 7 ? <img src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468892/MemoFun/8_legendary2_o2lgxo.png" alt="" onClick={() => {setPlayer({...player, pLogo: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1678468892/MemoFun/8_legendary2_o2lgxo.png"})}}/> : <img src='signo.png' alt='avatar'></img>}              
            </div>
            <div className={styles.contTittle}>Select Character</div>
        </div>
        <div className={styles.contBack}>
            <div className={styles.backs}>
                { actualPlayer.rangeN > 0 ? <div className={`${styles.back} ${styles.back1}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(147,147,147)", pLog2:"linear-gradient(0deg, rgba(147,147,147,1) 0%, rgba(176,176,176,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>}  
                { actualPlayer.rangeN > 2 ? <div className={`${styles.back} ${styles.back2}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(195,124,124)", pLog2:"radial-gradient(circle, rgba(195,124,124,1) 0%, rgba(103,0,0,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>}     
                { actualPlayer.rangeN > 2 ? <div className={`${styles.back} ${styles.back3}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(142,195,124)", pLog2:"radial-gradient(circle, rgba(142,195,124,1) 0%, rgba(12,103,0,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>} 
                { actualPlayer.rangeN > 3 ? <div className={`${styles.back} ${styles.back4}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(124,168,195)", pLog2:"radial-gradient(circle, rgba(124,168,195,1) 0%, rgba(0,52,103,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>} 
                { actualPlayer.rangeN > 3 ? <div className={`${styles.back} ${styles.back5}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(216,188,255)", pLog2:"radial-gradient(circle, rgba(216,188,255,1) 0%, rgba(230,0,59,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>} 
                { actualPlayer.rangeN > 4 ? <div className={`${styles.back} ${styles.back6}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(188,230,255)", pLog2:"radial-gradient(circle, rgba(188,230,255,1) 0%, rgba(50,0,230,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>} 
                { actualPlayer.rangeN > 4 ? <div className={`${styles.back} ${styles.back7}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(188,255,217)", pLog2:"radial-gradient(circle, rgba(188,255,217,1) 0%, rgba(0,99,168,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>} 
                { actualPlayer.rangeN > 5 ? <div className={`${styles.back} ${styles.back8}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(255,245,200)", pLog2:"radial-gradient(circle, rgba(255,245,200,1) 0%, rgba(105,70,0,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>} 
                { actualPlayer.rangeN > 5 ? <div className={`${styles.back} ${styles.back9}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(0,177,160)", pLog2:"linear-gradient(0deg, rgba(0,177,160,1) 0%, rgba(0,60,99,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>}  
                { actualPlayer.rangeN > 6 ? <div className={`${styles.back} ${styles.back10}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(255,88,88)", pLog2:"linear-gradient(0deg, rgba(255,88,88,1) 0%, rgba(0,14,99,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>}  
                { actualPlayer.rangeN > 6 ? <div className={`${styles.back} ${styles.back11}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(99,0,0)", pLog2:"linear-gradient(0deg, rgba(99,0,0,1) 0%, rgba(237,255,88,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>} 
                { actualPlayer.rangeN > 7 ? <div className={`${styles.back} ${styles.back12}`} onClick={ () => { setPlayer({...player, pLog1: "rgb(202,231,232)", pLog2:"radial-gradient(circle, rgba(202,231,232,1) 0%, rgba(181,183,200,1) 46%, rgba(69,69,88,1) 100%)"}) } }></div> : <img src='signo.png' alt='fondo' className={styles.back}></img>}         
            </div>
            <div className={styles.contTittle}>Select Background</div>
        </div>
    </animated.div>
  )
}

export default AvatarPanel