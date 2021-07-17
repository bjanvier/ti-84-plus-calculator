import { Component } from 'react';

export interface TrigValuesProps {
  trigFunctions: Array<any>,
  getTrigFunc: any,
}
 
export interface TrigValuesState {
}
 
class TrigValues extends Component<TrigValuesProps, TrigValuesState> {
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
                <label>
                  {tf.label}&emsp;<strong style={{color:"green", fontWeight:"bold"}}>{tf.value1}</strong>
                </label>
                  <button
                    onClick={()=>this.props.getTrigFunc(tf.value)}>{tf.value}</button>
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