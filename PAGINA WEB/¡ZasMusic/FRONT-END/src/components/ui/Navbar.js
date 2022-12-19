import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../forms/Button';


import "./Navbar.css"

function Navbar() {

    return (
        <>
            <nav className='navbar'>
                <ul className='menu flex container'>
                <div className="container flex barra">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/panel">Catalogo</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                    </div>
                    <li><Link to="/login"><Button style="wire">Ingresar</Button></Link></li>
                    <li><Link to="/"><Logo size="34px" /></Link> </li>
                </ul>
            </nav >

            <Outlet></Outlet>
            <div className='container'>
                <div className='container info'>
                    <h1 className='ti'>r</h1>
                </div>
            </div>
                
        </>
    );
}

export default Navbar;