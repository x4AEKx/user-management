import axios from "axios"

const instance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/",
})

export const usersAPI = {
	async users() {
		const res = await instance.get(`users`)
		return res.data
	},
	async getPosts(userId: number) {
		const res = await instance.get(`posts?userId=` + userId)
		return res.data
	},
}
