import React, { useState } from 'react'

const travelList = () => {
    const[travel, setTravel]=useState({
        "destination":"",
        "départ":"", 
        "debut":"", 
        "fin":"",
        "heure locale":""
    })
  return (
    <div>travelList</div>
  )
}

export default travelList