import { MouseEventHandler, ReactNode } from "react"

// export
export function renderItemsList(
  arr: any,
  getItems: MouseEventHandler<HTMLButtonElement>,
  description: string
): ReactNode {
  return arr.map((item: any, i: number) => {
    return (
      <li>
        <label style={{color:"blue"}}>
          {item.value1}&emsp;<strong style={{color:"green", fontWeight:"bold"}}>{item.label}</strong>
        </label>
        {
          description !== "assignments" ? 
          <button  onClick={()=> getItems(item.value)} >
            {item.value}
          </button> :
       
        <button style={i === 0 ? { background: "black", color: "#fff" } : {}}
          onClick={() => getItems(item.value)}>{item.value}
         </button>
        }
      </li>
    )
  }) 
}