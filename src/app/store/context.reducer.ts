import { contextAction } from './store'
import { initialContextState } from './store'

export function contextReducer(state = initialContextState, action: contextAction) {
  switch(action.type) {
    case 'OPEN_ACTION':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}
