import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import Backscreen from "./Components/Backscreen/Backscreen"
import MemoPanel from "./Components/MemoPanel/MemoPanel"
import { MemoContextProvider } from "./Context/MemoFunContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoContextProvider>
      <Header></Header>
      <Backscreen></Backscreen>
      <MemoPanel></MemoPanel>
    </MemoContextProvider>
  </React.StrictMode>
);


