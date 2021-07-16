import { Component } from 'react';
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
  show: boolean;
}
 
class Playground extends Component<PlaygroundProps, PlaygroundState> {
  constructor(props: PlaygroundProps) {
    super(props);
    this.state = {
      expressions: this.props.expressions,
      show: true
     };
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        show: !state.show
      }))
    }, 800)
  }

  getNaturalLog(str: string) {
    return math.log(
      parseInt(
        str.substring(str.indexOf("(") + 1, str.indexOf(")"))
      )
    )
  }

  render() {
    const { show } = this.state;
    return (
      <div style={{overflow: 'scroll'}}>
          <ul style={{padding:0}}>
          {this.props.done ?
            this.props.expressions.map((res:string) => {
              return (
                <li>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      fontSize: "23px"
                    }}>{res}</span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "23px"
                    }}>
                    {res.includes("ln") ? this.getNaturalLog(res) : parser.evaluate(res)}
                  </span><br />
                </li>
              )
            })
            : ''
          }
        </ul>
 
        <aside style={{textAlign:"left", width:"100%"}}>
          {
            this.props.input === "" ?
              <div style={{display: show ? "inline" : "none",width: "5%", height:"20px", background:"black"}}>
                <span style={{  fontWeight: "bolder" }}>{this.props.focuserBar}</span>
              </div>
              :
              <span style={{ fontSize: "23px", fontWeight:"bolder" }}>{this.props.input}</span>
          }
        </aside>
      </div>
     );
  }
}
 
export default Playground;