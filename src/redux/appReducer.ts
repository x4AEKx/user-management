import { UserType } from "../types/types"
import { BaseThunkType, InferActionsTypes } from "./store"
import { usersAPI } from "./../api/api"

let initialState = {
	users: [] as Array<UserType>,
	initialize: false,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case "APP/SET_USERS":
			return {
				...state,
				users: action.users,
			}
		case "APP/TOGGLE_INITIALIZE":
			return {
				...state,
				initialize: action.initialize,
			}
		default:
			return state
	}
}

export const actions = {
	setUsers: (users: Array<UserType>) => ({ type: "APP/SET_USERS", users } as const),
	toggleInitialize: (initialize: boolean) =>
		({ type: "APP/TOGGLE_INITIALIZE", initialize } as const),
}

export const getUsers = (): ThunkType => {
	return async (dispatch) => {
		dispatch(actions.toggleInitialize(true))

		let data = await usersAPI.users()
		dispatch(actions.setUsers(data))
		dispatch(actions.toggleInitialize(false))
	}
}

type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export default appReducer
