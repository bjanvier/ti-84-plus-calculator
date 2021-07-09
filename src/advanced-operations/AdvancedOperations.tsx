import * as React from 'react';
import { Component } from 'react';


export interface AdcancedOperationsProps {
  
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
          ["MATH", "APPS", "PRGM", "VARS", "CLEAR"].map((item: any) => {
            return (
              <li style={{color:"red"}} >
                <button>
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