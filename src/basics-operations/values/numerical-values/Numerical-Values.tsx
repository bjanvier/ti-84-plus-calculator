import "./numerical-values.css"

import React, { Component } from 'react'
import { renderItemsList } from "../../../helpers/renderList";

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
    const { numericalValues, getNumericalValues} = this.props
    return (
      <ul className="numerical_values_container">
        {
          renderItemsList(numericalValues, getNumericalValues, "returns only numerical values from 1 to 9")
        }
      </ul>
    );
  }
}
 
export default NumericalValues;