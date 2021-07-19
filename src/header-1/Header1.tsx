import { Component, MouseEventHandler } from 'react'
import { renderItemsList } from '../helpers/renderList';
import "./Header1.css"

export interface Header1Props {
  headerControllers: Array<any>,
  headerSwitchers: Array<any>,
  getHeaderSwitchers: MouseEventHandler<HTMLButtonElement>,
  getHeaderControllers: MouseEventHandler<HTMLButtonElement>
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
      getHeaderControllers
    } = this.props;

    return (
      <div className="header_1_content">
        <section className="helper_operations">
          <ul className="toggle_switchers">
            {
              renderItemsList(headerSwitchers, getHeaderSwitchers)
            }
          </ul>
          <ul className="controllers">
            {
              renderItemsList(headerControllers, getHeaderControllers)
            }
          </ul>
        </section>

        <div className="directions">
          <div>
            <div>
              <button> {"<"} </button>
            </div>
            <div>
               <button> ^ </button>
                <button>M</button>
                <button> {"v"} </button>
            </div>
            <div>
              <button> {">"} </button>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Header1;