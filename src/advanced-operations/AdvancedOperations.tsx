import { Component, MouseEventHandler } from 'react';
import { renderItemsList } from '../helpers/renderList';
export interface AdvancedOperationsProps {
  allAdvancedOptions: Array<any>,
  getAdvancedOption: MouseEventHandler<HTMLButtonElement> 
}
export interface AdvancedOperationsState {
}
 
class AdvancedOperations extends Component<AdvancedOperationsProps, AdvancedOperationsState> {
  constructor(props: AdvancedOperationsProps) {
    super(props);
    this.state = {};
  }

  render() {
    const {allAdvancedOptions, getAdvancedOption} = this.props;
    return (
    <ul className="advanced_operations_content">
        {
          renderItemsList(allAdvancedOptions, getAdvancedOption)
        }
    </ul>
    )
  }
}
export default AdvancedOperations;