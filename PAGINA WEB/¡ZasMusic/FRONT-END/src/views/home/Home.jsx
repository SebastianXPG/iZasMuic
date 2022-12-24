import React from 'react';
import Button from '../../components/forms/Button';
import "./home.css"


// @ts-ignore



import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className='header'>
            <div className='container'>
                <div className='main-headline'>
                        <p className='support'>Zasmusic la página 
                        perfecta para todos los amantes de la música, 
                        encuentra los mejores instrumentos musicales 
                        al alcanze de un click compralos YA!!! desde 
                        su catálogo.
                        </p>
                </div>
                    <Link to="/register"><Button style="fill">Quero Mi Cuenta</Button></Link>
               
            </div>
        </section>
    );
}

export default Home;