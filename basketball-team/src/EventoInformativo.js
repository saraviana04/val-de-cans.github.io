import React from "react";
import { useParams, Link } from "react-router-dom";

const informativos = {
  "torneio-conegunes": {
    titulo: "Torneio Conegunes",
    imagem: "/JogoseEventos/eventos01.jpg",
    destaques: [
      "Em breve vamos liberar todos os detalhes do Torneio Conegunes..",
      "Acompanhe as atualizações nas redes sociais para saber sobre a tabela completa, horários dos jogos e regulamento.",
    ],
    complemento:
      "Assim que as datas forem confirmadas, publicaremos aqui o cronograma completo para você apoiar o Val-de-Cans Basquetebol em mais uma disputa emocionante.",
  },
  "lbb-inscricoes": {
    titulo: "Inscrições LBB para todas as categorias",
    imagem: "/JogoseEventos/eventos01.jpg",
    destaques: [
      "Já anota aí na sua agenda: de 10 de junho a 10 de julho de 2025 a LBB abrirá inscrições para todas as categorias.",
      "No dia 10 de julho você terá acesso aos regulamentos completos com todas as informações específicas de cada campeonato.",
    ],
    complemento:
      "Até lá, deixa seus documentos preparados e acompanha os nossos canais. Para dúvidas, fale com a equipe pelo WhatsApp (91) 98889-20509.",
  },
};

export default function EventoInformativo() {
  const { id } = useParams();
  const info = informativos[id];

  if (!info) {
    return (
      <div className="min-h-screen bg-calmgreen py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center space-y-4">
          <h1 className="text-2xl font-bold text-green-800">
            Informações em breve
          </h1>
          <p className="text-green-700">
            Ainda estamos preparando os detalhes desta competição. Volte mais
            tarde ou acompanhe nossas redes para não perder nenhuma novidade.
          </p>
          <Link
            to="/jogoseeventos"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Voltar para Eventos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-calmgreen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-50 flex justify-center items-center">
          <img
            src={info.imagem}
            alt={info.titulo}
            className="w-full max-w-4xl h-56 sm:h-72 md:h-96 object-contain"
          />
        </div>

        <div className="p-6 md:p-10 space-y-6 text-green-900">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900">
            {info.titulo}
          </h1>

          <div className="space-y-4 text-base leading-relaxed">
            {info.destaques.map((texto, index) => (
              <p key={index} className="text-green-800">
                {texto}
              </p>
            ))}
            {info.complemento && (
              <p className="text-green-800">{info.complemento}</p>
            )}
          </div>

          <Link
            to="/jogoseeventos"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-200 font-medium"
          >
            ← Voltar para Jogos & Competições
          </Link>
        </div>
      </div>
    </div>
  );
}
