import React from 'react';
import './App.css';
import {Switch,Route,Link} from "react-router-dom";
import About from './About';
import Bm from './bm';
import Team from './team';
import Home from "./Home";

function App() {
  return (
    <div>
     <Switch>
       <Route path="/about"><Home/></Route>
       <Route path="/team"><Team/></Route>
       <Route path="/business"><Bm/></Route>
       <Route path="/features"><Home/></Route>
       <Route path="/hiring"><Home/></Route>
       <Route path="/"><Home/></Route>

     </Switch>
    
    </div>
  );
}

export default App;
