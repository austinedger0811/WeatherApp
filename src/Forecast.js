import React from 'react'
import styled from 'styled-components'

const Forecast = (props) => {
	return (
		<Container>
			<Header>
				<h3>Forecast</h3>
			</Header>
				
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
  float: left;
`

export default Forecast