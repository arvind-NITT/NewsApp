
import './App.css';

import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
export default function App() {
 const pagesize=12;
  
  
    return (
      <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
        <News   pageSize = {pagesize} category ="general"/>
          </Route>
          <Route exact path="/business">
          <News pageSize = {pagesize} category ="business"/>
          </Route>
          <Route exact path="/entertainment">
          <News  pageSize = {pagesize} category ="entertainment"/>
          </Route>
          <Route exact path="/general">
          <News  pageSize = {pagesize} category ="general"/>
          </Route>
          <Route exact path="/health">
          <News  pageSize = {pagesize} category ="health"/>
          </Route>
          <Route exact path="/science">
          <News  pageSize = {pagesize} category ="science"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports"  pageSize = {pagesize} category ="sports"/>
          </Route>
          <Route exact path="/technology">
          <News  pageSize = {pagesize} category ="technology"/>
          </Route>
        </Switch>
      </div>
      </Router>
    )
  
}



