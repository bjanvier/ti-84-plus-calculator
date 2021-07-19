import { Component } from 'react';
import { renderItemsList } from '../../../helpers/renderList';

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
    const { symbols, getSymbols } = this.props;
    return (
      <div>
        <ul className="symbols_values_container">
         {
           renderItemsList(symbols, getSymbols)
          }
        </ul>
      </div>
    );
  }
}
export default Symbols;