import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

const Forecast = (props) => {

	const formatDate = (date) => {
		return moment(date).format("dddd")
	}

	return (
		<Container>
			<CardContent>
				<Header>
					<Typography variant='h6'>3-Day Forecast</Typography>
				</Header>
				<Table>
					<TableHead>
						<TableRow>
							<StyledTableCellHeader>Day</StyledTableCellHeader>
							<StyledTableCellHeader align="center">Summary</StyledTableCellHeader>
							<StyledTableCellHeader align="right">High</StyledTableCellHeader>
							<StyledTableCellHeader align="right">Low</StyledTableCellHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						{props.forecast.map((row) => (
							<TableRow key={row.date}>
								<StyledTableCell component="th" scope="row">
									{formatDate(row.date)}
								</StyledTableCell>
								<StyledTableCell align="center"><Image src={row.day.condition.icon}/></StyledTableCell>
								<StyledTableCell align="right"> {row.day.maxtemp_f}&deg; </StyledTableCell>
								<StyledTableCell align="right"> {row.day.mintemp_f}&deg; </StyledTableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Container>
	)
}

const Container = styled(Card)`
	&& {
		padding: 12px;
		margin-top: 36px;
		margin-left: 10%;
		margin-right: 10%;
		border-radius: 20px;
		color: #BCCCDC;
		background-color: #243B53;
	}
`

const StyledTableCell = styled(TableCell)`
	&& {
		color: #BCCCDC;
	}
`

const StyledTableCellHeader = styled(TableCell)`
	&& {
		font-weight: 700;
		color: #BCCCDC;
	}
`

const Image = styled.img`
	width: 28px;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

export default Forecast