const posts = [
  {
    id: 1,
    title: "Veja o ranking dos melhores agentes livres da NBA",
    image: "/Blog/blog01.jpg",
    comments: 7,
    excerpt: "Listamos atletas que devem se movimentar no mercado da offseason.",
    content:
      "Confira as últimas movimentações e rumores de trocas na NBA, incluindo projeções sobre possíveis destinos para os principais agentes livres desta offseason.",
  },
  {
    id: 2,
    title: "Pacers desafia a história para vencer Knicks nos playoffs da NBA",
    image: "/Blog/blog02.jpg",
    comments: 5,
    excerpt:
      "Indiana segue surpreendendo a conferência leste com uma campanha consistente rumo às finais.",
    content:
      "Pacers desafia a história para vencer Knicks nos playoffs da NBA. A equipe de Indiana mantém o embalo com atuações coletivas sólidas e defesa agressiva.",
  },
  {
    id: 3,
    title:
      "Ocorreu no dia (01/05/2025) as quartas de finais entre a equipe Val-de-Cans x Jump.",
    image: "/Blog/vdc4°.jpg",
    comments: 3,
    excerpt:
      "Um duelo emocionante nas quartas de finais, com muita vibração da torcida e grandes atuações individuais.",
    content:
      "Relembre os melhores momentos das quartas de finais entre Val-de-Cans e Jump, com direito a viradas no placar e torcedores empurrando o time até o último lance.",
  },
  {
    id: 4,
    title: "🏀Ocorreu no dia 26/10/2025 A Primeira vitória da Equipe Val-de-Cans no Master 40+",
    image: "/Blog/val-de-cans-vitoria.jpeg",
    comments: 3,

    full: `
      <article class="text-gray-800 max-w-3xl mx-auto px-4 py-6 space-y-6">
        <header>
            <div class="text-sm text-gray-600 mt-2">
            <p><strong>Data:</strong> 26/10/2025</p>
            <p><strong>Local:</strong> Ginásio Sede Paysandu</p>
            <p><strong>Competição:</strong> Campeonato Master 40+</p>
            <p><strong>Rodada:</strong> 3ª rodada</p>
          </div>
        </header>

        <!-- Placar -->
        <section class="bg-green-700 text-white rounded-xl p-5 text-center shadow-md">
          <p class="uppercase text-sm tracking-wide text-green-100 font-semibold">
            Placar Final
          </p>
          <p class="text-4xl font-extrabold mt-1">
            Val-de-Cans <span class="text-yellow-300">66</span> x <span class="text-yellow-300">32</span> Real Belém
          </p>
          <p class="italic text-green-100 text-xs mt-1">
            Primeira vitória do Val-de-Cans no campeonato
          </p>
        </section>

        <section class="space-y-4 leading-relaxed text-base">
          <p>
            No dia <strong>26 de outubro de 2025</strong> foi disputada a terceira rodada do
            <strong>Campeonato Master 40+</strong>, marcando um momento histórico para o
            <strong>Val-de-Cans</strong>: a primeira vitória da equipe na competição!
          </p>

          <p>
            Enfrentando o <strong>Real Belém</strong>, o Val-de-Cans mostrou garra e
            determinação do início ao fim. Com ótimo aproveitamento ofensivo e uma defesa sólida,
            a equipe controlou a partida e venceu com autoridade por
            <strong>66 a 32</strong>.
          </p>

          <!-- Destaque do cestinha -->
          <div class="bg-yellow-400 text-black font-semibold rounded-xl px-4 py-3 text-sm shadow">
            🔥 <strong>Destaque da partida:</strong> o <strong>jogador nº 18</strong>
            foi o cestinha do Val-de-Cans, marcando <strong>16 pontos</strong> e sendo
            peça-chave na construção da vitória.
          </div>

          <p>
            Essa vitória representa o resultado do trabalho em equipe, da dedicação nos treinos e da
            união do grupo. A torcida vibrou do início ao fim, empurrando o time para essa conquista
            marcante.
          </p>

          <p class="font-bold text-green-800">
            Esse é só o começo! 💚💛
            Vem mais por aí — Vamos, Val-de-Cans! 🏀
          </p>
        </section>
      </article>

    `,
    logos: ["/Logos/valdecans.png", "/Logos/realbelem.png"],
  },
];

export default posts;
