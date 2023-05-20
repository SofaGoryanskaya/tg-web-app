import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Connection from "./components/Connaction/Connection";
import ColdCoffee from "./components/Menu/category/ColdCoffee";
import FormCheck from "./components/Form/FormCheck";
import FormError from "./components/Form/FormError";
import ProfileCheck from "./components/Profile/ProfileCheck";

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
                  <Route path={'form'} element={<Form />}/>
                  <Route path={'prof'} element={<ProfileCheck />}/>
                  <Route path={"map"} element={<Connection/>}/>

                  <Route path={'menu'} index element={<Menu />}/>
                  <Route path={'cold'} element={<ColdCoffee />}/>

                  <Route path={'checkF'} element={<FormCheck />}/>
                  <Route path={'formerror'} element={<FormError />}/>
              </Routes>
          </div>

  );
}

export default App;
