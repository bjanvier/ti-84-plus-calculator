import {
  MouseEventHandler, Component
} from 'react';
import "./Sidebar.css";
import { renderItemsList } from '../../helpers/renderList';
import { SidebarContext } from '../../context';

// export interface SidebarProps {
//   open: MouseEventHandler<HTMLButtonElement> | undefined,
//   toggle: boolean
//   getBuiltMathFunctions: any,
//   builtMathFunctions: Array<any>,
//   secondFuncOn: boolean
// }

class Sidebar extends Component<{}, {}> {

  render() {
    // const { builtMathFunctions, getBuiltMathFunctions, secondFuncOn} = this.props
    return (
      <SidebarContext.Consumer>
        {({values})=>( 
          values && <div className="sidebar" >
            <ul className="built_in_functions">
                {
                  renderItemsList(values.builtMathFunctions, values.getBuiltMathFunctions, values.secondFuncOn)
                }
              <li className="" key={'on'}>
                <button onClick={values.open}  style={{padding: "20px 0",}}>
                  {
                    !values.toggle && <strong>ON</strong>
                  }
                </button>
              </li>
            </ul>
          </div>
        )}
      </SidebarContext.Consumer>
    );
  }
}
 
export default Sidebar;

Sidebar.contextType = SidebarContext;