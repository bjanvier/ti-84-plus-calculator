import * as React from 'react';
import { Component } from 'react';
import DataSource from '../../../DataSource';

export interface TrigValuesProps {
  trigFunctions: Array<any>,
  getTrigFunc: any,
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
        <ul className="trig_values_container">
          {
            this.props.trigFunctions.map((tf: any) => {
              return (
                <li key={tf}>
                  <button
                    onClick={()=>this.props.getTrigFunc(tf)}>{tf}</button>
                </li>
              )
            }
           )
          }
      </ul>
      );
  }

}
 
export default TrigValues;