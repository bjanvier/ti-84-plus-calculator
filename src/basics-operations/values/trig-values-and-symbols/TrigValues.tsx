import { Component, MouseEventHandler } from 'react';
import { renderItemsList } from '../../../helpers/renderList';

export interface TrigValuesProps {
  trigFunctions: Array<any>,
  getTrigFunc: MouseEventHandler<HTMLButtonElement>,
  secondFuncOn: boolean
}
 
export interface TrigValuesState {
}
 
class TrigValues extends Component<TrigValuesProps, TrigValuesState> {
  constructor(props: TrigValuesProps) {
    super(props);
    this.state = {  };
  }

  render() {
    const { trigFunctions, getTrigFunc, secondFuncOn} = this.props
    return (
        <ul className="trig_values_container">
          {
           renderItemsList(trigFunctions, getTrigFunc, secondFuncOn)
          }
      </ul>
      );
  }
}
export default TrigValues;