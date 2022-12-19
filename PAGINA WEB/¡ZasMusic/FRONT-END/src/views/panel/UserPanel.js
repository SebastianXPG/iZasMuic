import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Transaction from './Transaction';

import "./UserPanel.css"



function UserPanel() {

    const user = "Camilo"

    async function fetchTransactions() {
        const res = await fetch("http://localhost:8080/api/transaction/" + user)
        const documents = await res.json()
        setDocuments(documents)
    }

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        fetchTransactions()
    }, []);

    return (
        <section className='panel'>
            <div className='container'>
            <li><Link to="/">⮐ Volver</Link></li>
                <h1 className='catalogo'>Catálogo</h1>
                <div className='balance card flex'>
                    <h1 className='entradas'>TODOS</h1>
                    <h2 className='entradas2'>instrumentos</h2>
                    <h2 className='entradas2'>accesorios</h2>
                    <h2 className='entradas2'>interfaces</h2>
                </div>

                <div className='grid-layout'>
                    <div className='caja1'></div>

                    <div className='caja2'></div>

                    <div className='caja3'></div>

                    <div className='caja4'></div>

                    <div className='caja5'></div>

                    <div className='caja6'></div>
                </div>
            </div>
        </section>
    );
}

export default UserPanel;