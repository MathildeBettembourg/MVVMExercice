import React, { Fragment } from 'react'
import TravelListe from '../viewModel/TravelListe';
import ListeVoyages from '../View/ListeVoyages';

const TravelListeModel = () => {

    const viewModel = TravelListe();

    const ajouterUnVoyage=(voyageUnit)=>{
        viewModel.ajouterVoyage(voyageUnit);
        console.log(viewModel.unitVoyage)
    }

  return (
    <Fragment>
    <h2>Liste de voyages : </h2>
        <ListeVoyages 
        listeVoyages={viewModel.voyage}
        ajouterUnVoyage={ajouterUnVoyage}
        supprimerUnVoyage={viewModel.supprimerTravel}
        voyageUnit={viewModel.unitVoyage}
        modifierVoyage={viewModel.unitVoyageSetter }

        />
    </Fragment>
  
  )
}

export default TravelListeModel;