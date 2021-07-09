import * as React from 'react';
import "./Assignment.css"
export interface AssignmentsProps {
  
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
        <li>
          <button>/</button>
        </li>
        <li>
          <button>X</button>
      </li>
      <li>
          <button>-</button>
      </li>
      <li>
          <button>+ </button>
      </li>
      <li>
          <button>Enter </button>
        </li>
       </ul>
      </div>
     );
  }
}
 
export default Assignments;