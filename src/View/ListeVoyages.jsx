import React, { useState } from 'react'
import 'react-calendar/dist/Calendar.css';
import { v4 as uuidv4 } from 'uuid';

const ListeVoyages = (props) => {
    const [display, setDisplay] = useState(true);

    /**
     * Fonction handlePlus est une fonction pour ouvrir le formulaire, 
     * en même temps il ermet de setter un id à l'objet voyage
     * @param {*} event 
     */
    const handlePlus = (event) => {
        setDisplay(!display);
        props.modifierVoyage({ ...props.voyageUnit, id: uuidv4() })
    }
    /**
     * HandleChangeDestination prends en charge l'input de la destination et 
     * modifie l'objet voyage
     * @param {*} event 
     */

    const handleChangeDestination = (event) => {
        props.modifierVoyage({ ...props.voyageUnit, destination: event.target.value })
    }
    /**
     * handleChangeDebut permet de setter une date du debut avec un calendrier
     * @param {*} event 
     */
    const handleChangeDebut = (event) => {
        props.modifierVoyage({ ...props.voyageUnit, debut: event.target.value })
    }

    /**
     * HanleChangefin permet de setter la date de fin du voyage, 
     * elle sera forcement après celle du début
     * @param {*} event 
     */
    const handleChangeFin = (event) => {
        if (event.target.value < props.voyageUnit.debut) {
            alert("La date de fin doit être après celle du début")
        } else {
            props.modifierVoyage({ ...props.voyageUnit, fin: event.target.value })
        }
    }

    /**
     * HandleChangeNombreDePersonne permet de modifier l nombre de personne du voyage
     * @param {*} event 
     */
    const handleChangeNombrePersonnes = (event) => {
        props.modifierVoyage({ ...props.voyageUnit, nombrePersonnes: event.target.value })
    }

    /**
     * HandleSubmit permet d'envoyer d'éditer le voyage
     * @param {*} e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.voyageUnit.destination.length < 1 || props.voyageUnit.debut.length == "" || props.voyageUnit.fin.length == "" || props.voyageUnit.nombrePersonnes == 0) {
            alert("tous les champs doivent être remplis")
        } else {
            props.ajouterUnVoyage(props.voyageUnit)
            handlePlus()
        }
    }
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        props.supprimerUnVoyage(e.target.parentNode.firstChild.textContent)
    }

    return (
        // {
        //     id:"",
        //     destination:"",
        //     debut:"",
        //     fin:"",
        //     heureLocale:"",
        //     nombrePersonnes:""
        // }

        <>
            <h2>view - Liste voyages</h2>
            {display ? <button onClick={handlePlus}>+</button> : <><button onClick={handlePlus}>-</button>
                <form>
                    <div>
                        <label htmlFor='destination'>Destination</label>
                        <input onChange={handleChangeDestination} id='destination' type='text' name='destination' placeholder='entrez votre destination' />
                        <label htmlFor='debut'>Debut</label>
                        <input onChange={handleChangeDebut} id='debut' type='date' name='debut' />
                        <label htmlFor='fin'>fin</label>
                        <input onChange={handleChangeFin} id='fin' type='date' name='fin' />
                        {/* <label htmlFor='heureLocale'>Heure locale</label>
                <input id='heureLocale' type='text' name='heureLocale'/> */}
                        <label htmlFor='nombrePersonnes'>Nombre de voyageurs</label>
                        <input onChange={handleChangeNombrePersonnes} id='nombrePersonne' type='number' name='nombrePersonne' placeholder='entrez le nombre de voyageurs' />
                    </div>
                    <button onClick={handleSubmit}> Ajouter</button>
                </form>
            </>
            }

            <h3>Liste de destinations</h3>
            {props.listeVoyages && props.listeVoyages.map((voyage, id) => {
                return (
                    <li key={id}>
                        <div>
                            <p>{voyage.id}</p>
                            <p><b>Destination</b> : {voyage.destination}</p>
                            <p><b>Début :</b> {voyage.debut}</p>
                            <p><b>Fin : </b>{voyage.fin}</p>
                            <p><b>Nombre de voyageurs :</b> {voyage.nombrePersonnes}</p>
                            <button onClick={handleDelete}>Supprimer</button>
                        </div>
                    </li>
                )
            })}


        </>
    )
}

export default ListeVoyages