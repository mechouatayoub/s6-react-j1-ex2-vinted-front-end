import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";

function SignUp({ authenticate }) {
  let [userName, setUserName] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPhone, setUserPhone] = useState("");
  let [userAcceptedConditions, setUserAcceptedConditions] = useState(false);
  let history = useHistory();
  async function subscribe(event) {
    event.preventDefault();
    if (userAcceptedConditions) {
      try {
        let address = "https://lereacteur-vinted-api.herokuapp.com/user/signup";
        let response = await axios.post(address, {
          email: userEmail,
          username: userName,
          phone: userPhone,
          password: userPassword,
        });
        Cookies.set("token", response.data.token, { expires: 1 });
        authenticate();

        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  }
  return (
    <div className="signUpPage pageContainer">
      <form onSubmit={subscribe} className="signUpForm">
        <h1>S'inscrire</h1>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(event) => {
            setUserEmail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Téléphone"
          onChange={(event) => {
            setUserPhone(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setUserPassword(event.target.value);
          }}
        />
        <input
          type="checkbox"
          onChange={(event) => {
            setUserAcceptedConditions(event.target.checked);
          }}
        />
        <input type="submit" name="" id="" />
      </form>
      <button className="forgetPassword">Mot de passe oublié?</button>
      <button className="needRegisterHelp">Besoin d'aide?</button>
    </div>
  );
}

export default SignUp;
