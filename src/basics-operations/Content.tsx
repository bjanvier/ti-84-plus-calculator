import { MouseEventHandler, Component } from 'react';
import Assignments from './assignments/Assignments';
import Sidebar from './sidebar/Sidebar';
import Values from './values/Values';


export interface ContentProps {
  trigValues: Array<string>,
  getTrigFunc: MouseEventHandler<HTMLButtonElement> | undefined,
  getSymbols: MouseEventHandler<HTMLButtonElement> | undefined,
  symbols: Array<any>,
  otherValues: Array<any>,
  getOtherValues:MouseEventHandler<HTMLButtonElement> | undefined,
  numericalValues: Array<string>,
  getNumericalValues:MouseEventHandler<HTMLButtonElement> | undefined,
  arithmeticOperations: Array<any>,
  getArithmeticOperations: MouseEventHandler<HTMLButtonElement> | undefined,
  getResults: MouseEventHandler<HTMLButtonElement> | undefined,

  open:MouseEventHandler<HTMLButtonElement> | undefined,
  toggle: boolean,
  getBuiltMathFunctions: MouseEventHandler<HTMLButtonElement> | undefined,
  builtMathFunctions: Array<any>
}

export interface ContentState {
}

class Content extends Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <>
        <Sidebar
          open={this.props.open}
          toggle={this.props.toggle}
          builtMathFunctions={this.props.builtMathFunctions}
          getBuiltMathFunctions={this.props.getBuiltMathFunctions}
        />
        <Values
          trigValues={this.props.trigValues}
          getTrigFunc={this.props.getTrigFunc}
          getSymbols={this.props.getSymbols}
          symbols={this.props.symbols}
          otherValues={this.props.otherValues}
          getOtherValues={this.props.getOtherValues}
          numericalValues={this.props.numericalValues}
          getNumericalValues={this.props.getNumericalValues}
        />
        <Assignments
          getResults={this.props.getResults}
          arithmeticOperations={this.props.arithmeticOperations}
          getArithmeticOperations={this.props.getArithmeticOperations}
        />
      </>
     );
  }
}
 
export default Content;