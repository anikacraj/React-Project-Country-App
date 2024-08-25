import React, { useState ,useEffect} from 'react'

export const Search = (props) => {
    const[searchText ,setSearchText] =useState("")

const handleChange =(e)=>{

    setSearchText(e.target.value);
   
}
useEffect(() => {
    props.onSearch(searchText)
   
}, [searchText])


  return (
    <div style={{textAlign:"center"}}>
<input type="text" placeholder='search country' 
value={searchText}
onChange={handleChange}
/>


    </div>
  )
}
