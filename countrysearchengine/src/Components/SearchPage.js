import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CountryList from './CountryList';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'

function SearchPage(props) {

    const [input, setInput] = useState('');
    const [countryListDefault, setCountryListDefault] = useState();
    const [countryList, setCountryList] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async() => {
        return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setCountryList(data);
                setCountryListDefault(data);
                setIsLoading(true);
            });
    }

    const updateInput = async(input) => {
        const filtered = countryListDefault.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setCountryList(filtered);
    }

    useEffect(() => { fetchData() }, [])

    return ( 
        <div>
        <Jumbotron fluid className="Heading">
  <Container>
    <h1>Country Search Engine</h1>
    <p>
      This is a search engine that gets the list of countries along with some useful facts
    </p>
  </Container>
</Jumbotron>
        <SearchBar 
        keyword = { input }
        setKeyword = { updateInput }
        /> 
        {!isLoading &&  
            <Spinner animation="border" variant="primary" />
    }
       {isLoading &&  <CountryList 
        countryList = { countryList }
        />}
        </div >
    )
}

export default SearchPage;