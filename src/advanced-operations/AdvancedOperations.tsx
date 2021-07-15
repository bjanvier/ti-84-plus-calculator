import * as React from 'react';
import { Component } from 'react';
export interface AdcancedOperationsProps {
  allAdvancedOptions: Array<any>,
  getAdvancedOption: any
}
export interface AdcancedOperationsState {
}
 
class AdvancedOperations extends Component<AdcancedOperationsProps, AdcancedOperationsState> {
  constructor(props: AdcancedOperationsProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <ul className="advanced_operations_content">
        {
            this.props.allAdvancedOptions.map((item: any) => {
            return (
              <li>
                <button style={{color:"wheat"}} 
                  onClick={()=>this.props.getAdvancedOption(item)}
                >
                  {item}
                </button>
              </li>
              
            )
          })
        }
    </ul>
    )
  }
}
export default AdvancedOperations;