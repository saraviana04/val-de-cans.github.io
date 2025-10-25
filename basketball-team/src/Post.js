// src/Post.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Boletim de rumores e trocas da NBA (31/05/2025)",
    image: "/Blog/blog01.jpg",
    description:
      "Confira as últimas movimentações e rumores de trocas na NBA...",
  },
  {
    id: 2,
    title: "Pacers desafia a história para vencer Knicks nos playoffs da NBA",
    image: "/Blog/blog02.jpg",
    description:
      "Indiana segue surpreendendo a conferência leste com uma campanha consistente.",
  },
  {
    id: 3,
    title:
      "Ocorreu no dia (01/05/2025) as quartas de finais entre Val-de-Cans x Jump.",
    image: "/Blog/vdc4°.jpg",
    description:
      "Um duelo emocionante nas quartas de finais, com muita vibração da torcida e grandes atuações individuais.",
  },
  {
    id: 4,
    // título curto (igual ao card da lista)
    title:
      "Ocorrerá no dia (26/10/2025) a terceira rodada do Campeonato Master 40+",
    image: "/Blog/rodada3.jpeg",
    // explicação curta para a página aberta (igual estilo dos outros)
    description:
      "Val-De-Cans enfrenta o Real Belém em busca da primeira vitória na competição. A partida terá transmissão ao vivo pelo YouTube da Conegunes Assessoria. Fique ligado para escalações, placar e melhores momentos.",
  },
];

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="p-10 text-center text-red-500">
        Post não encontrado.
        <Link to="/blog" className="ml-2 text-blue-600 underline">
          Voltar ao Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-calmgreen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* FOTO GRANDE NO TOPO */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-6 md:p-10">
          {/* TÍTULO EM DESTAQUE (verde, como no exemplo) */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
            {post.title}
          </h1>

          {/* PARÁGRAFO CURTO EXPLICANDO O JOGO */}
          <p className="text-gray-800 text-lg leading-relaxed mb-8">
            {post.description}
          </p>

          {/* BOTÃO VOLTAR */}
          <Link
            to="/blog"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-200 font-medium"
          >
            ← Voltar ao Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
