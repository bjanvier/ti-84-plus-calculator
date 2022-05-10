import { Component, MouseEventHandler } from 'react';
import "./Values.css"
import NumericalValues from './numerical-values/Numerical-Values';
import OtherValues from './other-values/OtherValues';
import Symbols from './trig-values-and-symbols/Symbols';
import TrigValues from './trig-values-and-symbols/TrigValues';


export interface ValuesProps {
  trigValues: string[],
  getTrigFunc: MouseEventHandler<HTMLButtonElement>,
  symbols: any[]
  getSymbols: MouseEventHandler<HTMLButtonElement>,
  otherValues: any[],
  getOtherValues: MouseEventHandler<HTMLButtonElement>,
  numericalValues: any[]
  getNumericalValues: MouseEventHandler<HTMLButtonElement>
  secondFuncOn: boolean
}
 
export interface ValuesState {
  trigFunctions: any[],
  symbols: any[],
  otherValues: any[],
  numericalValues: any[]
}

class Values extends Component<ValuesProps, ValuesState> {
  constructor(props: ValuesProps) {
    super(props);
    this.state = {
      trigFunctions: this.props.trigValues,
      symbols: this.props.symbols,
      otherValues: this.props.otherValues,
      numericalValues: this.props.numericalValues
     };
  }

  render() {
    const {secondFuncOn,symbols, getSymbols, getTrigFunc,getNumericalValues, getOtherValues } = this.props
    const {trigFunctions,numericalValues,otherValues } = this.state

    return (
      <div className="values_container">
        <section>
          <TrigValues
            secondFuncOn={secondFuncOn}
            trigFunctions={trigFunctions}
            getTrigFunc={getTrigFunc}
          />
          <Symbols
            secondFuncOn={secondFuncOn}
            symbols={symbols}
            getSymbols={getSymbols}
          />
        </section>
        <section>
          <NumericalValues
            secondFuncOn={secondFuncOn}
            numericalValues={numericalValues}
            getNumericalValues={getNumericalValues}
          />
          <OtherValues
            secondFuncOn={secondFuncOn}
            otherValues={otherValues}
            getOtherValues={getOtherValues}
          />
        </section>
      </div>
      );
  }
}
 
export default Values;