import React from "react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Veja o ranking dos melhores agentes livres da NBA",
    image: "/Blog/blog01.jpg",
    comments: 7,
    description: "Listamos atletas que devem se movimentar no mercado da offseason",
  },
  {
    id: 2,
    title: "Pacers desafia a história para vencer Knicks nos playoffs da NBA",
    image: "/Blog/blog02.jpg",
    comments: 5,
  },
  {
    id: 3,
    title: "Ocorreu no dia (01/05/2025) as quartas de finais entre a equipe Val-de-Cans x Jump.",
    image: "/Blog/vdc4°.jpg",
    comments: 3,
  },
  {
    id: 4,
    // ✅ chamada curta
    title: "Ocorrerá no dia (26/10/2025) a terceira rodada do Campeonato Master 40+",
    image: "/Blog/rodada3.jpeg",
    comments: 3,
    // ✅ conteúdo completo para a página do post
    full:
      "Ocorrerá no dia (26/10/2025) a terceira rodada do Campeonato Master 40+. O time do Val-De-Cans entrará em quadra em busca da sua primeira vitória contra o time do Real Belém. O jogo será transmitido ao vivo pelo canal do YouTube Conegunes Assessoria.",
    // ✅ logos dos times
    logos: ["/Logos/valdecans.png", "/Logos/realbelem.png"],
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-calmgreen py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">
        Últimas Notícias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => {
          const isRodada3 = post.id === 4;
          return (
            <Link to={`/blog/${post.id}`} key={post.id} className="relative group block">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded shadow-lg transition-opacity group-hover:opacity-80"
                />

                {/* selo de comentários */}
                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                  💬 {post.comments}
                </div>

                {/* ✅ logos dos dois times (só no post id 4) */}
                {isRodada3 && (
                  <div className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-none">
                    {post.logos?.map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt={`Logo time ${i + 1}`}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white p-1 shadow-lg object-contain"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                      />
                    ))}
                  </div>
                )}

                {/* título/chamada */}
                <h2 className="absolute bottom-2 left-2 right-2 text-white font-bold text-lg bg-black/60 px-2 py-1 rounded">
                  {post.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
