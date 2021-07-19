import  { Component } from 'react'
import { renderItemsList } from '../../../helpers/renderList';
import "./OtherValues.css"

export interface OtherValuesProps {
  getOtherValues: any,
  otherValues: any,
  secondFuncOn: boolean
}
 
export interface OtherValuesState {
}
 
class OtherValues extends Component<OtherValuesProps, OtherValuesState> {
  constructor(props: OtherValuesProps) {
    super(props);
    this.state = {   };
  }
  render() {
    const { otherValues, getOtherValues, secondFuncOn } = this.props;
    return (
      <ul className="other_values_container">
        {
          renderItemsList(otherValues, getOtherValues, secondFuncOn)
        }
      </ul>
      );
  }
}
export default OtherValues;