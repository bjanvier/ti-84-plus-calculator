import "./numerical-values.css"

import React, { Component } from 'react'


export interface NumericalValuesProps {
  getNumericalValues: any,
  numericalValues: Array<any>
}
 
export interface NumericalValuesState {
}
 
class NumericalValues extends React.Component<NumericalValuesProps, NumericalValuesState> {
  constructor(props: NumericalValuesProps) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ul className="numerical_values_container">
        {
          this.props.numericalValues.map((num: any) => {
            return (
              <li key={num.value.toString()}>
                  {num.label}<br/>
                  <button
                    onClick={() => this.props.getNumericalValues(num.value.toString())}>
                  {num.value}
                </button>
            </li>
           )
          })
        }
      </ul>
    );
  }
}
 
export default NumericalValues;