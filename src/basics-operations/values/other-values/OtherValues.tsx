import React, { Component } from 'react'
import "./OtherValues.css"

export interface OtherValuesProps {
  
}
 
export interface OtherValuesState {
  
}
 
class OtherValues extends React.Component<OtherValuesProps, OtherValuesState> {
  constructor(props: OtherValuesProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return (
      <ul className="other_values_container">
        <li>
           <button>0</button>
        </li>
        <li>
          <button>,</button>
        </li>
        <li>
          <button>(-)</button>
        </li>
      </ul>
      );
  }
}
 
export default OtherValues;