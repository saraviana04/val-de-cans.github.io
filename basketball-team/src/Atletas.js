// src/Atletas.js
import React from "react";

const atletas = [
  {
    nome: "Elson Viana",
    pais: "🇧🇷 Brasil",
    modalidade: "Basquete",
    fotoPrincipal: "/Atletas/Elsonviana.png",
  },
  {
    nome: "Carlos Manoel",
    pais: "🇧🇷 Brasil",
    modalidade: "Basquete",
    fotoPrincipal: "/Atletas/carlosmanoel.jpeg",
  },
  {
    nome: "Weverton Yago",
    pais: "🇧🇷 Brasil",
    modalidade: "Basquete",
    fotoPrincipal: "",
  },
   {
      nome: "Alex Cavaleiro",
      pais: "🇧🇷 Brasil",
      modalidade: "Basquete",
      fotoPrincipal: "/Atletas/alexcavaleiro.jpeg",
    },
    {
          nome: "Claudio Mota",
          pais: "🇧🇷 Brasil",
          modalidade: "Basquete",
          fotoPrincipal: "",
    },
    {
          nome: "Carlos Mota",
          pais: "🇧🇷 Brasil",
          modalidade: "Basquete",
          fotoPrincipal: "",
    },
    {
          nome: "Livio Marinho",
          pais: "🇧🇷 Brasil",
          modalidade: "Basquete",
          fotoPrincipal: "",
    },





];

export default function Atletas() {
  return (
    <div className="min-h-screen">
      {/* TOPO COM IMAGEM DE FUNDO */}
      <div
        className="relative text-white text-center py-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Atletas/fundoatleta.png')",
        }}
      >
        <h1 className="text-4xl font-bold mb-2">Atletas</h1>
        <p className="max-w-xl mx-auto">
          Conheça nossos atletas, suas trajetórias, suas conquistas e muito mais!
        </p>
      </div>

      {/* TODA A SEÇÃO COM FUNDO VERDE CALMO */}
      <div className="bg-calmgreen py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-6">
          {atletas.map((atleta, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
            >
              {/* FOTO PRINCIPAL */}
              <div className="w-full h-64 overflow-hidden flex justify-center items-center bg-white">
                <img
                  src={atleta.fotoPrincipal}
                  alt={atleta.nome}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* DADOS DO ATLETA */}
              <div className="py-4 px-4 text-center">
                <p className="text-xs text-gray-500">{atleta.pais}</p>
                <h2 className="text-lg font-semibold text-gray-900">{atleta.nome}</h2>
                <p className="text-sm text-gray-700">{atleta.modalidade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
