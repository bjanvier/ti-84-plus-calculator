import * as React from 'react';
import { Component } from 'react';
import "./Values.css"
import NumericalValues from './numerical-values/Numerical-Values';
import OtherValues from './other-values/OtherValues';
import Symbols from './trig-values-and-symbols/Symbols';
import TrigValues from './trig-values-and-symbols/TrigValues';


export interface ValuesProps {
  
}
 
export interface ValuesState {
  
}
 
class Values extends React.Component<ValuesProps, ValuesState> {
  constructor(props: ValuesProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return (
      <div className="values_container">
        <section>
          <TrigValues />
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