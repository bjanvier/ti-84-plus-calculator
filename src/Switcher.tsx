import React, {Component, MouseEventHandler } from 'react';


export interface StartProps {
  open: MouseEventHandler<HTMLButtonElement> | undefined,
  toggle: boolean
}
 
export interface StartState {
}
 
class Switcher extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props);
    this.state = {
      toggle: false
     };
  }

  open() {
    // this.setState({toggle: !this.props.toggle});
  }
  componentDidMount() { }
  
  render() { 
    return (
      <div  className="switcher_on_off">
        <button onClick={this.props.open}>
          {
            this.props.toggle ? <strong>ON</strong> :
              <strong>OFF</strong>
          }
        </button>
      </div >
    );
  }
}
 
export default Switcher;