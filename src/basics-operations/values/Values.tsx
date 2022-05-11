import { Component, MouseEventHandler } from 'react';
import "./Values.css"
import NumericalValues from './numerical-values/Numerical-Values';
import OtherValues from './other-values/OtherValues';
import Symbols from './trig-values-and-symbols/Symbols';
import TrigValues from './trig-values-and-symbols/TrigValues';
import { ValuesContext } from '../../context';
 
export default class Values extends Component{
  render() {
    return (
        <ValuesContext.Consumer>
          {({values})=>(
            values && 
            <div className="values_container">
              <section>
                <TrigValues
                  secondFuncOn={values.secondFuncOn}
                  trigFunctions={values.trigValues}
                  getTrigFunc={values.getTrigFunc}
                />
                <Symbols
                  secondFuncOn={values.secondFuncOn}
                  symbols={values.symbols}
                  getSymbols={values.getSymbols}
                />
              </section>
              <section>
                <NumericalValues
                  secondFuncOn={values.secondFuncOn}
                  numericalValues={values.numericalValues}
                  getNumericalValues={values.getNumericalValues}
                />
                <OtherValues
                  secondFuncOn={values.secondFuncOn}
                  otherValues={values.otherValues}
                  getOtherValues={values.getOtherValues}
                />
              </section>
            </div>
          )}
        </ValuesContext.Consumer>
      );
  }
}

Values.contextType = ValuesContext