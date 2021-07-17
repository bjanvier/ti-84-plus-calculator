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
                  <label style={{color:"blue"}}>

                  {tf.label}&emsp;<strong style={{color:"green", fontWeight:"bold"}}>{tf.value1}</strong>
                </label>
                  <button
                    onClick={()=>this.props.getOtherValues(tf.value)}>{tf.value}</button>
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