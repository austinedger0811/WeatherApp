import React from 'react'
import styled from 'styled-components'

import DayForecast from './DayForecast'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Forecast = (props) => {

	return (
		<Container>
			<CardContent>
				<Header>
					<Typography variant='h6'>3-Day Forecast</Typography>
				</Header>

				{Object.keys(props.forecast).map(key => (
					<DayForecast key={key} forecast={props.forecast[key]} />
				))}
			</CardContent>
		</Container>
	)
}

const Container = styled(Card)`
	&& {
		padding: 20px;
		margin-top: 36px;
		margin-left: 10%;
		margin-right: 10%;
		border-radius: 20px;
		color: #BCCCDC;
		background-color: #243B53;
	}
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

export default Forecast