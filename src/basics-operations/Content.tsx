import { MouseEventHandler, Component } from 'react';
import Assignments from './assignments/Assignments';
import Sidebar from './sidebar/Sidebar';
import Values from './values/Values';

class Content extends Component {
  render() {
    return (
      <>
        <Sidebar/>
        <Values/>
        <Assignments/>
      </>
     );
  }
}
 
export default Content;