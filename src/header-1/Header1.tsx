import { Component, MouseEventHandler } from 'react'
import { ButtonValues } from '../data';
import { renderItemsList } from '../helpers/renderList';
import "./Header1.css"

export interface Header1Props {
  headerControllers: Array<ButtonValues>,
  headerSwitchers: Array<ButtonValues>,
  getHeaderSwitchers: MouseEventHandler<HTMLButtonElement>,
  getHeaderControllers: MouseEventHandler<HTMLButtonElement>,
  secondFuncOn: boolean
}
export interface Header1State {
  directionsBTN: {className: string | undefined, symbol: string}[]
}
class Header1 extends Component<Header1Props, Header1State> {
  constructor(props: Header1Props) {
    super(props);
    this.state = {
      directionsBTN:[
        {
          className:'top_arrow',
          symbol: '^'
        },
        {
          className:'left_arrow',
          symbol: '<'
        },
        {
          className:'bottom_arrow',
          symbol: 'v'
        },
        {
          className:'right_arrow',
          symbol: '>'
        },
        {
          className:'center_arrow',
          symbol: 'M'
        },
      ]
    };
  }
  render() { 
    const {
      headerControllers,
      headerSwitchers,
      getHeaderSwitchers,
      getHeaderControllers, secondFuncOn 
    } = this.props;

    const {directionsBTN} = this.state
    return (
      <div className="header_1_content">
        <section className="helper_operations">
          {
            [[headerSwitchers, getHeaderSwitchers, 'toggle_switchers'], [headerControllers, getHeaderControllers, 'controllers']].map((comp:any) =>{
              return (
                <ul 
                  className={comp[2]}
                  key={comp[2]}>
                  {renderItemsList(comp[0], comp[1], secondFuncOn)}
                </ul>
              )
            }
          )}
        </section>

        <aside className="directions">
          { directionsBTN.map(btn => 
              <button 
                key={btn.className} 
                className={btn.className}>
                  {btn.symbol}
                </button>
              )
          }
        </aside>
      </div>
     );
  }
}
 
export default Header1;