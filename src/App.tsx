import { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import Functions from './functions/Functions';
import Header1 from './header-1/Header1';
import Content from './basics-operations/Content';
import AdvancedOperations from './advanced-operations/AdvancedOperations';
import Playground from './playground/Playground';
import Switcher from './Switcher';
import DataSource from './DataSource';

const Data = DataSource(
  Playground,
  '2+2*sin(6)'
);


var str: string = "";

interface AppProps{

}
interface AppState{
  on: boolean
}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      on: false
    }
  }

  open():void {
    this.setState(state => {
      const on: boolean = !state.on;
      return {
        on
      }
    })
  }

  getTrigFunc(tf: any) {
    str += tf;
    console.log(str)
  }

  render() {
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
                  {
                    this.state.on &&
                    <>
                      <Playground
                        expression={'2+2*sin(6)'}
                      />
                    </>
                  }
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
                <Header1/>
               </section>
  
                <section className="header-2">
                </section>
                    
                <section className="advanced-operations">
                  <AdvancedOperations/>
                </section>
                
              <section className="basics_operations_content">
                <Content
                  trigValues={["SIN", "COS", "TAN"]}
                 getTrigFunc={this.getTrigFunc.bind(this)}

                />
                <Switcher
                  open={this.open.bind(this)}
                  toggle={this.state.on}
                />
              </section>
            </div>
          </div>
         </Router>
        </div>
    )
  }
}

export default App;
