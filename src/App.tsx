import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Functions from './functions/Functions';


function App() {
  return (
    <div className="App">
    <Router>
        <div className="container">
          <div className="header">
            <section>
              <div>
                <h1>TI-84 Plus</h1>
                <h2>TEXAS INSTRUMENTS</h2>
              </div>
              <div className="playground">
              </div>
            </section>
            <section>
              <ul>
                <Functions/>
              </ul>
            </section>
          </div>
          <div className="content">
            <section className="header-1">
              </section>

              <section className="header-2">
              </section>
                  
              <section className="advanced-operations">
              </section>
              
              <section className="basics-operations">
              </section>
          </div>

       </div>
       </Router>
    </div>
  );
}

export default App;
