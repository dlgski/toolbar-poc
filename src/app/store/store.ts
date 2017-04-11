import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';

import { contextReducer } from './context.reducer';

import * as createLogger from 'redux-logger';
const logger = (createLogger as any)();

export interface ContextState {
  date: string,
  employeeId?: number
  actionId: string
};

export type contextAction = {
  type: 'OPEN_ACTION',
  payload: ContextState
};

export interface AppState {
    context: ContextState
};

export const initialContextState = {
  date: new Date(),
  employeeId: null
};

export const rootReducer = combineReducers<AppState>({
  context: contextReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);
