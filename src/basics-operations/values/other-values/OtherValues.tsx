import  { Component } from 'react'
import { renderItemsList } from '../../../helpers/renderList';
import "./OtherValues.css"

export interface OtherValuesProps {
  getOtherValues: any,
  otherValues:any
}
 
export interface OtherValuesState {
}
 
class OtherValues extends Component<OtherValuesProps, OtherValuesState> {
  constructor(props: OtherValuesProps) {
    super(props);
    this.state = {   };
  }
  render() {
    const { otherValues, getOtherValues } = this.props;
    return (
      <ul className="other_values_container">
        {
          renderItemsList(otherValues, getOtherValues)
        }
      </ul>
      );
  }
}
export default OtherValues;