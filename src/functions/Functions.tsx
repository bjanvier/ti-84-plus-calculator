import {Component, MouseEventHandler} from "react";
import { renderItemsList } from '../helpers/renderList';

export interface FunctionsProps {
  setPlots: MouseEventHandler<HTMLButtonElement>,
  allFunctions: Array<any>,
  secondFuncOn: boolean
}
 
class Functions extends Component<FunctionsProps, {}> {
  constructor(props: FunctionsProps) {
    super(props);
  }

  render() {
    const { allFunctions, setPlots, secondFuncOn } = this.props;
    return ( 
      <ul>  
          {renderItemsList(allFunctions, setPlots, secondFuncOn)}
      </ul>
     );
  }
}

export default Functions;