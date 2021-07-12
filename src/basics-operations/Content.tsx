import * as React from 'react';
import Assignments from './assignments/Assignments';
import Sidebar from './sidebar/Sidebar';
import Values from './values/Values';


export interface ContentProps {
  trigValues: Array<string>,
  getTrigFunc: any
}

export interface ContentState {
}

class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {
     };
  }



  render() {
    return (
      <>
        <Sidebar />
        <Values
          trigValues={this.props.trigValues}
          getTrigFunc={this.props.getTrigFunc}
        />
        <Assignments />
      </>
     );
  }
}
 
export default Content;