import { Component } from 'react';
import Complex from 'complex-js';
import { create, all } from "mathjs";
import * as math from 'mathjs';

const parser = math.parser()

export interface PlaygroundProps {
  expressions: string[],
  clear: boolean,
  done: boolean,
  input: string,
  focuserBar: string,
}
export interface PlaygroundState {
  expressions: string[];
}
 
class Playground extends Component<PlaygroundProps, PlaygroundState> {
  constructor(props: PlaygroundProps) {
    super(props);
    this.state = {
      expressions: this.props.expressions,
     };
  }
  
  render() {
    return (
      <div style={{overflow: 'scroll'}}>
          <ul style={{padding:0}}>
          {this.props.done ?
            this.props.expressions.map((res:string) => {
              return (
                <li style={{}}>
                  <span style={{display:"flex", justifyContent:"flex-start", fontSize: "23px"}}>{res}</span>
                  <span style={{display:"flex", justifyContent:"flex-end",  fontSize: "23px"}}>{parser.evaluate(res)}</span><br/>
                </li>
              )
            })
            : ''
          }
        </ul>
 
        <aside style={{textAlign:"left"}}>
          {
            this.props.input === "" ?
            <span style={{ fontSize: "23px", fontWeight:"bolder" }}>{this.props.focuserBar}</span>
              :
              <span style={{ fontSize: "23px", fontWeight:"bolder" }}>{this.props.input}</span>
          }
        </aside>
      </div>
     );
  }
}
 
export default Playground;