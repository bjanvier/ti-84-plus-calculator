import "./numerical-values.css"

import  { Component } from 'react'
import { renderItemsList } from "../../../helpers/renderList";

export interface NumericalValuesProps {
  getNumericalValues: any,
  numericalValues: Array<any>,
  secondFuncOn: boolean
}
 
export interface NumericalValuesState {
}
 
class NumericalValues extends Component<NumericalValuesProps, NumericalValuesState> {
  constructor(props: NumericalValuesProps) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { numericalValues, getNumericalValues, secondFuncOn} = this.props
    return (
      <ul className="numerical_values_container">
        {
          renderItemsList(numericalValues, getNumericalValues, secondFuncOn)
        }
      </ul>
    );
  }
}
 
export default NumericalValues;