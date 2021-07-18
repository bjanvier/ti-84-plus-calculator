import { Component } from 'react'

export interface Header1Props {
  headerControllers: Array<any>,
  headerSwitchers: Array<any>
}
 
export interface Header1State {
  
}
 
class Header1 extends Component<Header1Props, Header1State> {
  constructor(props: Header1Props) {
    super(props);
    this.state = {  };
  }

  render() { 
    return (
      <div className="header_1_content">
        <section className="helper_operations">
          <ul className="toggle_switchers">
            {
              this.props.headerSwitchers.map((switcher: any, i: number) => {
                return (
                  <li>
                      <label>
                        <strong style={{color:"blue"}}>{switcher.value1}</strong>
                    </label><br/>
                    <button style={i === 1 ? { background: "blue"} : {background: "green",padding:"6px 19px"}}>
                      {switcher.value}
                    </button>
                  </li>
                )
              })
            }
          </ul>
          <ul className="controllers">
            {
              this.props.headerControllers.map((controller: any) => {
                return (
                  <li>
                      <label style={{color:"blue"}}>
                        {controller.label}&emsp;<strong style={{color:"green"}}>{controller.value1}</strong>
                    </label><br/>
                    <button>
                      {controller.value}
                    </button>
                  </li>
                )
              })
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