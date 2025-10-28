// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Atletas from "./Atletas";
import Blog from "./Blog";
import Post from "./Post";
import Footer from "./Footer";
import { TypeAnimation } from "react-type-animation";
import JogoseEventos from "./JogoseEventos";
import SobreNos from "./SobreNos";
import EventoDetalhe from "./EventoDetalhe";
import Titulos from "./Titulos";
import JunteSeEquipe from "./JunteSeEquipe";

function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center flex-1 px-6 sm:px-8 md:px-10 py-16 md:py-20 text-white">
      <div className="max-w-lg mb-10 md:mb-0 text-left">
        <h1 className="text-4xl font-extrabold mb-4 text-green-100">
          <TypeAnimation
            sequence={[
              "VAL DE CANS BASQUETEBOL",
              2000,
              "",
              500,
            ]}
            speed={350}
            repeat={Infinity}
          />
        </h1>
        <p className="mb-6 text-green-200">Mais que um time, uma família.</p>
        <div className="flex gap-4">
          <Link
            to="/jogoseeventos"
            className="bg-green-600 px-6 py-2 rounded font-semibold hover:bg-green-700"
          >
            Jogos e Competições
          </Link>
          <Link
            to="/junte-se"
            className="bg-yellow-400 text-green-900 px-6 py-2 rounded font-semibold hover:bg-yellow-300"
          >
            Junte-se à Equipe
          </Link>
        </div>
      </div>

      <div className="flex-shrink-0">
        <img
          src="/basketball.png"
          alt="Basketball"
          className="h-64 md:h-96"
        />
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col text-white">
        {/* Imagem de fundo */}
        <div
          className="fixed inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/background.png')" }}
        />
        {/* Sobreposição escura */}
        <div className="fixed inset-0 bg-black opacity-50 z-10" />

        {/* Conteúdo */}
        <div className="relative z-20 flex flex-col flex-1 min-h-screen">
          {/* HEADER */}
          <header className="flex flex-wrap gap-y-3 justify-between items-center px-6 md:px-10 py-4 bg-green-900/90 sticky top-0 z-30">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="h-10" />
              <span className="font-bold text-xl">val-de-cans Basquetebol</span>
            </div>
            <nav className="flex flex-wrap justify-end gap-3 sm:gap-6 items-center text-xs sm:text-sm font-semibold uppercase">
              <Link to="/" className="hover:text-yellow-400 whitespace-nowrap">Home</Link>
              <Link to="/sobre" className="hover:text-yellow-400 whitespace-nowrap">SOBRE NÓS</Link>
              <Link to="/titulos" className="hover:text-yellow-400 whitespace-nowrap">TÍTULOS</Link>
              <Link to="/atletas" className="hover:text-yellow-400 whitespace-nowrap">ATLETAS</Link>
              <Link to="/blog" className="hover:text-yellow-400 whitespace-nowrap">BLOG</Link>

              {/* CONTATO antes era <a href="#">, agora é um botão estilizado */}
              <button
                type="button"
                className="hover:text-yellow-400 focus:outline-none bg-transparent whitespace-nowrap"
                onClick={() => {
                  // se quiser rolar até o footer ou abrir modal depois
                  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                }}
              >
                CONTATO
              </button>

              <Link
                to="/junte-se"
                className="sm:ml-4 bg-yellow-400 text-green-900 font-bold px-4 py-1 rounded hover:bg-yellow-300 whitespace-nowrap text-xs sm:text-sm"
              >
                Junte-se à equipe
              </Link>
            </nav>
          </header>

          {/* Rotas */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/atletas" element={<Atletas />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<Post />} />
              <Route path="/jogoseeventos" element={<JogoseEventos />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/evento/:id" element={<EventoDetalhe />} />
              <Route path="/titulos" element={<Titulos />} />
              <Route path="/junte-se" element={<JunteSeEquipe />} />
            </Routes>
          </div>

          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
