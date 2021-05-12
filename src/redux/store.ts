import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMiddleware, { ThunkAction } from "redux-thunk"
import appReducer from "./appReducer"

let rootReducer = combineReducers({
	usersPage: appReducer,
})

type RootReducerType = typeof rootReducer // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
	? U
	: never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<
	R,
	AppStateType,
	unknown,
	A
>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
