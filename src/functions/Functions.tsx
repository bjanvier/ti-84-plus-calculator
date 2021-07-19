import {Component, MouseEventHandler} from "react";
import { renderItemsList } from '../helpers/renderList';

export interface FunctionsProps {
  setPlots: MouseEventHandler<HTMLButtonElement>,
  allFunctions: Array<any>
}

 
export interface FunctionsStates {
  // allFunctions:any[]
}
 
class Functions extends Component<FunctionsProps, FunctionsStates> {
  constructor(props: FunctionsProps) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { allFunctions, setPlots } = this.props;
    return ( 
      <ul>  
          {
            renderItemsList(allFunctions, setPlots)
          }
      </ul>
     );
  }
}

export default Functions;