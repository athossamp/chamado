import { useState } from "react";
//import { InputModel } from "../components/UI/Input/Input";
import s from "./Login.module.css";
//import { login } from "../service/authservice";
import { useNavigate } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";
import Button from "../components/UI/Button/Button";

const Login: React.FC = () => {
  // const [teclogin, setTeclogin] = useState("");
  // const [tecsenha, setTecsenha] = useState("");
  const [error, setError] = useState("");
  //const { setAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await login(teclogin, tecsenha);
      // setAuthenticated(true);
      navigate("/");
    } catch (error) {
      setError("Login ou senha incorretos");
    }
  };

  return (
    <form className={s.formContainer} onSubmit={handleSubmit}>
      <div>
        <h2 className={s.loginTitle}>Acesse seu perfil</h2>
      </div>
      <div className={s.formInfo}>
        {/* <InputModel
          nome="teclogin"
          placeholder="Login"
          onChangeHandler={(e) => setTeclogin(e.target.value)}
          inputValue={teclogin}
        />
        <InputModel
          nome="tecsenha"
          placeholder="Senha"
          onChangeHandler={(e) => setTecsenha(e.target.value)}
          inputValue={tecsenha}
          classNameProps={s.tecSenha}
          autoComplete="off"
        /> */}
        <Button nome="Acessar" theme="laranja" type="submit" />
        {error && <div className={s.errorFallback}>{error}</div>}
      </div>
    </form>
  );
};

export default Login;
