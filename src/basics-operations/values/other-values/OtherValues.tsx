import  { Component } from 'react'
import { renderItemsList } from '../../../helpers/renderList';
import "./OtherValues.css"

export interface OtherValuesProps {
  getOtherValues: any,
  otherValues: any,
  secondFuncOn: boolean
}
 
class OtherValues extends Component<OtherValuesProps,{}> {
  constructor(props: OtherValuesProps) {
    super(props);
  }
  render() {
    const { otherValues, getOtherValues, secondFuncOn } = this.props;
    return (
      <ul className="other_values_container">{
          renderItemsList(otherValues, getOtherValues, secondFuncOn)
        }
      </ul>
    );
  }
}
export default OtherValues;