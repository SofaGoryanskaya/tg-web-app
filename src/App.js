import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Form from "./components/Form/Form";
import Button from "./components/Button/Button";
import Main from "./components/Main/Main";
function App() {
    const {tg, onToggleButton, user} = useTelegram();

    useEffect(()=> {
        tg.ready();
        },
    [])
//отрисовка по корневому пути
  return (
      <div className="App">
          <Header/>
          <Button onClick={onToggleButton}>Toggle</Button>

          <Routes>
              <Route path={'main'} element={<Main />}/>
              <Route index element={<Menu />}/>
              <Route path={'form'} element={<Form />}/>
          </Routes>
      </div>
  );
}

export default App;
