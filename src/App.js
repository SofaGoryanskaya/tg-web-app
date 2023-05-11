import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
function App() {
    const {tg, onToggleButton, user} = useTelegram();
    useEffect(()=> {
        tg.ready();
        },
    [])
//отрисовка по корневому пути
  return (
      <div className="App">

          <Routes>
              <Route element={ <h1>Check2</h1>}></Route>
              <Route path={'main'} element={ <Main/>}></Route>
              <Route path={'menu'} index element={<Menu />}/>
              <Route path={'form'} element={<Form />}/>
              <Route path={'prof'} element={<Profile />}/>
          </Routes>
      </div>
  );
}

export default App;
