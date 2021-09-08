import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Collapse from '@material-ui/core/Collapse'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'


const createData = (date, maxTemp, minTemp, img, hourly) => {
	return {
		date,
		maxTemp,
		minTemp,
		img,
		hourly
	}	
}

const createRows = (forecast) => {
	var rows = []
	for (let day of forecast) {
		rows.push(createData(day.date, day.day.maxtemp_f, day.day.mintemp_f, day.day.condition.icon, day.hour))
	}
	return rows
}

const formatDate = (date) => {
	return moment(date).format("dddd")
}

const Row = (props) => {

	const { row } = props
	const [open, setOpen] = useState(false)

	return (
		<React.Fragment>
			<TableRow>
				<StyledTableCell align="left">
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <StyledKeyboardArrowUpIcon /> : <StyledKeyboardArrowDownIcon />}
          </IconButton>
				</StyledTableCell>
				<StyledTableCell align="left"> {formatDate(row.date)} </StyledTableCell>
				<StyledTableCell align="center"> <Image src={row.img} /> </StyledTableCell>
				<StyledTableCell align="center"> {Math.round(row.maxTemp)}&deg; </StyledTableCell>
				<StyledTableCell align="center"> {Math.round(row.minTemp)}&deg; </StyledTableCell>
			</TableRow>
			<TableRow>
				<TableCell colSpan={5} style={{borderBottom:"none"}}>
					<Collapse in={open} timeout="auto" unmontOnExit>
						<Box width="70vw">
							<TableContainer>
								<Table size="small">
									<TableHead>
										<TableRow>
											<StyledTableCellCaption>12am</StyledTableCellCaption>
											<StyledTableCellCaption>1am</StyledTableCellCaption>
											<StyledTableCellCaption>2am</StyledTableCellCaption>
											<StyledTableCellCaption>3am</StyledTableCellCaption>
											<StyledTableCellCaption>4am</StyledTableCellCaption>
											<StyledTableCellCaption>5am</StyledTableCellCaption>
											<StyledTableCellCaption>6am</StyledTableCellCaption>
											<StyledTableCellCaption>7am</StyledTableCellCaption>
											<StyledTableCellCaption>8am</StyledTableCellCaption>
											<StyledTableCellCaption>9am</StyledTableCellCaption>
											<StyledTableCellCaption>10am</StyledTableCellCaption>
											<StyledTableCellCaption>11am</StyledTableCellCaption>
											<StyledTableCellCaption>12pm</StyledTableCellCaption>
											<StyledTableCellCaption>1pm</StyledTableCellCaption>
											<StyledTableCellCaption>2pm</StyledTableCellCaption>
											<StyledTableCellCaption>3pm</StyledTableCellCaption>
											<StyledTableCellCaption>4pm</StyledTableCellCaption>
											<StyledTableCellCaption>5pm</StyledTableCellCaption>
											<StyledTableCellCaption>6pm</StyledTableCellCaption>
											<StyledTableCellCaption>7pm</StyledTableCellCaption>
											<StyledTableCellCaption>8pm</StyledTableCellCaption>
											<StyledTableCellCaption>9pm</StyledTableCellCaption>
											<StyledTableCellCaption>10pm</StyledTableCellCaption>
											<StyledTableCellCaption>11pm</StyledTableCellCaption>
										</TableRow>
									</TableHead>
									<TableBody>
										{row.hourly.map((hour) => (
											<TableCell key={hour.condition.time} component="th" scope="row" style={{borderBottom:"none"}}>
												<div>{<Image src={hour.condition.icon} />}</div>
												<HourTemp>{Math.round(hour.temp_f)}&deg;</HourTemp>
											</TableCell>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	)
}

const Forecast = (props) => {

	const { forecast } = props
	
	const rows = createRows(forecast)

	return (
		<Container>
			<CardContent>
				<TableContainer>
					<Header>
						<Typography variant='h6'>3-Day Forecast</Typography>
					</Header>
						<Table size="small">
							<TableHead>
								<TableRow>
									<StyledTableCellHeader align="left">Hourly</StyledTableCellHeader>
									<StyledTableCellHeader align="left">Day</StyledTableCellHeader>
									<StyledTableCellHeader align="center"></StyledTableCellHeader>
									<StyledTableCellHeader align="center">High</StyledTableCellHeader>
									<StyledTableCellHeader align="center">Low</StyledTableCellHeader>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<Row key={row.date} row={row} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
			</CardContent>
		</Container>
	)
}

const Container = styled(Card)`
	&& {
		padding-left: 12px;
		padding-right: 12px;
		margin-top: 36px;
		margin-left: 10%;
		margin-right: 10%;
		border-radius: 20px;
		margin-bottom: 20px;
		color: #BCCCDC;
		background-color: #243B53;
	}
`

const StyledTableCell = styled(TableCell)`
	&& {
		color: #BCCCDC;
		border-bottom: none;
	}
`

const StyledTableCellHeader = styled(TableCell)`
	&& {
		font-size: 16px;
		font-weight: 800;
		color: #BCCCDC;
		border-color: #486581;
		border-width: .01%;
	}
`

const StyledTableCellCaption = styled(TableCell)`
	&& {
		font-size: 14px;
		font-weight: 400;
		color: #BCCCDC;
		border-color: #486581;
		border-width: .01%;
	}
`

const Image = styled.img`
	width: 28px;
`

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`

const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
	&& {
		color: #BCCCDC;
	}
`

const StyledKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)`
	&& {
		color: #BCCCDC;
	}
`

const HourTemp = styled.div`
	display: flex;
	justify-content: center;
	color: #BCCCDC;
`

export default Forecast