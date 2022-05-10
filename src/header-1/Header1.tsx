import { Component, MouseEventHandler } from 'react'
import { renderItemsList } from '../helpers/renderList';
import "./Header1.css"

export interface Header1Props {
  headerControllers: Array<any>,
  headerSwitchers: Array<any>,
  getHeaderSwitchers: MouseEventHandler<HTMLButtonElement>,
  getHeaderControllers: MouseEventHandler<HTMLButtonElement>,
  secondFuncOn: boolean
}
export interface Header1State {
}
class Header1 extends Component<Header1Props, Header1State> {
  constructor(props: Header1Props) {
    super(props);
    this.state = {  };
  }

  render() { 
    const {
      headerControllers,
      headerSwitchers,
      getHeaderSwitchers,
      getHeaderControllers, secondFuncOn 
    } = this.props;

    return (
      <div className="header_1_content">
        <section className="helper_operations">
          <ul className="toggle_switchers">
            {
              renderItemsList(headerSwitchers, getHeaderSwitchers, secondFuncOn)
            }
          </ul>
          <ul className="controllers">
            {
              renderItemsList(headerControllers, getHeaderControllers, secondFuncOn)
            }
          </ul>
        </section>

        <aside className="directions">
          <button className="left_arrow"> {"<"} </button>
          <button className="top_arrow"> ^ </button>
          <button className="center_arrow">M</button>
          <button className="right_arrow"> {">"} </button>
          <button className="bottom_arrow"> {"v"} </button>
        </aside>
      </div>
     );
  }
}
 
export default Header1;