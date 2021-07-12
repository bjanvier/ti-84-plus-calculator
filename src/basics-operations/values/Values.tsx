import { Component } from 'react';
import "./Values.css"
import NumericalValues from './numerical-values/Numerical-Values';
import OtherValues from './other-values/OtherValues';
import Symbols from './trig-values-and-symbols/Symbols';
import TrigValues from './trig-values-and-symbols/TrigValues';


export interface ValuesProps {
  trigValues: string[],
  getTrigFunc: any
}
 
export interface ValuesState {
  trigFunctions: any[]
}


class Values extends Component<ValuesProps, ValuesState> {
  constructor(props: ValuesProps) {
    super(props);
    this.state = {
      trigFunctions: this.props.trigValues,
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
          <Symbols />
        </section>
        <section>
          <NumericalValues/>
          <OtherValues />
        </section>
      </div>
      );
  }
}
 
export default Values;