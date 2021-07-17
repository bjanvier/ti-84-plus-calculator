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
                <li key={symbol.value}>
                  <label>
                  {symbol.label}&emsp;<strong style={{color:"green", fontWeight:"bold"}}>{symbol.value1}</strong>
                </label>
                  <button
                    onClick={() => this.props.getSymbols(symbol.value)}>{symbol.value}
                  </button>
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