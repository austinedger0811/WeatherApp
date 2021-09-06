import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const DayForecast = (props) => {
    
    const formatDate = (date) => {
		return moment(date).format("dddd")
	}

    return (
        <Container>
            <Typography variant='body1'> {formatDate(props.forecast.date)} </Typography>
            <Typography variant='body1'> {props.forecast.day.condition.text} </Typography>
            <Typography variant='body1'> {Math.round(props.forecast.day.maxtemp_f)} </Typography>
            <Typography variant='body1'> {Math.round(props.forecast.day.mintemp_f)} </Typography>
        </Container>
    )
}

const Container = styled(Card)`
	&& {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
		padding: 20px;
		border-radius: 20px;
		color: #BCCCDC;
		background-color: #334E68;
	}
`


export default DayForecast
