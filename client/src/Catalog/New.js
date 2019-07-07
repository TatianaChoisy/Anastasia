import React, { Component } from 'react';
import './New.css';
import { NavLink } from 'react-router-dom';
import NavLeft from './Navigation/NavLeft';

export default class New extends Component {
    render() {
        return (
                
                 <div className="New">

                <NavLeft/>
                    <div className="column">
                    <div className="navigation">
                        <NavLink to="/new" className="link-catalog">NEW</NavLink>
                        <NavLink to="/actu" className="link-catalog">ACTU</NavLink>
                        <NavLink to="/albums" className="link-catalog">ALBUMS</NavLink>
                        <NavLink to="/genres" className="link-catalog">GENRES</NavLink>

                    </div> 
                    <div className="row">
                        <img src="/assets/images/bjork.jpg" className="img-new" />
                        <div className="row-items">
                        <div className="items">
                        <h1 className="title-new">Björk dévoile le clip onirique de "Tabula Rasa"</h1>
                        <h6 className="date-new">13/05/19 10h54</h6>
                        <p className="paragraphe-new">Deux ans après la sortie de Utopia, Björk est de retour avec le clip totalement fantasmagorique de Tabula Rasa, titre extrait de ce dixième album. Réalisée par l'artiste digital Tobias Gremmler, dont le travail s'inspire grandement de la philosophie des arts martiaux, la vidéo dévoile la chanteuse dans un univers entièrement numérique. Son corps flotte ainsi dans l'air, se dilate et change de forme avec lenteur, poésie et raffinement. La musicienne a aussi annoncé dernièrement un nouveau spectacle intitulé Cornucopia “plus élaboré que jamais”, d’après elle. Une représentation qui associera musique acoustique et digitale. L'Islandaise a également, réédité dernièrement tous ses albums sur cassettes multicolores.</p>
                            </div>
                        </div>
                        </div>
               
                </div>


                </div>
            
               
        )}
  
}

 
         
            

