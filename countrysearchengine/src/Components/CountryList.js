import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CountryList = ({countryList=[]}) => {
  return (
    <>
    { countryList.map((data,index) => {
        if (data) {
          return (
            <div className="Card" key={data.name}>
                <Card border="dark" className="text-center">
                <Card.Header>{data.region}</Card.Header>
                <Card.Body className="body">
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                          {data.capital}
                    </Card.Text>
                    <Button variant="primary">Know More!</Button>
                </Card.Body>
              </Card>
            </div>
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList
