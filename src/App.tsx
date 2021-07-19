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
import Complex from 'complex-js';

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
  otherValues: Array<any>,
  symbols: Array<any>,
  trigValues: Array<any>,
  arithmeticOperations: Array<any>,
  builtMathFunctions: Array<any>,
  advancedOperations: Array<any>,
  headerControllers: Array<any>,
  headerSwitchers: Array<any>,
  allFunctions: Array<any>,
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
          value: 7,
          value1:"u",
          label: "O"
        },
        {
          value: 8,
          value1:"v",
          label: "P"
        },
        {
          value: 9,
          value1:"w",
          label: "Q"
        },
        {
          value: 4,
          value1:"L4",
          label: "T"
        },
        {
          value: 5,
          value1:"L5",
          label: "U"
        },
        {
          value: 6,
          value1:"L6",
          label: "V"
        },
        {
          value: 1,
          value1:"L1",
          label: "Y"
        },
        {
          value: 2,
          value1:"L2",
          label: "Z"
        },
        {
          value: 3,
          value1:"L3",
          label: "Ø"
        },
      ],
      otherValues: [
        {
          value: "0",
          value1:"~",
          label: "Catalog"
        },
        {
          value: ".",
          value1:":",
          label: "i"
        },
        {
          value: "(-)",
          value1:"?",
          label: "Ans"
        },
      ],
      symbols: [
        {
          value: ",",
          value1:"J",
          label: "EE"
        },
        {
          value: "(",
          value1:"K",
          label: "{"
        },
        {
          value: ")",
          value1:"L",
          label: "}"
        },
      ],
      trigValues: [
        {
          value: "sin",
          value1:"sin^-1",
          label: "E"
        },
        {
          value: "cos",
          value1:"cos^-1",
          label: "F"
        },
        {
          value: "tan",
          value1:"tan^-1",
          label: "G"
        },
      ],
      arithmeticOperations: [
        {
          value: "^",
          value1:"H",
          label: "π"
        },
        {
          value: "/",
          value1:"e",
          label: "M"
        },
        {
          value: "*",
          value1:"[",
          label: "R"
        },
        {
          value: "-",
          value1:"]",
          label: "W"
        },
        {
          value: "+",
          value1:"MEM",
          label: "''"
        },
      ],
      builtMathFunctions:[
        {
          value: "x^-1",
          value1:"MATRIX",
          label: "D"
        },
        {
          value: "x^2",
          value1:"sqrt",
          label: "I"
        },
        {
          value: "log",
          value1:"10^x N",
          label: "R"
        },
        {
          value: "ln",
          value1:"e^x",
          label: "S"
        },
        {
          value: "sto>",
          value1:"rcl",
          label: "X"
        },
      ],
      advancedOperations: [
        {
          value: "MATH",
          value1:"TEST",
          label: "A"
        },
        {
          value: "APPS",
          value1:"ANGLE",
          label: "B"
        },
        {
          value: "PRGM",
          value1:"DRAW",
          label: "C"
        },
        {
          value: "VARS",
          value1:"DIST",
        },
        {
          value: "CLEAR",
        },
      ],
      headerControllers: [
        {
          value: "MODE",
          value1: "QUIT",
          label: ""
        },
        {
          value: "DEL",
          value1: "INS",
        },
        {
          value: "X,T,Ø,n",
          value1: "LINK",
        },
        {
          value: "STAT",
          value1: "LIST",
        },
      ],
      headerSwitchers: [
        {
          value: "2ND",
        },
        {
          value: "ALPHA",
          value1:"A-CLOCK"
        },
      ],
      allFunctions:[
        {
          value: "Y=",
          value1:"STAT PLOT",
          label:"F1",
        },
        {
          value: "WINDOW",
          value1:"TBLSET",
          label:"F2",
        },
        {
          value: "ZOOM",
          value1:"FORMAT",
          label:"F3",
        },
        {
          value1:"CALC",
          value: "TRACE",
          label: "F4",
        },
        {
          value: "GRAPH",
          value1:"TABLE",
          label:" F5",
        }
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
    if (value === "(-)") {
      this.setState({
        str: this.state.str+"-"
      })
    } else {
      this.setState({
        str: this.state.str+value
      })
    }
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


    if (this.isMathematicalExp(this.state.str)
      || this.state.str.includes("ln")
      || this.state.str.includes("log")
      || this.state.str.includes("x^2")
      || this.state.str.includes("x^-1")
    ) {

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

  getBuiltMathFunctions(func: any) {
    this.setState({
      str: this.state.str+func
    })
  }

  setPlots(plot: any) {
    this.setState({
      str: this.state.str+plot
    })
  }

  getHeaderSwitchers(switcher: any) {
    this.setState({
      str: this.state.str+switcher
    })
  }

  getHeaderControllers(controller: any) {
    this.setState({
      str: this.state.str+controller
    })
  }
  
  render() {
    const {allFunctions, headerSwitchers, headerControllers, trigValues, arithmeticOperations, builtMathFunctions, advancedOperations } = this.state;
    const propsContents = {
      trigValues: trigValues,
      getTrigFunc: this.getTrigFunc.bind(this),
      symbols: this.state.symbols,
      getSymbols: this.getSymbols.bind(this),
      otherValues: this.state.otherValues,
      getOtherValues: this.getOtherValues.bind(this),
      numericalValues: this.state.numericalValues,
      getNumericalValues: this.getNumericalValues.bind(this),
      arithmeticOperations: arithmeticOperations,
      getArithmeticOperations: this.getArithmeticOperations.bind(this),
      open: this.open.bind(this),
      toggle: this.state.toggle,
      getResults: this.getResults.bind(this),
      builtMathFunctions: builtMathFunctions,
      getBuiltMathFunctions: this.getBuiltMathFunctions.bind(this),
    }

    const playgroundProps = {
      focuserBar: this.state.focuserBar,
      input: this.state.str,
      done: this.state.done,
      clear: this.state.clear,
      expressions: this.state.expressions
    }

    const advancedOperationsProps = {
      allAdvancedOptions:advancedOperations,
      getAdvancedOption: this.getAdvancedOption.bind(this)
    }

    const headerControllersProps = {
      headerControllers: headerControllers,
      getHeaderControllers: this.getHeaderControllers.bind(this),
      getHeaderSwitchers: this.getHeaderSwitchers.bind(this),
      headerSwitchers: headerSwitchers
    }

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
                        {...playgroundProps}
                      />
                    </>
                  }
                </div>
              </section>
              <section>
                <ul>
                  <Functions
                    allFunctions={allFunctions}
                    setPlots={this.setPlots.bind(this)}
                  />
                </ul>
              </section>
            </div>
            <div className="content">
              <section className="header-1">
                <Header1
                  {...headerControllersProps}
                />
               </section>
                <section className="advanced-operations">
                <AdvancedOperations
                 {...advancedOperationsProps}
                />
                </section>
                
              <section className="basics_operations_content">
                <Content {...propsContents}/>
              </section>
            </div>
          </div>
         </Router>
        </div>
    )
  }
}
export default App;
