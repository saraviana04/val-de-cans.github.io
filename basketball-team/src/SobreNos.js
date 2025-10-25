import React from "react";

export default function Sobrenos() {
  return (
    <div className="min-h-screen bg-calmgreen py-10 px-6 text-green-900">
      {/* Título */}
      <h1 className="text-4xl font-bold text-center mb-8">Nossa História</h1>

      {/* Texto da história */}
      <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6">
        <p>
          A equipe de basquetebol do bairro de Val-de-Cans teve seu início em
          <strong> 1989</strong>. Até então, era apenas um time da escola{" "}
          <strong>Escola Técnica do Pará</strong> (atual IFPA), fundado pelos
          irmãos <strong>Sara</strong> e <strong>Sara e Elson Vian</strong>.
        </p>

        <p>
          Já em <strong>1990</strong>, surgiu a ideia de criar a equipe oficial
          do bairro de Val-de-Cans — nascendo assim o{" "}
          <strong>Val-de-Cans Basquetebol</strong>. Desde então, seguimos atuando
          nos principais campeonatos de basquete amador do estado do Pará.
        </p>

        <p>
          Hoje somos uma das poucas equipes com mais de <strong>90% dos jogadores
          moradores ou ex-moradores</strong> do bairro de Val-de-Cans e
          Maracangalha.
        </p>

        <p>
          Contamos com uma das <strong>únicas quadras exclusivas para basquete</strong>
          em Belém. Todos estão convidados para conhecer e jogar conosco!
        </p>

        <p className="text-center font-semibold">
          📍 Avenida Júlio César — próximo ao Aeroporto Internacional de Belém.
        </p>
      </div>

      {/* Imagem clicável da quadra */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://www.google.com/maps/place/Avenida+Júlio+César,+Belém+-+PA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Atletas/fundoatleta.png"
            alt="Nossa quadra"
            className="w-full max-w-2xl rounded shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          />
          <p className="text-center text-sm text-green-800 mt-2">
            Clique na imagem para ver no mapa
          </p>
        </a>
      </div>
    </div>
  );
}
