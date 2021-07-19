import { MouseEventHandler, ReactNode } from "react"
 
export function renderItemsList(arr: Array<any>, getItems: MouseEventHandler<HTMLButtonElement>, secondFuncOn: boolean): ReactNode {
  return arr.map((item: any, i: number) => {
    return (
      <li key={item.value}>
        <label style={{color:"blue"}}>
          {item.value1}&emsp;<strong style={{color:"green"}}>{item.label}</strong>
        </label>
        <button
            onClick={() => getItems( !secondFuncOn ? item.value : item.value1)}>{item.value}
        </button>
      </li>
    )
  }) 
}