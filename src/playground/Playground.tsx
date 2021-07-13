import { Component } from 'react';
import Complex from 'complex-js';

export interface PlaygroundProps {
  expression: string
}
 
export interface PlaygroundState {
  expression: string;
  results: number
}
 
class Playground extends Component<PlaygroundProps, PlaygroundState> {
  constructor(props: PlaygroundProps) {
    super(props);
    this.state = {
      expression: this.props.expression,
      results: 0
     };
  }

  
  isMathematicalExp(str: string) {
    try {
      Complex.compile(str);
    } catch (error) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    if (this.isMathematicalExp(this.state.expression)) {
      this.setState({
        results:  parseInt(this.state.expression)
      })
    }
  }

  render() { 
    return (
      <div style={{ textAlign: "left" }}>
        {/* {this.state.results} */}
        {this.props.expression}
      </div>
     );
  }
}
 
export default Playground;