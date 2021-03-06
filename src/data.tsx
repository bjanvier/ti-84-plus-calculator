export interface ButtonValues{
    value: number | string
    value1?: string
    label?: string
}

export type RequiredDataInfo = "arithmeticOperations" | "allFunctions" | "builtMathFunctions" | "trigFunctions" | "symbols" | "otherValues" | "numericalValues";
export type OptionalDataInfo = "headerSwitchers" | "headerControllers" | "advancedOperations"
export interface DataUI{
  optionalData : Record<OptionalDataInfo, ReturnType<<T extends U, U extends ButtonValues[]>() => T>>
  requiredData : Record<RequiredDataInfo, Required<ButtonValues>[]>
}

export const DATA:DataUI = {
  optionalData: {
      headerSwitchers: [
        { value: "2ND"},
        { value: "ALPHA", value1:"A-CLOCK"},
      ],
      headerControllers: [
        { value: "MODE", value1: "QUIT", label: ""},
        { value: "DEL", value1: "INS"},
        { value: "X,T,Ø,n", value1: "LINK"},
        { value: "STAT", value1: "LIST" },
      ],
      advancedOperations: [
        { value: "MATH",  value1:"TEST", label: "A"},
        { value: "APPS", value1:"ANGLE", label: "B" },
        { value: "CLEAR"},
        { value: "VARS", value1:"DIST"},
        { value: "CLEAR"} 
     ],
  },
  requiredData: {
    arithmeticOperations: [
      { value: "^", value1:"H", label: "π" },
      { value: "/", value1:"e", label: "M" },
      { value: "*", value1:"[", label: "R" },
      { value: "-", value1:"]", label: "W"  },
      { value: "+", value1:"MEM", label: "''"},
    ],
    allFunctions:[
        { value: "Y=", value1:"STAT PLOT", label:"F1"},
        { value: "WINDOW", value1:"TBLSET", label:"F2"},
        { value: "ZOOM", value1:"FORMAT", label:"F3"},
        { value1:"CALC",  value: "TRACE", label: "F4"},
        { value: "GRAPH", value1:"TABLE", label:" F5"}
    ],
    builtMathFunctions:[
      { value: "x^-1", value1:"MATRIX", label: "D" },
      { value: "x^2", value1:"sqrt", label: "I" },
      { value: "log",  value1:"10^x N", label: "R" },
      { value: "ln", value1:"e^x", label: "S"},
      { value: "sto>", value1:"rcl", label: "X"},
    ],
    trigFunctions: [
      { value: "sin",  value1:"sin^-1", label: "E"  },
      { value: "cos", value1:"cos^-1", label: "F" },
      { value: "tan", value1:"tan^-1", label: "G" },
    ],
    symbols: [
        { value: ",", value1:"J", label: "EE" },
        { value: "(", value1:"K", label: "{" },
        { value: ")", value1:"L", label: "}" },
    ],
    otherValues: [
        { value: "0", value1:"~",label: "Catalog" },
        { value: ".", value1:":", label: "i"  },
        { value: "(-)", value1:"?", label: "Ans" },
    ],
    numericalValues:[
        { value: 7, value1:"u", label: "O" },
        { value: 8, value1:"v", label: "P" },
        { value: 9, value1:"w", label: "Q" },
        { value: 4, value1:"L4",label: "T" },
        { value: 5, value1:"L5",label: "U" },
        { value: 6, value1:"L6", label: "V" },
        { value: 1, value1:"L1", label: "Y" },
        { value: 2, value1:"L2", label: "Z" },
        { value: 3, value1:"L3", label: "Ø" }, 
    ],
  }
}
