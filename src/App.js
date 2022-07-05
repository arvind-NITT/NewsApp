
import './App.css';

import React ,{useState} from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
export default function App() {
 const pagesize=12;
 const [ mode ,setmode]=useState("Light");
 const [ Flag ,setFalg]=useState(1);
 function changeMode(){
   if(mode==="Light")
  setmode("Dark");
  else 
  setmode("Light");
 }
 function RestoreMode(){
  if(mode==="Light")
  setFalg(1)
  else{
   setFalg(0)
  }
 }
  
    return (
      <Router>
      <div>
        <NavBar RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
        <Switch>
          <Route exact path="/">
        <News key="general"   pageSize = {pagesize} category ="general" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
          <Route exact path="/business">
          <News key="business" pageSize = {pagesize} category ="business" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
          <Route strict exact path="/entertainment">
          <News key="entertainment" pageSize = {pagesize} category ="entertainment" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
          <Route exact path="/general">
          <News key="Gen" pageSize = {pagesize} category ="general" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
          <Route exact path="/health">
          <News key="health"  pageSize = {pagesize} category ="health" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
          <Route exact path="/science">
          <News key="science" pageSize = {pagesize} category ="science" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
          <Route exact path="/sports">
          <News key="sports"  pageSize = {pagesize} category ="sports" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
          <Route exact path="/technology">
          <News key="technology" pageSize = {pagesize} category ="technology" Flag={Flag} RestoreMode={RestoreMode} changeMode={changeMode} mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    )
  
}



