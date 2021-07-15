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
import DataSource from './DataSource';
import Complex from 'complex-js';
import * as math from 'mathjs';

const parser = math.parser()
interface AppProps{
}
interface AppState{
  on: boolean,
  str: string,
  expressions:string[],
  numericalValues: Array<any>,
  done: boolean,
  toggle: boolean,
  clear: boolean,
  focuserBar: string,
}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      expressions: [],
      on: false,
      done: false,
      str: "",
      focuserBar:"",
      toggle: false,
      clear: false,
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

  open(): void {
    if (this.state.expressions.length === 0) {
      this.setState({ focuserBar: "|"})
    }
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
  
  getAdvancedOption(option: any) {
    if (option === "CLEAR") {

      this.setState((state) => {
        var clear: boolean = true;
        const str = "";
        const expressions:Array<string> = []
        
        return {clear, str, expressions}
      })
    } else {
      this.setState({
        str: option
      })
    }
  }

  
  isMathematicalExp(str: string) {
    try {
      Complex.compile(str);
    } catch (error) {
      return false;
    }
    return true;
  }

  getResults() {
    const { expressions, str } = this.state;


    if (this.isMathematicalExp(this.state.str)) {

      //Save the input values before evaluating them
      expressions.push(str);
      
      console.log(expressions);
      this.setState((state:any) => {
        const done: boolean = true
        //reset the str to be able of receiving a new value
        const str: string = "";
        return { done, str}
      })
    }  else {
      this.setState({
        str: "ERROR"
      })
    }
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
                        focuserBar={this.state.focuserBar}
                        input={this.state.str}
                        done={this.state.done}
                        clear={this.state.clear}
                        expressions={this.state.expressions}
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
                <AdvancedOperations
                  allAdvancedOptions={["MATH", "APPS", "PRGM", "VARS", "CLEAR"]}
                  getAdvancedOption={this.getAdvancedOption.bind(this)}
                />
                </section>
                
              <section className="basics_operations_content">
                <Content
                  trigValues={["sin", "cos", "tan"]}
                  getTrigFunc={this.getTrigFunc.bind(this)}
                  symbols={[",", "(", ")"]}
                  getSymbols={this.getSymbols.bind(this)}
                  otherValues={["0", ",", "(-)"]}
                  getOtherValues={this.getOtherValues.bind(this)}
                  numericalValues={this.state.numericalValues}
                  getNumericalValues={this.getNumericalValues.bind(this)}
                  arithmeticOperations={["/", "+", "-", "*"]}
                  getArithmeticOperations={this.getArithmeticOperations.bind(this)}

                  open={this.open.bind(this)}
                  toggle={this.state.toggle}
                  getResults={this.getResults.bind(this)}
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
