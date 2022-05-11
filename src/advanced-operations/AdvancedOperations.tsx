import { Component, MouseEventHandler } from 'react';
import { renderItemsList } from '../helpers/renderList';
export interface AdvancedOperationsProps {
  allAdvancedOptions: Array<any>,
  getAdvancedOption: MouseEventHandler<HTMLButtonElement>,
  secondFuncOn: boolean
}
class AdvancedOperations extends Component<AdvancedOperationsProps, {}> {
  render() {
    const {allAdvancedOptions, getAdvancedOption, secondFuncOn} = this.props;
    return (
      <ul className="advanced_operations_content">
          {renderItemsList(allAdvancedOptions, getAdvancedOption, secondFuncOn)}
      </ul>
    )
  }
}
export default AdvancedOperations;