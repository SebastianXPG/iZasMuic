import React, { useContext } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { login } from "../../services/authService";
import "./Login.css";

function Login() {
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [setCookies] = useCookies(["token", "user"]);

  const navigate = useNavigate();

  async function onButtonClick(event) {
    event.preventDefault();
   
    const token = await login(userInput, passwordInput);
    
    if (token) {
      setUser(userInput);
      setToken(token);
  
      setCookies("token", token, { path: "/" });
      setCookies("token", userInput, { path: "/" });
      navigate("/panel");
    }
  }
  return (
    <section className="login">
      <div className="container">
        <Link to="/">
          <Logo showText={false} size="50px" />
        </Link>
        <h1 className="title">Iniciar Sesión</h1>
        <p>¡Bienvenido, disfruta de nuestro contenido!</p>
        <form className="flex card form">
          <Input onChange={(e) => setUserInput(e.target.value)}>Usuario</Input>
          <Input
            type="password"
            onChange={(e) => setPasswordInput(e.target.value)}
          >
            Contraseña
          </Input>
          <Button onClick={onButtonClick} style="fill">
            Iniciar Sesión
          </Button>
        </form>
        <div className="register card">
          <p>
            ¡Aún No Tienes Cuenta! <Link to="/register">Crear una cuenta</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
