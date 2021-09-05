import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Current from './Current'
import Forecast from './Forecast'


const App = () => {

  var key = 'b075c49533634e1894f23737210509'
  const baseURL = 'http://api.weatherapi.com/v1/'

  const [searchValue, setSearchValue] = useState('New York')
  const [weather, setWeather] = useState(null)
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}current.json?key=${key}&q=${searchValue}&aqi=no`).then((response) => {
      setWeather(response.data)
      console.log(weather)
      setLoading(false)
    })
  }, [searchValue, key])

  const getSearchValue = (event) => {
    if (event.key === 'Enter') {
      setSearchValue(event.target.value)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Search>
        <SearchBar type="text" placeholder="Search cities" onKeyDown={getSearchValue}></SearchBar>
      </Search>
      <Current weather={weather} />
      <Forecast />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  text-align: center;
  background-color: #102A43;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`

const SearchBar = styled.input`
  border-radius: 30px;
  border: 0;
  padding-left: 20px;
  margin: 10px;
  height: 50%;
  width: 100%;
  font-size: 20px;
  color: black;
  background-color: #FDFCDC;
  outline-width: 0;
`

export default App;
