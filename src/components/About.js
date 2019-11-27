import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <h2>O aplikacji</h2>
      <div className="about-wrapper">
        <i class="fas fa-rocket fa-5x"></i>
        <p>
          Projekt stworzony w oparciu o bibliotekę React i środowisko
          create-react-app. Aplikacja umożliwia dodawanie i usuwanie wydatków.
          Kalkulator podaje sumę wszystkich wydatków oraz daty ich dodania.
          Program umożliwia zapisywanie wydatków. Nawet po opuszczeniu
          przeglądarki twoje wydatki będę nadal dostępne!
        </p>
      </div>
    </>
  );
};
export default About;
