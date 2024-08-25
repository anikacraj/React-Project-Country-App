import React from 'react';
import Header from './header';
import {v4 as uuidv4} from "uuid";

function Card(props) {

  
    return (
     <>
  <section>
    {props.countries.map((country)=>{
const countryNew ={ ...country,id:uuidv4()}
    return <header {...countryNew} key={countryNew.id} />
    
    
    })}
  </section>
     </>
    );
  }
export default Card;