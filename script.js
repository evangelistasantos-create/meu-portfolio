const projetos = [
  {
    nome: "Portfólio",
    descricao: "Meu primeiro site usando HTML, CSS e JavaScript"
  },
  {
    nome: "Site Responsivo",
    descricao: "Funciona em celular e computador"
  },
  {
    nome: "Projeto Escolar",
    descricao: "Atividade prática da escola"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  lista.appendChild(div);
});
