import * as React from 'react';
import { MouseEventHandler } from 'react';
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
    return (
      <div className="assignments">
      
      <ul className="arithmetic_operations">
         {
            this.props.arithmeticOperations.map((operation: any, i: number) => {
              return (
                <li key={operation}>
                <label style={{color:"blue"}}>
                  {operation.label}&emsp;<strong style={{color:"green", fontWeight:"bold"}}>{operation.value1}</strong>
                </label>
                  <button style={i === 0 ? { background: "black", color: "#fff" } : {}}
                    onClick={()=>this.props.getArithmeticOperations(operation.value)}>{operation.value}</button>
                </li>
              )
            }
           )
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