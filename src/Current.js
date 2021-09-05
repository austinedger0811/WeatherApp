import React from 'react'
import styled from 'styled-components'

const Current = (props) => {

	return (
		<Container>
			<Header>
				<h3>Today</h3>
				<h5> {props.weather.location.localtime} </h5>
			</Header>
			<Weather>
				<h4> {props.weather.current.condition.text} </h4>
				<h1> {props.weather.current.temp_f} </h1>
			</Weather>
			<Location>
				<h5> {props.weather.location.name}, {props.weather.location.region}</h5>
			</Location>
		</Container>
	)
}

const Container = styled.div`
	padding: 20px;
	margin: 10%;
	border-radius: 20px;
	color: #D9E2EC;
  background-color: #243B53;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const Weather = styled.div`
 padding: 20px;
`

const Location = styled.div`
`

export default Current
