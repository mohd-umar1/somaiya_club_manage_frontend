import React, { useState } from 'react'
import Clubsearch from './clubsearch'
import Form from 'react-bootstrap/Form';
import {Button, Container} from "react-bootstrap";

const Searchc = () => {
const [searchvalue, setsearchvalue]= useState("");
const [ShowResults, setShowResults]=useState(false)

const handleSearch = (e) => {
    e.preventDefault(); 
    setShowResults(true);
  };
  return (
    <>
    <div className='d-flex'>
            <Form.Control
            style={{width:"400px",marginTop: '6rem',marginRight:'1rem'}}
            type="text"
            placeholder="Search Clubs"
            className=" mr-sm-2 ms-auto"
            xs="auto"
            name="search"
            value={searchvalue}
            onChange={(e)=>setsearchvalue(e.target.value)}
            />
            <Button type="submit" style={{backgroundColor:"#162443",marginTop: '6rem'}} 
            onClick={handleSearch}>Search</Button>
        </div>
        {setShowResults&&<Clubsearch searchvalue={searchvalue}/>}
    </>
  )
}

export default Searchc