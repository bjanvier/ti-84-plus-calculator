import * as React from 'react';
import { Component } from 'react';


export interface TrigValuesProps {
  
}
 
export interface TrigValuesState {
  
}
 
class TrigValues extends React.Component<TrigValuesProps, TrigValuesState> {
  constructor(props: TrigValuesProps) {
    super(props);
    this.state = {  };
  }
  render() { 
    return (
      <div>
        <ul className="trig_values_container">
        <li>
           <button>SIN</button>
        </li>
        <li>
          <button>COS</button>
        </li>
        <li>
          <button>TAN</button>
        </li>
      </ul>
      </div>
      );
  }

}
 
export default TrigValues;