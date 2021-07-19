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
    return (
      <div className="values_container">
        <section>
          <TrigValues
            trigFunctions={this.state.trigFunctions}
            getTrigFunc={this.props.getTrigFunc}
          />
          <Symbols
            symbols={this.state.symbols}
            getSymbols={this.props.getSymbols}
          />
        </section>
        <section>
          <NumericalValues
            numericalValues={this.state.numericalValues}
            getNumericalValues={this.props.getNumericalValues}
          />
          <OtherValues
            otherValues={this.state.otherValues}
            getOtherValues={this.props.getOtherValues}
          />
        </section>
      </div>
      );
  }
}
 
export default Values;