import * as React from 'react';
import { Component, MouseEventHandler } from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

export interface SidebarProps {
  // open: MouseEventHandler<HTMLButtonElement> | undefined

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
           </ul>
      </div>
     );
  }
}
 
export default Sidebar;