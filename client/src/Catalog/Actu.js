import React, { Component } from 'react';
import './Actu.css';
import { NavLink } from 'react-router-dom';
import NavLeft from '../Catalog/Navigation/NavLeft';

export default class Actu extends Component {
    render() {
        return (
                
            <div className="Actu">
                
                    <NavLeft/>
                    <div className="column">
                    <div className="navigation">
                                <NavLink to="/new" className="link-catalog">NEW</NavLink>
                                <NavLink to="/actu" className="link-catalog">ACTU</NavLink>
                                <NavLink to="/albums" className="link-catalog">ALBUMS</NavLink>
                                <NavLink to="/genres" className="link-catalog">GENRES</NavLink>
        
                    </div> 
                        <div className="row">
                        <img src="/assets/images/tame-impala.jpg" className="img-actu" />
                        <div className="row-items">
                        <div className="items">
                        <h1 className="title-actu">Le retour de Tame Impala se précise</h1>
                        <h6 className="date-actu">11/03/19 12h18</h6>
                        <p className="paragraphe-actu">Coachella arrive à grands pas, mais le successeur de Currents n’est toujours pas là. Kevin Parker avait pourtant affirmé sur Beat 1 il y a quelques mois qu’il serait "très déçu" si le nouvel album de Tame Impala ne sortait pas avant l’été prochain. Comme pour honorer sa parole, et rassurer ses fans, le charismatique leader du groupe australien a teasé un extrait d’une nouvelle chanson, directement enregistré du studio.</p>
                            </div>
                        </div>
                        </div>

                        <div className="row">
                        <img src="/assets/images/cellophane.jpg" className="img-actu" />
                        <div className="row-items">
                        <div className="items">
                        <h1 className="title-actu">Cellophane : le retour triomphal et acrobatique de FKA Twigs</h1>
                        <h6 className="date-actu">25/04/19 14h57</h6>
                        <p className="paragraphe-actu">Échauffez‐vous. FKA Twigs se faisait bien discrète depuis la sortie de son troisième EP, M3LL155X, en 2015. Néanmoins, depuis quelques jours, quelques indices avaient été disséminés sur ses différents réseaux sociaux, comme la publication d’un nouveau visuel. “Album à venir ?” spéculaient les fans. Réponse hier soir, avec la sortie d’un nouveau morceau “Cellophane”, accompagné d’un clip tout en splendeur. Après plusieurs années d’attente, on retrouve la Britannique autour d’une barre de pole dance, justifiant les nombreuses vidéos d’entraînement qu’elle postait sur son compte Instagram. Et l’entraînement a été fructueux.</p>
                                </div>
                            </div>
                            </div>
                                    

                        <div className="row">
                        <img src="/assets/images/Grimes.jpg" className="img-actu" />
                        <div className="row-items">
                        <div className="items">
                        <h1 className="title-actu">Quelles sont les dernières lubies de Grimes ?</h1>
                        <h6 className="date-actu">03/05/19 09h03</h6>
                        <p className="paragraphe-actu">La chanteuse canadienne versatile Grimes sortira bientôt un cinquième album, Miss_Anthrop0cene et prépare une comédie mudicale. En parallèle, elle dévoile des changements importants : elle ne sortira plus d’album, elle change de prénom et elle veut faire des tournées en utilisant son hologramme.</p>
                                    </div>
                        </div>
                        </div>
                                            
                        </div>
                </div>
                    

               
            
               
        )}
  
}

 
         
            

