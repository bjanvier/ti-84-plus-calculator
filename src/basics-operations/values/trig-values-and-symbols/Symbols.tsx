import * as React from 'react';
import { Component } from 'react';


export interface SymbolsProps {
  
}
 
export interface SymbolsState {
  
}
 
class Symbols extends React.Component<SymbolsProps, SymbolsState> {
  constructor(props: SymbolsProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return (
      <div>
        <ul className="symbols_values_container">
        <li>
           <button>,</button>
        </li>
        <li>
          <button>(</button>
        </li>
        <li>
          <button>)</button>
        </li>
      </ul>
      </div>
      );
  }
}
 
export default Symbols;