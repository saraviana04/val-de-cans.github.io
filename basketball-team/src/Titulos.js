import React from "react";
import { Link } from "react-router-dom";

export default function Titulos() {
  return (
    <div className="min-h-screen bg-calmgreen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full bg-white/95 backdrop-blur rounded-3xl border border-green-100 shadow-xl px-10 py-12 text-center space-y-6 text-green-900">
        <span className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-[0.4em] text-green-700">
          Página em manutenção
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900">
          Sala de troféus a caminho
        </h1>

        <p className="text-lg text-green-700">
          Estamos atualizando a galeria com fotos, estatísticas e histórias das conquistas do
          Val-de-Cans Basquetebol. Em breve você poderá reviver cada título com todos os detalhes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/jogoseeventos"
            className="bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Ver próximos jogos
          </Link>
          <Link
            to="/"
            className="border border-green-500 text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition"
          >
            Voltar à Home
          </Link>
        </div>

        <p className="text-sm text-green-600">
          Última atualização: preparando arquivos, revisando fotos históricas e organizando a cronologia.
        </p>
      </div>
    </div>
  );
}
