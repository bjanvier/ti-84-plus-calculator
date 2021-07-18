import * as React from 'react';
import { MouseEventHandler } from 'react';
import { renderItemsList } from '../../helpers/renderList';
import "./Assignment.css"
export interface AssignmentsProps {
  arithmeticOperations: Array<any>,
  getArithmeticOperations: any,
  getResults: MouseEventHandler<HTMLButtonElement> | undefined,
}
 
export interface AssignmentsState {
  
}
 
class Assignments extends React.Component<AssignmentsProps, AssignmentsState> {
  constructor(props: AssignmentsProps) {
    super(props);
    this.state = {  };
  }
  render() {
    const { getArithmeticOperations, arithmeticOperations } = this.props;
    return (
      <div className="assignments">
      
        <ul className="arithmetic_operations">
          {
            renderItemsList(arithmeticOperations, getArithmeticOperations, "assignments")
          }
          <li className="">
              <button onClick={this.props.getResults}  style={{padding: "20px 0",}}>
                  <strong>Enter</strong>
              </button>
            </li>
       </ul>
      </div>
     );
  }
}
 
export default Assignments;