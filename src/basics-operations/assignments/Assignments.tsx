import * as React from 'react';
import "./Assignment.css"
export interface AssignmentsProps {
  arithmeticOperations: Array<any>,
  getArithmeticOperations: any
}
 
export interface AssignmentsState {
  
}
 
class Assignments extends React.Component<AssignmentsProps, AssignmentsState> {
  constructor(props: AssignmentsProps) {
    super(props);
    this.state = {  };
  }
  render() { 
    return (
      <div className="assignments">
      
      <ul className="arithmetic_operations">
      <li>
          <button style={{color:"white", background:"black"}}>^</button>
        </li>
         {
            this.props.arithmeticOperations.map((operation: any) => {
              return (
                <li key={operation}>
                  <button
                    onClick={()=>this.props.getArithmeticOperations(operation)}>{operation}</button>
                </li>
              )
            }
           )
          }
      <li>
          <button>Enter </button>
        </li>
       </ul>
      </div>
     );
  }
}
 
export default Assignments;