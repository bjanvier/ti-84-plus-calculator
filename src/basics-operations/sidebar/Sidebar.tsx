import {
  MouseEventHandler, Component
} from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

export interface SidebarProps {
  open: MouseEventHandler<HTMLButtonElement> | undefined,
  toggle: boolean
  getBuiltMathFunctions: any,
  builtMathFunctions: Array<any>
}

export interface SidebarState {
  equations: Array<any[]>;
}
 
class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      equations: [],
     };
  }

  render() { 
    return (
      <div className="sidebar" >
          <ul className="built_in_functions">
                {
                  this.props.builtMathFunctions.map((func: any, i: number) => {
                    return (
                      <li className="">
                                     
                        <label style={{ color: "blue" }}>
                          {func.value1}&emsp;<strong style={{ color: "green", fontWeight: "bold" }}>{func.label}</strong>
                        </label>
                        <button onClick={ ()=> this.props.getBuiltMathFunctions(func.value)}>
                            <strong>
                              {func.value}
                            </strong>
                        </button>
                      </li>
                    )
                  })
                }
              <li className="">
                  <button onClick={this.props.open}  style={{padding: "20px 0",}}>
                    {
                      !this.props.toggle && <strong>ON</strong>
                    }
                  </button>
              </li>
          </ul>
      </div>
     );
  }
}
 
export default Sidebar;