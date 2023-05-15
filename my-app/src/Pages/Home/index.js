import "./styles.css";

import Header from "../../Components/Header";

import React from "react";

function Home() {
  return (
    <div className="background">
      <div className="bg-gradient">
        <Header />
        <div className="container">
          <div className="text">
            <div className="title">
              <h1>A astronomia desvendada de maneira simples</h1>
            </div>
            <div className="sub">
              {" "}
              <span>
                {" "}
                Nós traduzimos o universo em palavras simples para que você
                possa explorá-lo sem dificuldade. Tornando a astronomia
                acessível a todos, porque a curiosidade sobre o espaço não
                conhece limites.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
