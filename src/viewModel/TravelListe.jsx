import React, { useState } from 'react';


const TravelList = () => {
    const[voyage, setVoyage]=useState([])
    const[unitVoyage, setUnitVoyage]=useState(
        {
         id:"",
         destination:"",
         debut:"",
         fin:"",
         heureLocale:"",
         nombrePersonnes:""
     }
)
    const ajouterVoyage = (unitVoyage) =>{
        setVoyage([...voyage,unitVoyage].sort((a,b) => Date.parse(a.debut) - Date.parse(b.debut) ))
        //setVoyage([...voyage, unitVoyage])
    }
    const supprimerTravel = (id) =>{
        setVoyage(voyage.filter(unitVoyage => unitVoyage.id!==id));
    }
    const unitVoyageSetter = (unitVoyage)=>{
        setUnitVoyage(unitVoyage)

    }
  return {voyage, ajouterVoyage, supprimerTravel, unitVoyage, unitVoyageSetter}
}

export default TravelList