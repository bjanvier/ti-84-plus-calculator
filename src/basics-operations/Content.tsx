import * as React from 'react';
import { Component } from 'react';
import Assignments from './assignments/Assignments';
import Sidebar from './sidebar/Sidebar';
import Values from './values/Values';


export interface ContentProps {
  
}
 
export interface ContentState {
  
}
 
class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {  };
  }
  render() { 
    return (
      <div className="basics_operations_content">
        <Sidebar />
        <Values />
        <Assignments />
      </div>
     );
  }
}
 
export default Content;