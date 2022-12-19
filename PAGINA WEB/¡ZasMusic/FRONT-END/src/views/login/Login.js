import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';

import "./Login.css"

function Login() {
    return (
        <section className='login'>
            <div className="container">
                <Link to="/"><Logo showText={false} size="50px" /></Link>
                <h1 className='title'>Iniciar Sesión</h1>
                <p>¡Bienvenido, disfruta de nuestro contenido!</p>
                <form className='flex card form'>
                    <Input>Usuario</Input>
                    <Input type="password">Contraseña</Input>
                    <Link to="/panel"><Button style="fill">Iniciar Sesión</Button></Link>
                </form>
                <div className='register card'>
                    <p>
                        ¡Aún No Tienes Cuenta! <Link to="/register">Crear una cuenta</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;