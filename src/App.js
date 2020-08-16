import React from 'react';
import './App.css';
import {Switch,Route,Link} from "react-router-dom";
import About from './About';
import Bm from './bm';
import Team from './team';

function App() {
  return (
    <div>
     <Switch>
       <Route path="/about"><About/></Route>
       <Route path="/team"><Team/></Route>
       <Route path="/business"><Bm/></Route>
       <Route path="/features"><About/></Route>
       <Route path="/hiring"><About/></Route>
       <Route path="/"><About/></Route>

     </Switch>
    
    </div>
  );
}

export default App;
