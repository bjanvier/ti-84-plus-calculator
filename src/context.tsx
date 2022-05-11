import {Context, createContext, MouseEventHandler} from 'react';
import { ButtonValues } from './data';
export const PlaygroundContext:Context<PlaygroundProps> =  
createContext({})
export interface PlaygroundProps {
    playground?: Required<{
        expressions: string[],
        clear: boolean,
        done: boolean,
        input: string,
        focuserBar: string,
    }>
}

export interface AssignmentsProps{
    assignments?: Required<{
        arithmeticOperations: Array<ButtonValues>,
        getArithmeticOperations: (operation:any)=>void,
        getResults: MouseEventHandler<HTMLButtonElement> | undefined,
        secondFuncOn: boolean  
    }>
}
export const AssignmentContext:Context<AssignmentsProps> = createContext({});

export interface ValuesProps{
    values?: Required<{ 
        trigValues: ButtonValues[],
        getTrigFunc: MouseEventHandler<HTMLButtonElement>,
        symbols: ButtonValues[]
        getSymbols: MouseEventHandler<HTMLButtonElement>,
        otherValues: ButtonValues[],
        getOtherValues: MouseEventHandler<HTMLButtonElement>,
        numericalValues: ButtonValues[]
        getNumericalValues: MouseEventHandler<HTMLButtonElement>
        secondFuncOn: boolean
    }>
}
export const ValuesContext:Context<ValuesProps> =  createContext({})

export interface SidebarProps{
    values?: Required<{
        open: MouseEventHandler<HTMLButtonElement> | undefined,
        toggle: boolean
        getBuiltMathFunctions: any,
        builtMathFunctions: Array<ButtonValues>,
        secondFuncOn: boolean
    }>
}
export const SidebarContext:Context<SidebarProps> =  createContext({})


