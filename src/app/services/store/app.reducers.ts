import { AppState } from './app-state'
import { ActionReducerMap } from '@ngrx/store'
import { counterReducer } from './counter/counter.reducer'

export const appReducers: ActionReducerMap<AppState> = {
    counter: counterReducer
}