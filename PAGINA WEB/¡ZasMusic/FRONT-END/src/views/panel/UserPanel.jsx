import React, { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import UserContext from "../../contexts/UserContext";
import { getTransactions } from "../../services/transactionService";

import "./UserPanel.css";

function UserPanel() {
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  const [cookies, setCookies] = useCookies(["token", "User"]);

  const currentUser = user ? user : cookies.user;
  const currentToken = token ? token : cookies.token;

  const navigate = useNavigate();

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      return navigate("/login");
    }
    fetchTransactions();
  }, []);

  async function fetchTransactions(user) {
    const documents = await getTransactions(currentToken);
    setDocuments(documents);
  }
  return (
    <section className="panel">
      <div className="container">
        <li>
          <Link to="/">⮐ Volver</Link>
        </li>
        <h1 className="catalogo">Catálogo</h1>
        <div className="balance card flex">
          <h1 className="entradas">TODOS</h1>
          <h2 className="entradas2">instrumentos</h2>
          <h2 className="entradas2">accesorios</h2>
          <h2 className="entradas2">interfaces</h2>
        </div>

        <div className="grid-layout">
          <div className="caja1"></div>

          <div className="caja2"></div>

          <div className="caja3"></div>

          <div className="caja4"></div>

          <div className="caja5"></div>

          <div className="caja6"></div>
        </div>
      </div>
    </section>
  );
}

export default UserPanel;
