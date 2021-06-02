
import React, { useState, useEffect } from "react";
import { ContainerLogin } from "./style";
import {teste} from './script.js';
import { getLogins } from "../../pages/index";

const HomeLogin: React.FC<getLogins> = ({ data }) => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [drive, setDrive] = useState("");

  // const [validateUser, setValidateUser] = useState(false);

  // useEffect(() => {
  //   data.map((item) => {
  //     if (item.userName == userName && item.password == password) {
  //       setValidateUser(true);
  //       return setDrive(item.drive);
  //     }
  //   });
  // }, [userName, password]);

  // function messageInfo() {
  //   if (!validateUser) alert("Credenciais inválidas.");
  // }


  {

    



  }


  return (
    <>
      <ContainerLogin>
        <div className="Formulario">
          <div className="Imagem">
            <img src="./logoPremium.svg" alt="Logo Agência premium" />
          </div>

          <form id="formulario">
            <div>
              <label>Login</label>
              <input
                type="text"
                name="userName" //e-mail
                placeholder="Usuário"
                id="usuario"
                required
              />
            </div>

            <div>
              <label>Senha</label>
              <input
                type="password"
                name="password"
                placeholder="Senha"
                id="senha"
                required
              />
            </div>
            <input  onClick={() =>teste()} className="botao" type="submit" value="Entrar"/>
            {/* <a
              className="botao"
              type="submit"
              href={drive}
              onClick={() => messageInfo()}
            >
              Entrar
            </a> */}
          </form>
        </div>
      </ContainerLogin>
    </>
  );
};

export default HomeLogin;

// sdfjaskfj
