import { Component, MouseEventHandler } from 'react';
import { renderItemsList } from '../helpers/renderList';
export interface AdcancedOperationsProps {
  allAdvancedOptions: Array<any>,
  getAdvancedOption: MouseEventHandler<HTMLButtonElement> 
}
export interface AdcancedOperationsState {
}
 
class AdvancedOperations extends Component<AdcancedOperationsProps, AdcancedOperationsState> {
  constructor(props: AdcancedOperationsProps) {
    super(props);
    this.state = {};
  }

  render() {
    const {allAdvancedOptions, getAdvancedOption} = this.props;
    return (
    <ul className="advanced_operations_content">
        {
          renderItemsList(allAdvancedOptions, getAdvancedOption, "advanced")
        }
    </ul>
    )
  }
}
export default AdvancedOperations;