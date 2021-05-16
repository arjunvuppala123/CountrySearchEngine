import React from 'react';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const SearchBar = ({keyword,setKeyword}) => {
  return (
      <div>
      <div>
  <br />
  <InputGroup 
  id="searchBar" 
  key="random1"
  value={keyword}
  placeholder={"search country"}
  onChange={(e) => setKeyword(e.target.value)}
  className="mb-3"
  >
  <DropdownButton id="dropdown-item-button" title="Dropdown button">
  <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
</DropdownButton>

    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <br />
</div>
    </div>
  );
}

export default SearchBar