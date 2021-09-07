import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { LineChart, Line, ResponsiveContainer, XAxis } from 'recharts'

const createHour = (value, time) => {
	return {value, time}
}

const createDay = (forecast) => {
	var day = []
	for (let hour of forecast) {
		day.push(createHour(hour.chance_of_rain, hour.time))
	}
	return day
}

const RainChart = (props) => {

	const { forecast } = props

	console.log(createDay(forecast))

	return (
		<Container>
			<CardContent>
				<Header>
					<Typography variant='h6'>Rain</Typography>
				</Header>
				<ResponsiveContainer width="100%" height={100}>
					<LineChart data={createDay(forecast)}>
						<XAxis dataKey="time" domain={['auto', 'auto']} name='Time' tickFormatter={(time) => moment(time).format('HH:mm')}/>
						<Line type="monotone" dot={false} dataKey="value" stroke="#8884d8" />
					</LineChart>
				</ResponsiveContainer>
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

export default RainChart

