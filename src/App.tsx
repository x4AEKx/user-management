import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { getUsers } from "./redux/appReducer"
import { getUsersSelector, toggleInitialize } from "./redux/appSelectors"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary,
		},
	})
)

function App() {
	const classes = useStyles()

	const users = useSelector(getUsersSelector)
	const init = useSelector(toggleInitialize)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	return (
		<Container fixed>
			<Grid container spacing={3}>
				{init ? (
					<h1>Loading...</h1>
				) : (
					<>
						{users.map((user) => (
							<Grid item xs={8} sm={6}>
								<Card>
									<CardContent>
										<Typography color="textSecondary" gutterBottom>
											UserCard
										</Typography>
										<Typography variant="h5" component="h2">
											{user.name}
										</Typography>
										<Typography color="textSecondary">{user.website}</Typography>
										<Typography variant="body2" component="p">
											{user.phone}
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small">Edit</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</>
				)}
			</Grid>
		</Container>
	)
}

export default App
