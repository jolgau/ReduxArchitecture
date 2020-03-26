import { Action } from '@ngrx/store';

export enum CounterActionTypes {
    Increment = '[Counter] Increment',
}

export class IncrementCounterAction implements Action {
    type = CounterActionTypes.Increment;
}

export type CounterActionUnion = IncrementCounterAction;