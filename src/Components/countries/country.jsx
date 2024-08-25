import React from 'react'

import style from "./country.module.css"

export default function (props) {
   
    const { name, flags, capital, population, area } = props.country;
  


    const handleRemove = (name) => {
      props.onRemove(name);
    };
  

    return (
      <>
        <article className={style.country}>
          <div>
            <img src={flags.png} alt={name.common}
            className={style.flag}
            />
            <h3>Name :{name.common}</h3>
            <h3>capital :{capital}</h3>
            <h3>population :{population} M</h3>
            <h3>area :{area} sq</h3>

      <button className={style.btn} onClick={()=>{
        handleRemove(name.common)
      }}>
        Remove Country
      </button>

          </div>
          <div>
           
          </div>
        </article>
      </>
    );
}
