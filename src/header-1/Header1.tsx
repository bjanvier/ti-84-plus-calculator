import React, { Component } from 'react'

export interface Header1Props {
  
}
 
export interface Header1State {
  
}
 
class Header1 extends React.Component<Header1Props, Header1State> {
  constructor(props: Header1Props) {
    super(props);
    this.state = {  };
  }
  render() { 
    return (
      <div className="header_1_content">
        <section className="helper_operations">
          <div className="toggle_switchers">
            <button>2ND</button>
            <button>ALPHA</button>
          </div>
          <div className="controllers">
            <button>MODE</button>
            <button>DEL</button>
            <button>X,T,Ø,n</button>
            <button>STAT</button>
          </div>
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