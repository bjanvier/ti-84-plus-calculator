import  { Component } from 'react'
import Values from './basics-operations/values/Values';

interface DataSourceState {
  values: string;
}

interface DataSourceProps {
}

export default function DataSource(HocComponent:any, data:string){
  return class extends Component<DataSourceProps, DataSourceState>{
      constructor(props:any) {
          super(props);
          this.state = {
              values: data
          };
      }
      
      render(){
        return (
            <>
              <HocComponent data={this.state.values} {...this.props} />
            </>
          );
      }
  } 
}

export const DataSource1 = (data:string) => {
  return data;
}