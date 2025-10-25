import React from "react";
import { Link } from "react-router-dom";

export default function JunteSeEquipe() {
  return (
    <div className="min-h-screen bg-calmgreen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full bg-white/95 backdrop-blur rounded-3xl border border-green-100 shadow-xl px-10 py-12 text-center space-y-6 text-green-900">
        <span className="inline-flex items-center justify-center text-xs font-semibold uppercase tracking-[0.4em] text-green-700">
          Página em manutenção
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900">
          Inscrições para o time em breve
        </h1>

        <p className="text-lg text-green-700">
          Estamos organizando o processo oficial para novos atletas, voluntários e membros da
          comissão técnica. Em breve você poderá preencher o formulário, escolher horários de
          avaliação e receber retorno da equipe.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-5 text-left space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
            Enquanto isso
          </p>
          <ul className="space-y-2 text-sm text-green-800 list-disc list-inside">
            <li>Fique de olho nas redes sociais para o anúncio oficial.</li>
            <li>Prepare seus documentos, histórico esportivo e disponibilidade.</li>
            <li>Participe dos treinos abertos para já conhecer a galera.</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/jogoseeventos"
            className="bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition"
          >
            Ver calendário de jogos
          </Link>
          <Link
            to="/"
            className="border border-green-500 text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition"
          >
            Voltar à Home
          </Link>
        </div>

        <p className="text-sm text-green-600">
          Contato rápido: direct no Instagram ou mensagem via WhatsApp da equipe.
        </p>
      </div>
    </div>
  );
}
