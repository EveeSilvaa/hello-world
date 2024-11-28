import React, { useState } from "react";
import imageSrc from "./images/baú.png"; // Imagem que será exibida

function Popup({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const openPopup = () => setPopupVisible(true);
  const closePopup = () => setPopupVisible(false);

  return (
    <div>
      <div className="container">
        <button
          className={`button ${isHovered ? "button-hover" : ""}`}
          onClick={openPopup}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Popup
        </button>
      </div>
      <Popup isVisible={isPopupVisible} onClose={closePopup}>
        <h1>Criei um popup para minha caixa de ferramentas, oba!</h1>
        <p>Pouco a pouco, povoaremos essa caixinha :D</p>
      </Popup>
      <img src={imageSrc} className="image" alt="Tool Box" />
    </div>
  );
}

export default App;
