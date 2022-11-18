import { Component } from 'react';
import './App.css';
import Functions from './functions/Functions';
import Header1 from './header-1/Header1';
import AdvancedOperations from './advanced-operations/AdvancedOperations';
import Playground from './playground/Playground';
import Complex from 'complex-js';
import { DATA, ButtonValues } from './data';
import { AssignmentContext, PlaygroundContext, SidebarContext, ValuesContext } from './context';
import Assignments from './basics-operations/assignments/Assignments';
import Values from './basics-operations/values/Values';
import Sidebar from './basics-operations/sidebar/Sidebar';
interface AnyArray<A>{
  arr: A[]
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
  otherValues: Array<ButtonValues>,
  symbols: Array<ButtonValues>,
  trigValues: Array<ButtonValues>,
  arithmeticOperations: Array<ButtonValues>,
  builtMathFunctions: Array<ButtonValues>,
  advancedOperations: Array<Partial<ButtonValues>>,
  allFunctions: Array<ButtonValues>,
  headerControllers: Array<ButtonValues>,
  headerSwitchers: Array<ButtonValues>,
  secondFuncOn: boolean,
  counter: number,
}
class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    const requiredData = DATA.requiredData
    const optionalData = DATA.optionalData
    this.state = {
      counter: 0,
      secondFuncOn: false,
      expressions: [],
      on: false,
      done: false,
      str: "",
      focuserBar:"",
      toggle: false,
      clear: false,
      numericalValues: requiredData.numericalValues,
      otherValues:requiredData.otherValues,
      symbols: requiredData.symbols,
      trigValues: requiredData.trigFunctions,
      arithmeticOperations: requiredData.arithmeticOperations,
      builtMathFunctions: requiredData.builtMathFunctions,
      advancedOperations:optionalData.advancedOperations,
      headerControllers: optionalData.headerControllers,
      headerSwitchers:optionalData.headerSwitchers,
      allFunctions:requiredData.allFunctions
    }
  }

  open =()=> {
    this.incrementCounter()

    this.resetSecondFunction();

    if (this.state.expressions.length === 0) {
      this.setState({ focuserBar: "|"})
    }
      this.setState(state => ({
        on:!state.on
      }))
  }

  getTrigFunc = (tf: any) =>{
    this.incrementCounter()
    this.resetSecondFunction();

    this.setState({
      str: this.state.str+tf
    })
  }

  getSymbols = (symbol: any) =>{
    this.incrementCounter();
    this.resetSecondFunction();

    console.log(symbol)
    this.setState({
      str: this.state.str+symbol
    })
  }

  getOtherValues = (value: any) => {
    this.incrementCounter();
    this.resetSecondFunction();

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

  getNumericalValues = (num: any)=> {
    this.incrementCounter();
    this.resetSecondFunction();

    this.setState({
      str: this.state.str+num
    })
  }

  getArithmeticOperations = (operation: any) => {
    this.incrementCounter();
    this.resetSecondFunction();
    
    this.setState({
      str: this.state.str+operation
    })
  }
  
  getAdvancedOption = (option: any) => {
    this.incrementCounter();
    this.resetSecondFunction();

    if (option === "CLEAR") {

      this.setState((_state) => {
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
  
  isMathematicalExp = (str: string) => {
    try {
      Complex.compile(str);
    } catch (error) {
      return false;
    }
    return true;
  }

  getResults =()=> {
    const { expressions, str } = this.state;

    this.incrementCounter()
    this.resetSecondFunction();

    if (this.isMathematicalExp(str)
      || str.includes("ln")
      || str.includes("log")
      || str.includes("x^2")
      || str.includes("x^-1")
    ) {
      //Save the input values before evaluating them
      expressions.push(str);
      
      console.log(expressions);
    
      this.setState({done: true, str: ''})
    }  else {
      this.setState({
        str: "ERROR"
      })
    }
  }

  getBuiltMathFunctions = (func: any)=> {
    this.resetSecondFunction();
    this.incrementCounter();
    this.setState({
      str: this.state.str+func
    })
  }

  setPlots = (plot: any) => {
    this.incrementCounter();
    this.resetSecondFunction()
    this.setState({
      str: this.state.str+plot
    })
  }

  //Reset second function button to false once the user clicks more than one button
  //after it was activated
  resetSecondFunction = () => {
    const { secondFuncOn, counter } = this.state;
    
    if (secondFuncOn && counter >= 1) {
      this.setState({
         secondFuncOn: false,
         counter: 0
      })
    }
  }

  incrementCounter = () => {
    return this.setState({
      counter: this.state.counter+1
    })
  }

  getHeaderSwitchers = (switcher: any)=> {
    this.incrementCounter();
    this.resetSecondFunction();

    if (switcher === "2ND") {
       this.setState(state => ({
        secondFuncOn: !state.secondFuncOn
      }))
    }
  }

  getHeaderControllers = (controller: any) => {
    this.resetSecondFunction();
    this.incrementCounter()

    this.setState({
      str: this.state.str+controller
    })
  }
  
  render() {
    const {
      secondFuncOn,
      allFunctions,
      headerSwitchers,
      headerControllers, trigValues, arithmeticOperations,
      builtMathFunctions, advancedOperations,
      otherValues, symbols, numericalValues,
      toggle, done, clear,
    str, focuserBar, expressions } = this.state;

    const playgroundProps = {
      focuserBar: focuserBar,
      input: str,
      done: done,
      clear: clear,
      expressions: expressions
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
          <div className="container">
            <div className="header">
              <section>
                  <h1>TI-84 Plus</h1>
                  <h2>TEXAS INSTRUMENTS</h2>
                <div className="playground">
                  {
                    this.state.on &&
                    <PlaygroundContext.Provider value={{playground: playgroundProps}}>
                      <Playground />
                    </PlaygroundContext.Provider>
                  }
                </div>
              </section>
              <section>
                <ul>
                  <Functions
                    secondFuncOn={secondFuncOn}
                    allFunctions={allFunctions}
                    setPlots={this.setPlots.bind(this)}
                  />
                </ul>
              </section>
            </div>
            <div className="content">
              <section className="header-1">
                <Header1
                  secondFuncOn={secondFuncOn}
                  {...headerControllersProps}
                />
               </section>
                <section className="advanced-operations">
                <AdvancedOperations
                  secondFuncOn={secondFuncOn}
                  {...advancedOperationsProps}
                />
                </section>
                
              <section className="basics_operations_content">
                <SidebarContext.Provider
                  value={{values: {
                    open: this.open,
                    toggle,
                    builtMathFunctions,
                    getBuiltMathFunctions: this.getBuiltMathFunctions,
                    secondFuncOn
                  }}}>
                  <Sidebar/>
                </SidebarContext.Provider>
                <ValuesContext.Provider value={
                  {values: 
                    {
                      trigValues, getTrigFunc: this.getTrigFunc,
                      symbols, getSymbols: this.getSymbols,
                      otherValues, getOtherValues: this.getOtherValues,
                      numericalValues, getNumericalValues: this.getNumericalValues,
                      secondFuncOn
                    }
                  }}>
                  <Values/>
                </ValuesContext.Provider>
                <AssignmentContext.Provider value={{assignments: {getResults:this.getResults, arithmeticOperations, getArithmeticOperations:this.getArithmeticOperations, secondFuncOn}}}>
                  <Assignments/>
                </AssignmentContext.Provider>
              </section>
            </div>
          </div>
        </div>
    )
  }
}
export default App;
