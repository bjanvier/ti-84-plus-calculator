import React, { Component } from 'react'
import "./OtherValues.css"

export interface OtherValuesProps {
  getOtherValues: any,
  otherValues:any
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
        {
            this.props.otherValues.map((tf: any) => {
              return (
                <li key={tf}>
                  <button
                    onClick={()=>this.props.getOtherValues(tf)}>{tf}</button>
                </li>
              )
            }
           )
          }
      </ul>
      );
  }
}
export default OtherValues;