import React, {Component} from "react";

export interface FunctionsProps {
}

interface FunctionsInfo{
  label:string,
  setPlots: any,
}
 
export interface FunctionsStates {
  allFunctions:any[]
}
 
class Functions extends React.Component<FunctionsProps, FunctionsStates> {
  constructor(props: FunctionsProps) {
    super(props);
    this.state = {
      allFunctions:[
        {
          label:"STAT PLOT F1",
          setPlots: <button onClick={()=>this.f1()}>Y=</button>
        },
        {
          label:"TBLSET F2",
          setPlots: <button onClick={()=>this.f2()}>WINDOW=</button>
        },
        {
          label:"FORMAT F3",
          setPlots: <button onClick={()=>this.f3()}>ZOOM</button>
        },
        {
          label: "CALC F4",
          setPlots: <button onClick={()=>this.f4()}>TRACE</button>
        },
        {
          label:"TABLE F5",
          setPlots: <button onClick={()=>this.f5()}>GRAPH</button>
        }
      ]
    };
  }

  f1(): void {
    alert("Yan, it works")
  }

  f2(): void {
    alert("Yan, it works")
  }

  f3(): void {
    alert("Yan, it works")
  }

  f4(): void {
    alert("Yan, it works")
  }

  f5(): void {
    alert("Yan, it works")
  }

  render() {
    const { allFunctions } = this.state;
    return ( 
      <>  
          {
            allFunctions.map(func => {
              return (
                <li>
                  <strong>
                   {func.label}
                  </strong><br/>
                  {func.setPlots}
                </li>
                )
            })
          }
      </>
     );
  }
}

export default Functions;