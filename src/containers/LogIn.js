import { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
function LogIn({ authenticate }) {
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let history = useHistory();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let address = "https://lereacteur-vinted-api.herokuapp.com/user/login";
      let response = await axios.post(address, {
        email: userEmail,
        password: userPassword,
      });
      console.log(response);
      Cookies.set("token", response.data.token, { expires: 7 });
      authenticate();
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="loginPage pageContainer">
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setUserEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setUserPassword(event.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default LogIn;
