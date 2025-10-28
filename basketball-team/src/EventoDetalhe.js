import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Componente: EventoDetalhe (Campeonato Master)
 * - Tabela de classificação à esquerda
 * - Jogos e rodadas à direita
 * - Botão para voltar à lista de eventos
 * - Estilos em Tailwind
 */

// ======== DADOS DE EXEMPLO ========
const times = [
  { pos: 1, nome: "Jurássicos", jogos: 4, v: 4, d: 0, gp: 246, gc: 201, ultimos: ["V", "V", "V", "x"] },
  { pos: 2, nome: "Bessa Manutenções", jogos: 4, v: 3, d: 1, gp: 232, gc: 215, ultimos: ["V", "V", "D", "x"] },
  { pos: 3, nome: "Real Belém", jogos: 4, v: 3, d: 1, gp: 221, gc: 207, ultimos: ["V", "V", "V", "x"] },
  { pos: 4, nome: "Val-de-Cans", jogos: 3, v: 1, d: 2, gp: 215, gc: 214, ultimos: ["D", "D", "V", "x"] },
  { pos: 5, nome: "Jump Basketball", jogos: 4, v: 1, d: 3, gp: 208, gc: 221, ultimos: ["D", "D", "V", "x"] },
  { pos: 6, nome: "All Star Cansado", jogos: 4, v: 0, d: 4, gp: 197, gc: 241, ultimos: ["D", "D", "D", "x"] },
];

const rodadas = [
  {
    numero: 1,
    dataTitulo: "27/09 • Sábado",
    jogos: [
      { horario: "16:00", local: "Sede Paysandu", casa: "All Star Cansado", fora: "Jurássicos", status: "Encerrado", placar: "58–64" },
      { horario: "17:30", local: "Sede Paysandu", casa: "Bessa Manutenções", fora: "Val-de-Cans", status: "Encerrado", placar: "67–60" },
    ],
  },
  {
    numero: 2,
    dataTitulo: "04/10 • Sábado",
    jogos: [
      { horario: "16:00", local: "Sede Paysandu", casa: "Jurássicos", fora: "Val-de-Cans", status: "Encerrado", placar: "61–55" },
      { horario: "17:30", local: "Sede Paysandu", casa: "Jump Basketball", fora: "Real Belém", status: "Encerrado", placar: "58–66" },
    ],
  },
  {
    numero: 3,
    dataTitulo: "26/10 • Sábado",
    jogos: [
      { horario: "16:00", local: "Sede Paysandu", casa: "Jump Basketball", fora: "Jurássicos", status: "A definir" },
      { horario: "17:30", local: "Sede Paysandu", casa: "Val-de-Cans", fora: "Real Belém", status: "Encerrado", placar: "62–32" },
    ],
  },
];

// ======== COMPONENTES DE APOIO ========

// bolinha colorida pros últimos jogos
function FormPill({ r }) {
  // V verde, D vermelho, x cinza
  const color =
    r === "V" ? "bg-green-500" : r === "D" ? "bg-red-500" : "bg-gray-400";
  return <span className={`inline-block w-2 h-2 rounded-full ${color}`} />;
}

function Header({ title }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold tracking-wide text-zinc-800">{title}</h2>
    </div>
  );
}

// ======== TABELA DE CLASSIFICAÇÃO ========
function TabelaClassificacao({ dados }) {
  const linhas = useMemo(() => {
    return dados
      .map((t) => {
        const pts = t.v * 2; // 2 pts por vitória
        const sg = t.gp - t.gc;
        const pct = t.jogos ? Math.round((t.v / t.jogos) * 100) : 0;

        return { ...t, pts, sg, pct };
      })
      // critério de desempate: pontos > saldo > pontos marcados
      .sort((a, b) => b.pts - a.pts || b.sg - a.sg || b.gp - a.gp);
  }, [dados]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
      {/* topo da tabela */}
      <div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between">
        <h3 className="font-semibold">TABELA</h3>
        <span className="text-xs text-zinc-500">Master 40+</span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-zinc-50 text-zinc-500">
            <tr className="text-left">
              <th className="px-4 py-3 w-10">#</th>
              <th className="px-4 py-3">Classificação</th>
              <th className="px-2 py-3 text-center">J</th>
              <th className="px-2 py-3 text-center">V</th>
              <th className="px-2 py-3 text-center">D</th>
              <th className="px-2 py-3 text-center">GP</th>
              <th className="px-2 py-3 text-center">GC</th>
              <th className="px-2 py-3 text-center">SG</th>
              <th className="px-2 py-3 text-center">%</th>
              {/* cabeçalho da última coluna alinhado à direita */}
              <th className="px-4 py-3 text-right pr-6">ÚLT. JOGOS</th>
            </tr>
          </thead>

          <tbody className="text-zinc-800">
            {linhas.map((t, i) => (
              <tr
                key={t.nome}
                className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
              >
                <td className="px-4 py-3 font-medium text-zinc-600">
                  {t.pos}
                </td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {/* bolinha de pontos */}
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                      {t.pts}
                    </span>
                    <span className="font-medium text-zinc-800">
                      {t.nome}
                    </span>
                  </div>
                </td>

                <td className="px-2 py-3 text-center">{t.jogos}</td>
                <td className="px-2 py-3 text-center">{t.v}</td>
                <td className="px-2 py-3 text-center">{t.d}</td>
                <td className="px-2 py-3 text-center">{t.gp}</td>
                <td className="px-2 py-3 text-center">{t.gc}</td>
                <td className="px-2 py-3 text-center">{t.sg}</td>
                <td className="px-2 py-3 text-center">{t.pct}</td>

                {/* última coluna: bolinhas dos últimos jogos, alinhadas com header */}
                <td className="px-4 py-3 text-right pr-6">
                  <span className="inline-flex gap-1 justify-end">
                    {t.ultimos.map((r, idx) => (
                      <FormPill key={idx} r={r} />
                    ))}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ======== CARD DE JOGO ========
function CardJogo({ jogo }) {
  return (
    <div className="p-4 border border-zinc-200 rounded-xl flex flex-col gap-2 bg-white">
      {/* linha com horário, local */}
      <div className="text-xs text-zinc-500">
        <span className="font-medium text-zinc-700">{jogo.horario}</span> •{" "}
        {jogo.local}
      </div>

      {/* times e placar no estilo do print */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="flex-1 text-right font-semibold text-zinc-800 leading-tight">
          {jogo.casa}
        </div>
        <div className="text-zinc-500">×</div>
        <div className="flex-1 font-semibold text-zinc-800 leading-tight">
          {jogo.fora}
        </div>

        {jogo.placar && (
          <span className="ml-auto text-xs font-semibold bg-zinc-100 text-zinc-700 px-2 py-1 rounded-md self-start">
            {jogo.placar}
          </span>
        )}
      </div>

      {/* status */}
      <div className="text-xs text-zinc-500 italic">{jogo.status}</div>
    </div>
  );
}

// ======== JOGOS E RODADAS ========
function JogosRodadas({ dados }) {
  const [indice, setIndice] = useState(0);
  const rodada = dados[indice];

  function prev() {
    setIndice((i) => (i - 1 + dados.length) % dados.length);
  }
  function next() {
    setIndice((i) => (i + 1) % dados.length);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
      {/* topo jogos */}
      <div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between">
        <h3 className="font-semibold">JOGOS</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Rodada anterior"
            className="w-8 h-8 rounded-full border border-zinc-200 grid place-content-center hover:bg-zinc-50 text-zinc-600"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="text-sm font-semibold text-zinc-800">
            {rodada.numero}ª RODADA
          </div>
          <button
            onClick={next}
            aria-label="Próxima rodada"
            className="w-8 h-8 rounded-full border border-zinc-200 grid place-content-center hover:bg-zinc-50 text-zinc-600"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* corpo jogos */}
      <div className="p-5">
        <div className="text-xs text-zinc-500 mb-3">{rodada.dataTitulo}</div>

        <div className="grid gap-3">
          {rodada.jogos.map((j, idx) => (
            <CardJogo key={idx} jogo={j} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ======== COMPONENTE PRINCIPAL ========
export default function EventoDetalhe() {
  return (
    <div className="min-h-screen w-full bg-emerald-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Header title="Campeonato Master 40+ • Temporada 2025/26" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TabelaClassificacao dados={times} />
          </div>
          <div className="lg:col-span-1">
            <JogosRodadas dados={rodadas} />
          </div>
        </div>

        {/* Botão para voltar */}
        <div className="text-center">
          <Link
            to="/jogoseeventos"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition duration-200 font-medium"
          >
            ← Voltar para Eventos
          </Link>
        </div>
      </div>
    </div>
  );
}
