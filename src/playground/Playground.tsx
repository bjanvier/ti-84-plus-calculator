import { Component } from 'react';
import * as math from 'mathjs';
import "./Playground.css"
import { Redirect } from 'react-router-dom';
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

  getLogBase10(str: string) {
    return math.log10(
      parseInt(
        str.substring(str.indexOf("(") + 1, str.indexOf(")"))
      )
    )
  }

  toThePowerOf2(str: string) {
    return Math.pow( parseInt(str.substr(0, str.length-3)), 2);
  }

  toThePowerONegative1(str: string) {
      return parseInt(str.substr(3))^ (-1);
  }

  render() {
    const { show } = this.state;
    return (
      <div className="playground_container" style={{ overflow: 'scroll', position: 'relative' }}>
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
                    }}>{res.replace(/x/g, "")}</span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      fontSize: "23px"
                    }}>
                    {
                      res.includes("ln") ? this.getNaturalLog(res) :
                      res.includes("log") ? this.getLogBase10(res) :
                      res.includes("x^2") ? this.toThePowerOf2(res) :
                      res.includes("x^-1") ? this.toThePowerONegative1(res) :
                      parser.evaluate(res)}
                  </span><br />
                </li>
              )
            })
            : ''
          }
        </ul>
 
        <div style={{position:"absolute", bottom:"-10%", padding:"1px", textAlign:"left", width:"100%"}}>
          {
            this.props.input === "" ?
                <div style={{width: "5%", background:"black"}}>
                    <span style={{display: show ? "inline" : "none", fontWeight: "bolder" }}>{this.props.focuserBar}</span>
                </div>
              :
              <div>
                <span style={{ fontSize: "23px", fontWeight:"bolder" }}>{this.props.input.replace(/x/g, "")}</span>
              </div>
          }
        </div>
      </div>
     );
  }
}
 
export default Playground;