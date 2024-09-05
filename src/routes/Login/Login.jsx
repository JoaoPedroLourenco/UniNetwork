import { useState } from "react";
import gitHub from "../../assets/imgs/GitHub.png";
import google from "../../assets/imgs/Google.png";
import styles from "./Login.module.css";

import { Link } from "react-router-dom";

const Login = () => {
  // consumir estado do email e senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="title">
        <h1>Login</h1>
      </div>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Insira seu E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            placeholder="Insira sua Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <div className={styles.btnLogin}>
            <button>Entrar</button>
          </div>

          <p>OU</p>

          <button className={styles.btnAltConnect}>
            <img src={google} alt="google" />
            Conectar com Google
          </button>
          <button className={styles.btnAltConnect}>
            <img src={gitHub} alt="gitHub" />
            Conectar com GitHub
          </button>

          <p>
            Não possui uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
