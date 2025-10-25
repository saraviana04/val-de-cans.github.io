# Val-de-Cans Basquetebol

Aplicativo web em React que apresenta a equipe de basquete Val-de-Cans, reunindo informações sobre história, atletas, notícias e competições. O projeto foi criado com Create React App e estilizado com Tailwind CSS.

## ✅ Funcionalidades principais
- Landing page com hero, animação de texto (`react-type-animation`) e chamadas para ação.
- Navegação via `react-router-dom` com páginas para Home, Sobre Nós, Atletas, Blog, Jogos & Competições e detalhe de evento.
- Catálogo de atletas com cards responsivos e imagens hospedadas na pasta `public/Atletas`.
- Blog com cards de notícias, contador de comentários e página de detalhe (`/blog/:id`) por post.
- Página de eventos com cards e navegação para detalhe de evento (`/evento/:id`), incluindo tabela de classificação e controle de rodadas.
- Footer com ícones sociais (`react-icons`) e crédito da desenvolvedora.

## 🧰 Stack e dependências
- React 19 (CRA com `react-scripts`)
- Tailwind CSS 3 (configuração em `tailwind.config.js`)
- React Router DOM 7
- React Icons
- React Type Animation
- Testing Library (configuração padrão do CRA)

## 📂 Estrutura de pastas
```
src/
  App.js            # Definição das rotas e layout principal
  Atletas.js        # Lista de atletas
  Blog.js           # Cards de notícias
  EventoDetalhe.js  # Tabela e rodadas do campeonato Master 40+
  Footer.jsx        # Rodapé global
  JogoseEventos.js  # Lista de eventos
  Post.js           # Página de detalhe para o blog
  SobreNos.js       # História do time
  index.js / index.css / App.css
public/
  background.png
  basketball.png
  logo.png
  Atletas/
  Blog/
  JogoseEventos/
  Logos/
```

Garanta que as imagens correspondam aos caminhos usados nos componentes (por exemplo, `/Atletas/Elsonviana.png`).

## 🚀 Como executar
Pré-requisitos: Node.js ≥ 18 e npm.

```bash
npm install
npm start
```

O aplicativo ficará disponível em `http://localhost:3000`.

### Scripts adicionais
- `npm run build`: gera build otimizado em `build/`.
- `npm test`: executa testes (configuração padrão CRA).
- `npm run eject`: exporta configurações do CRA (irreversível).

## 📝 Convenções de estilo
- Tailwind configurado com a cor personalizada `calmgreen` para fundos suaves.
- Classes utilitárias de Tailwind centralizam a estilização; não há CSS manual além das diretivas `@tailwind`.
- Dados estáticos (atletas, posts, eventos) estão definidos em arrays dentro dos próprios componentes.

Sinta-se à vontade para adaptar o conteúdo e os assets conforme novos eventos, atletas ou notícias forem publicados.
