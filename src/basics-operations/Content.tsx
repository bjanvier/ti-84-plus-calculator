import { MouseEventHandler, Component } from 'react';
import Assignments from './assignments/Assignments';
import Sidebar from './sidebar/Sidebar';
import Values from './values/Values';

export interface ContentProps {
  trigValues: Array<string>,
  getTrigFunc: MouseEventHandler<HTMLButtonElement>,
  symbols: Array<any>,
  getSymbols: MouseEventHandler<HTMLButtonElement>,
  otherValues: Array<any>,
  getOtherValues:MouseEventHandler<HTMLButtonElement>,
  numericalValues: Array<string>,
  getNumericalValues:MouseEventHandler<HTMLButtonElement>,
  arithmeticOperations: Array<any>,
  getArithmeticOperations: MouseEventHandler<HTMLButtonElement>,
  getResults: MouseEventHandler<HTMLButtonElement>,

  open:MouseEventHandler<HTMLButtonElement>,
  toggle: boolean,
  getBuiltMathFunctions: MouseEventHandler<HTMLButtonElement>,
  builtMathFunctions: Array<any>
  secondFuncOn: boolean,
}

export interface ContentState {
}

class Content extends Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = { };
  }

  render() {
    const valuesProps = {
      trigValues: this.props.trigValues,
      getTrigFunc: this.props.getTrigFunc,
      symbols: this.props.symbols,
      getSymbols: this.props.getSymbols,
      otherValues: this.props.otherValues,
      getOtherValues: this.props.getOtherValues,
      numericalValues: this.props.numericalValues,
      getNumericalValues: this.props.getNumericalValues
    }
    const sidebarProps = {
      open: this.props.open,
      toggle: this.props.toggle,
      builtMathFunctions: this.props.builtMathFunctions,
      getBuiltMathFunctions: this.props.getBuiltMathFunctions
    }

    const assignmentsProps = {
      getResults: this.props.getResults,
      arithmeticOperations: this.props.arithmeticOperations,
      getArithmeticOperations: this.props.getArithmeticOperations,
    }
    const { secondFuncOn } = this.props
    
    return (
      <>
        <Sidebar
            secondFuncOn={secondFuncOn}
          {...sidebarProps}
        />
        <Values
          secondFuncOn={secondFuncOn}
          {...valuesProps}
        />
        <Assignments
            secondFuncOn={secondFuncOn}
          {...assignmentsProps}
        />
      </>
     );
  }
}
 
export default Content;