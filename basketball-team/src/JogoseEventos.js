import React from "react";
import { useNavigate } from "react-router-dom";

const eventos = [
  {
    id: "torneio-conegunes",
    nome: "Torneio Conegunes",
    data: "15 de Junho, 2025",
    local: "Quadra UFPA",
    imagem: "/JogoseEventos/eventos01.jpg",
    infoRoute: "/evento-info/torneio-conegunes",
  },
  {
    id: "torneio-master",
    nome: "Torneio Master",
    data: "Temporada 2025/26 da LBB",
    local: "Quadra Escola superior de educação Fisica",
    imagem: "/JogoseEventos/torneioMaster.jpeg",
    detailRoute: "/evento/1",
  },
  {
    id: "lbb-inscricoes",
    nome: "LBB abrirá inscrições para todas as categorias.",
    data: "De 10 de Junho a 10 de Julho de 2025",
    local: "A definir",
    imagem: "/JogoseEventos/eventos01.jpg",
    infoRoute: "/evento-info/lbb-inscricoes",
  },
];

export default function JogoseEventos() {
  const navigate = useNavigate();

  const handleVerDetalhes = (index) => {
    const evento = eventos[index];

    if (evento.detailRoute) {
      navigate(evento.detailRoute);
      return;
    }

    if (evento.infoRoute) {
      navigate(evento.infoRoute);
    }
  };

  return (
    <div className="min-h-screen bg-calmgreen py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-900 mb-2">Jogos & Competições</h1>
        <p className="text-green-800">Acompanhe nossos próximos desafios e participe!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {eventos.map((evento, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-4 flex flex-col items-start hover:shadow-2xl transition-shadow"
          >
            <img
              src={evento.imagem}
              alt={evento.nome}
              className="w-full h-56 object-cover rounded mb-4 shadow"
            />
            <h2 className="text-xl font-bold text-green-900 mb-1">{evento.nome}</h2>
            <p className="text-sm text-gray-700">📅 {evento.data}</p>
            <p className="text-sm text-gray-700">📍 {evento.local}</p>
            <button
              onClick={() => handleVerDetalhes(index)}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
