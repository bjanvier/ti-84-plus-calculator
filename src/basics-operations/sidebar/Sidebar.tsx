import {
  MouseEventHandler, Component
} from 'react';
import "./Sidebar.css";
// import { Link } from 'react-router-dom';
import { renderItemsList } from '../../helpers/renderList';

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
    const { builtMathFunctions, getBuiltMathFunctions} = this.props
    return (
      <div className="sidebar" >
          <ul className="built_in_functions">
                {
                  renderItemsList(builtMathFunctions, getBuiltMathFunctions)
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