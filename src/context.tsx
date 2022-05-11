// import PlaygroundProps from './playground/Playground';
import {Context, createContext} from 'react';
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