import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Current = (props) => {

	const formatDate = (date) => {
		return moment(date).format("MMMM Do YYYY")
	}

	return (
		<Container>
			<CardContent>
				<Header>
					<Typography variant='h6'>Today</Typography>
					<Typography variant='h6'> {formatDate(props.weather.location.localtime)} </Typography>
				</Header>
				<Weather>
					<Typography variant='h5'> {props.weather.current.condition.text} </Typography>
					<Typography variant='h2'> {props.weather.current.temp_f} </Typography>
				</Weather>
				<Location>
					<Typography variant='body1'> {props.weather.location.name}, {props.weather.location.region}</Typography>
				</Location>
			</CardContent>
		</Container>
	)
}

const Container = styled(Card)`
	&& {
		margin-top: 36px;
		margin-left: 10%;
		margin-right: 10%;
		padding: 12px;
		border-radius: 20px;
		color: #BCCCDC;
		background-color: #243B53;
	}
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const Weather = styled.div`
 padding: 12px;
`

const Location = styled.div`
`

export default Current
