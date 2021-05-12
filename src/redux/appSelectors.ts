import { AppStateType } from "./store"

export const getUsersSelector = (state: AppStateType) => {
	return state.usersPage.users
}

export const toggleInitialize = (state: AppStateType) => {
	return state.usersPage.initialize
}
