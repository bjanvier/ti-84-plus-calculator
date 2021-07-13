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

interface AppProps{
}
interface AppState{
  on: boolean,
  str: string,
  numericalValues: Array<any>
}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      on: false,
      str: "",
      numericalValues: [
        {
          value: 9,
          label: <label>w Q</label>
        },
        {
          value: 8,
          label: <label>v P</label>
        },
        {
          value: 7,
          label: <label>u O</label>
        },
        {
          value: 6,
          label: <label>L6 V</label>
        },
        {
          value: 5,
          label: <label>L5 U</label>
        },
        {
          value: 4,
          label: <label>L4 T</label>
        },
        {
          value: 3,
          label: <label>L3 Ø</label>
        },
        {
          value: 2,
          label: <label>L2 Z</label>
        },
        {
          value: 1,
          label: <label>L1 Y</label>
        },
      ]
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
    this.setState({
      str: this.state.str+tf
    })
  }

  getSymbols(symbol: any) {
    console.log(symbol)
    this.setState({
      str: this.state.str+symbol
    })
  }

  getOtherValues(value: any) {
    this.setState({
      str: this.state.str+value
    })
  }

  getNumericalValues(num: any) {
    this.setState({
      str: this.state.str+num
    })
  }

  getArithmeticOperations(operation:any) {
    this.setState({
      str: this.state.str+operation
    })
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
                        expression={this.state.str}
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
                <section className="advanced-operations">
                  <AdvancedOperations/>
                </section>
                
              <section className="basics_operations_content">
                <Content
                  trigValues={["SIN", "COS", "TAN"]}
                  getTrigFunc={this.getTrigFunc.bind(this)}
                  symbols={[",", "(", ")"]}
                  getSymbols={this.getSymbols.bind(this)}
                  otherValues={["0", ",", "(-)"]}
                  getOtherValues={this.getOtherValues.bind(this)}
                  numericalValues={this.state.numericalValues}
                  getNumericalValues={this.getNumericalValues.bind(this)}
                  arithmeticOperations={["/", "+", "-", "*"]}
                  getArithmeticOperations={this.getArithmeticOperations.bind(this)}
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
