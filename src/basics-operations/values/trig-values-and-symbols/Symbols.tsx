import { Component } from 'react';

export interface SymbolsProps {
  symbols: any[],
  getSymbols:any
}
export interface SymbolsState {
  
}
class Symbols extends Component<SymbolsProps, SymbolsState> {
  constructor(props: SymbolsProps) {
    super(props);
    this.state = {   };
  }
  render() { 
    return (
      <div>
        <ul className="symbols_values_container">
        {
            this.props.symbols.map((symbol: any) => {
              return (
                <li key={symbol}>
                  <button
                    onClick={()=>this.props.getSymbols(symbol)}>{symbol}</button>
                </li>
              )
            }
           )
          }
        </ul>
      </div>
      );
  }
}
export default Symbols;