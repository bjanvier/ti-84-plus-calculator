import { Component } from 'react';
import * as math from 'mathjs';
import "./Playground.css"
import { PlaygroundContext } from '../context';
const parser = math.parser()
export interface PlaygroundState {
  show: boolean;
}
export default class Playground extends Component<{}, PlaygroundState> {
  state = {
    show: true
  };
  
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
    return Math.pow( parseInt(str.substring(0, str.length-3)), 2);
  }

  toThePowerONegative1(str: string) {
      return parseInt(str.substring(3))^ (-1);
  }

  render() {
    const { show } = this.state;
    return (
        <div className="playground_container" style={{ overflow: 'scroll', position: 'relative' }}>
      <PlaygroundContext.Consumer>
        {
        ({playground})=> 
          playground && <>
            <ul style={{padding:0}}>
              {playground.done ?
                playground.expressions.map((res:string) =>
                  (<li key={res}>
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
                )
                : ''
              }
            </ul>
    
            <div style={{position:"absolute", bottom:"-10%", padding:"1px", textAlign:"left", width:"100%"}}>
              {
                playground.input === "" ?
                    <div style={{width: "5%", background:"black"}}>
                        <span style={{display: show ? "inline" : "none", fontWeight: "bolder" }}>{playground.focuserBar}</span>
                    </div>
                  :
                  <div>
                    <span style={{ fontSize: "23px", fontWeight:"bolder" }}>{playground.input.replace(/x/g, "")}</span>
                  </div>
              }
            </div>
          </>
        }
        </PlaygroundContext.Consumer>
      </div>
     );
  }
}

Playground.contextType = PlaygroundContext