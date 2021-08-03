import logo from "../assets/logo.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function MainBar({ isAuthenticated, authenticate }) {
  let [searchedWOrd, setSearchedWord] = useState("");
  let [selectedSubject, setSelectedSubject] = useState("");
  let [selectedLanguage, setSelectedLanguage] = useState("");
  let history = useHistory();
  return (
    <div className="mainBar pageContainer">
      <div className="businessLog">
        <img src={logo} alt="" />
      </div>
      <select name="" id="" className="siteOtherSubject"></select>
      <input
        type="text"
        className="searchField"
        placeholder={`Rechercher des articles`}
      />

      {!isAuthenticated && (
        <button
          className="registerButton"
          onClick={() => {
            console.log("hello");
            history.push("/signup");
          }}
        >
          S'inscrire
        </button>
      )}

      {!isAuthenticated && (
        <button
          className="loginButton"
          onClick={() => {
            history.push("/login");
          }}
        >
          Se connecter
        </button>
      )}
      {isAuthenticated && (
        <button className="disconnectButton" onClick={authenticate}>
          Se déconnecter
        </button>
      )}

      <button className="sellButton">Vends maintenante</button>
      <button className="faq">Q</button>
      <select className="languageSelection" name="" id=""></select>
    </div>
  );
}
export default MainBar;
