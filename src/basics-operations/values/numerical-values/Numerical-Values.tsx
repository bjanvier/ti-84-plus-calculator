import "./numerical-values.css"

import React, { Component } from 'react'


export interface NumericalValuesProps {
  
}
 
export interface NumericalValuesState {
  values: any[
  ]
}
 
class NumericalValues extends React.Component<NumericalValuesProps, NumericalValuesState> {
  constructor(props: NumericalValuesProps) {
    super(props);
    this.state = {
      values: [
        {
          value: 9,
          label: <label>w Q</label>
        },
        {
          value: 8,
          label: <label>v P</label>
        },
        {
          value: 7,
          label: <label>u O</label>
        },
        {
          value: 6,
          label: <label>L6 V</label>
        },
        {
          value: 5,
          label: <label>L5 U</label>
        },
        {
          value: 4,
          label: <label>L4 T</label>
        },
        {
          value: 3,
          label: <label>L3 Ø</label>
        },
        {
          value: 2,
          label: <label>L2 Z</label>
        },
        {
          value: 1,
          label: <label>L1 Y</label>
        },
      ]
     };
  }

  render() {
    const { values} = this.state;
    return (
      <ul className="numerical_values_container" style={{display: 'flex', flexWrap:"wrap", padding: 0}}>
        {
          values.map((val: any) => {
            return (
              <li style={{ width: "33.3%" }}>
                  {val.label}<br/>
                <button style={{ }}>
                  
                    {val.value}
                  </button>
            </li>
           )
          })
        }
      </ul>
    );
  }
}
 
export default NumericalValues;