import { CounterActionUnion, IncrementCounterAction, CounterActionTypes } from './counter.action';

export const counterReducer = (state = 0, action: CounterActionUnion) => {
    switch(action.type) {
        case CounterActionTypes.Increment: 
            return ++state;
        default: 
            return state;
    }
}