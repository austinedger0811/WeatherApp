import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import tempScheme from './tempScheme'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const formatDate = (date) => {
	return moment(date).format("ddd, MMM D")
}

const getColorArray = (temp) => {
	let arr
	temp = Math.round(temp)
	if (temp < 0) {
		arr = tempScheme[0]
	} else if (temp > 110) {
		arr = tempScheme[110]
	} else {
		arr = tempScheme[temp]
	}
	return arr
}

const Current = (props) => {

	const { weather } = props

	const color = {
		color: `rgb(${getColorArray(weather.current.temp_f)})`
	}

	return (
		<Container>
			<CardContent>
				<Header>
					<Typography variant='h6'>Currently</Typography>
					<Typography variant='h6'> {formatDate(props.weather.location.localtime)} </Typography>
				</Header>
				<Weather>
					<Typography variant='h5'> {props.weather.current.condition.text} </Typography>
					<Typography variant='h2' key={props.weather.location.name} style={color}> {Math.round(props.weather.current.temp_f)}&deg; </Typography>
				</Weather>
				<Location>
					<Typography variant='body1'> {props.weather.location.name}, {props.weather.location.region}</Typography>
					<Image src={props.weather.current.condition.icon} />
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
		padding-left: 12px;
		padding-right: 12px;
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
const Image = styled.img`
	width: 38px;
`
const Location = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`

export default Current
