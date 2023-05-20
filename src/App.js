import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Coffee from "./components/Coffee/Coffee";
import NewCoffee from "./components/Menu/NewCoffee";
import Connection from "./components/Connaction/Connection";
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
              <Route path={'main'} element={ <Main/>}></Route>
             <Route path={'menu'} index element={<Menu />}/>
              <Route path={'form'} element={<Form />}/>
              <Route path={'prof'} element={<Profile />}/>
              <Route path={"map"} element={<Connection/>}/>

              <Route path={'coffee'} element={<Coffee />}/>
              <Route path={'new'} element={<NewCoffee />}/>
          </Routes>
      </div>
  );
}

export default App;
