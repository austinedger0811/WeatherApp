import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const App = () => {

  var key = 'b075c49533634e1894f23737210509'
  const baseURL = "http://api.weatherapi.com/v1/"

  const [city, setCity] = useState('New York')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    axios.get(`${baseURL}current.json?key=${key}&q=${city}&aqi=no`).then((response) => {
      setWeather(response.data)
    })
  }, [city, key])

  const search = (event) => {
    if (event.key === 'Enter') {
      setCity(event.target.value)

      console.log(weather)
    }
  }

  const getWeather = (location) => {
    axios.get(`${baseURL}current.json?key=${key}&q=${city}&aqi=no`).then((response) => {
      setWeather(response.data)
    })
  }


  return (
    <Container>
      <Search>
        <SearchBar type="text" placeholder="Search cities" onKeyDown={search}></SearchBar>
      </Search>
      <City>
        <h1> {city} </h1>
      </City>
      <Weather>
        <h2> {weather !== null ? weather.current.temp_f : 'test'} </h2>
      </Weather>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  text-align: center;
  background-color: #121212;
`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
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
  background-color: white;
  outline-width: 0;
`

const City = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 55px;
  color: white;
  height: 200px;
`

const Weather = styled.div`
 color: white;
`

export default App;
