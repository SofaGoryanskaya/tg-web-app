import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Coffee from "./components/Coffee/Coffee";
function App() {
    const {tg} = useTelegram();
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
              <Route path={'coffee'} element={<Coffee />}/>
          </Routes>
      </div>
  );
}

export default App;
