import { createContext } from "react"
import { useState, useEffect } from "react";

export const MemoContext = createContext();

export function MemoContextProvider (props) {

    const [gameOn, setGameOn] = useState(false)
    const [memoPanelM, setMemoPanelM] = useState("1")   
    const [arrayRecords, setArrayRecords] = useState([
        {_id: '', pName: '', pLogo: '', pScore: 0},
        {_id: '', pName: '', pLogo: '', pScore: 0},
        {_id: '', pName: '', pLogo: '', pScore: 0},
        {_id: '', pName: '', pLogo: '', pScore: 0}
        ]) 

    const [gStatus, setGStatus] = useState({
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

      useEffect(() => {

        if(memoPanelM === "1"){
            setGameOn(false)
        }
        if(memoPanelM === "2"){
            setGameOn(false)
        }
        if(memoPanelM === "3"){
            setGameOn(true)
        }
        if(memoPanelM === "4"){
            setGameOn(false)
        }
        
      }, [memoPanelM])
      
    const [listCubes, setListCubes] = useState([
        {id: 0, img1: "back", img2: "cube-arbol", par: "arbol", state: 0},
        {id: 1, img1: "back", img2: "cube-arbol", par: "arbol", state: 0},
        {id: 2, img1: "back", img2: "cube-azada", par: "azada", state: 0},
        {id: 3, img1: "back", img2: "cube-azada", par: "azada", state: 0},
        {id: 4, img1: "back", img2: "cube-buzon", par: "buzon", state: 0},
        {id: 5, img1: "back", img2: "cube-buzon", par: "buzon", state: 0},
        {id: 6, img1: "back", img2: "cube-cajas", par: "cajas", state: 0},
        {id: 7, img1: "back", img2: "cube-cajas", par: "cajas", state: 0},
        {id: 8, img1: "back", img2: "cube-carretilla", par: "carretilla", state: 0},
        {id: 9, img1: "back", img2: "cube-carretilla", par: "carretilla", state: 0},
        {id: 10, img1: "back", img2: "cube-casa", par: "casa", state: 0},
        {id: 11, img1: "back", img2: "cube-casa", par: "casa", state: 0},
        {id: 12, img1: "back", img2: "cube-establo", par: "establo", state: 0},
        {id: 13, img1: "back", img2: "cube-establo", par: "establo", state: 0},
        {id: 14, img1: "back", img2: "cube-gallinas", par: "gallinas", state: 0},
        {id: 15, img1: "back", img2: "cube-gallinas", par: "gallinas", state: 0},
        {id: 16, img1: "back", img2: "cube-huevos", par: "huevos", state: 0},
        {id: 17, img1: "back", img2: "cube-huevos", par: "huevos", state: 0},
        {id: 18, img1: "back", img2: "cube-leche", par: "leche", state: 0},
        {id: 19, img1: "back", img2: "cube-leche", par: "leche", state: 0},
        {id: 20, img1: "back", img2: "cube-maiz", par: "maiz", state: 0},
        {id: 21, img1: "back", img2: "cube-maiz", par: "maiz", state: 0},
        {id: 22, img1: "back", img2: "cube-manzana", par: "manzana", state: 0},
        {id: 23, img1: "back", img2: "cube-manzana", par: "manzana", state: 0},
        {id: 24, img1: "back", img2: "cube-oveja", par: "oveja", state: 0},
        {id: 25, img1: "back", img2: "cube-oveja", par: "oveja", state: 0},
        {id: 26, img1: "back", img2: "cube-pala", par: "pala", state: 0},
        {id: 27, img1: "back", img2: "cube-pala", par: "pala", state: 0},
        {id: 28, img1: "back", img2: "cube-puerco", par: "puerco", state: 0},
        {id: 29, img1: "back", img2: "cube-puerco", par: "puerco", state: 0},
        {id: 30, img1: "back", img2: "cube-regadera", par: "regadera", state: 0},
        {id: 31, img1: "back", img2: "cube-regadera", par: "regadera", state: 0},
        {id: 32, img1: "back", img2: "cube-tomates", par: "tomates", state: 0},
        {id: 33, img1: "back", img2: "cube-tomates", par: "tomates", state: 0},
        {id: 34, img1: "back", img2: "cube-tractor", par: "tractor", state: 0},
        {id: 35, img1: "back", img2: "cube-tractor", par: "tractor", state: 0},
        {id: 36, img1: "back", img2: "cube-vaca", par: "vaca", state: 0},
        {id: 37, img1: "back", img2: "cube-vaca", par: "vaca", state: 0},
        {id: 38, img1: "back", img2: "cube-zanahoria", par: "zanahoria", state: 0},
        {id: 39, img1: "back", img2: "cube-zanahoria", par: "zanahoria", state: 0}
    ])

    function UpdateCube (cube, data, listShuffle){
       
        const newList = listShuffle.map(element => {
            if (element.id === cube.id) {
                element.state = data
            }
            return element
        });
        setListCubes(newList)
    }

    function getPairs(pair) {
        setListCubes(listCubes.map((cube) => {
            if (cube.par === pair){
                cube.state = 2
            }
            return cube
        }))
    }

    function backPairs(pair1, pair2) {
        setListCubes(listCubes.map((cube) => {
            if (cube.par === pair1 || cube.par === pair2){
                cube.state = 0
            }
            return cube
        }))
    }

    function RegisterUser (user, pass){
        
    }

    function loadRecords() {

        let records = [];

        fetch(`${process.env.REACT_APP_SERVERURL}/api/records`)
            .then(res => res.json())
            .then(data => records = data)
            .then(() => {
                records.sort(function(a, b) {
                    if (a.pScore > b.pScore) {
                      return 1;
                    }
                    if (a.pScore < b.pScore) {
                      return -1;
                    }
                    return 0;
                })
            })
            .then(() => {
                setArrayRecords(records)
            })
            .then(() => {
                console.log(records)
            })

    }
    

    return (<MemoContext.Provider value={{
        setMemoPanelM,
        setListCubes,
        UpdateCube,
        getPairs,
        backPairs,
        setGameOn,
        setGStatus,
        loadRecords,
        setArrayRecords,
        RegisterUser,
        arrayRecords,
        gStatus,
        gameOn,
        memoPanelM,
        listCubes
    }}>{props.children}</MemoContext.Provider>)
    
}

