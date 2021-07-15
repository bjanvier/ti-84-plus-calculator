import * as React from 'react';
import { Component, MouseEventHandler } from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

export interface SidebarProps {
  // open: MouseEventHandler<HTMLButtonElement> | undefined

  open: MouseEventHandler<HTMLButtonElement> | undefined,
  toggle: boolean
}

export interface SidebarState {
  equations: Array<any[]>;
}
 
class Sidebar extends React.Component<SidebarProps, SidebarState> {
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
            <li>
              <button>x^-1</button>
            </li>
            <li>
              <button>x^2</button>
            </li>
            <li>
              <button>LOG</button>
            </li>
            <li>
                <button>LN</button>
            </li>
            <li>
                <button>STOP </button>
            </li>
          
            <li className="">
              <button onClick={this.props.open}  style={{padding: "51px 0",}}>
                {
                  this.props.toggle ? <strong>ON</strong> :
                    <strong>ON</strong>
                }
              </button>
            </li>
          </ul>
      </div>
     );
  }
}
 
export default Sidebar;