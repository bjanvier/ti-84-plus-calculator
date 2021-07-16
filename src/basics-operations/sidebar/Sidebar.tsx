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
                  this.props.builtMathFunctions.map((func: string) => {
                    return (
                      <li className="">
                        <button onClick={ ()=> this.props.getBuiltMathFunctions(func)}>
                            <strong>
                              {func}
                            </strong>
                        </button>
                      </li>
                    )
                  })
                }
              <li className="">
                  <button onClick={this.props.open}  style={{padding: "51px 0",}}>
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