import { createStore,  combineReducers} from 'redux'

export const rootReducer = combineReducers({  })

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
