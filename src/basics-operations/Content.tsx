import * as React from 'react';
import Assignments from './assignments/Assignments';
import Sidebar from './sidebar/Sidebar';
import Values from './values/Values';


export interface ContentProps {
  trigValues: Array<string>,
  getTrigFunc: any,
  getSymbols: any,
  symbols: Array<any>,
  otherValues: Array<any>,
  getOtherValues: any,
  numericalValues: Array<string>,
  getNumericalValues: any,
  arithmeticOperations: Array<any>,
  getArithmeticOperations: any,

}

export interface ContentState {
}

class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <>
        <Sidebar />
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
          arithmeticOperations={this.props.arithmeticOperations}
          getArithmeticOperations={this.props.getArithmeticOperations}
        />
      </>
     );
  }
}
 
export default Content;