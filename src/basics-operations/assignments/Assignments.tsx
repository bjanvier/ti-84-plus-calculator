import * as React from 'react';
import { renderItemsList } from '../../helpers/renderList';
import "./Assignment.css"
import { AssignmentContext } from '../../context';
export default class Assignments extends React.Component<{}, {}> {
  state = {
    context: this.context
  }
  componentDidMount(){
    this.setState({context:this.context })
  }
  render() {
    return (
      <AssignmentContext.Consumer> 
        { ({assignments})=>
        ( 
          assignments &&  
            <div className="assignments">
              <ul className="arithmetic_operations">
                  {
                    renderItemsList(assignments.arithmeticOperations, assignments.getArithmeticOperations, assignments.secondFuncOn)
                  }
                  <li className="">
                    <button onClick={assignments.getResults}  style={{padding: "20px 0",}}>
                        <strong>Enter</strong>
                    </button>
                  </li>
              </ul>
            </div>
          )
        } 
      </AssignmentContext.Consumer>
     );
  }
}
 

Assignments.contextType = AssignmentContext