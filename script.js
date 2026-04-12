const projetos = [
  { nome: "Portfólio", descricao: "Meu primeiro site feito com HTML, CSS e JavaScript" },
  { nome: "Site Responsivo", descricao: "Projeto adaptado para celular e computador" },
  { nome: "Projeto Escolar", descricao: "Atividade prática da disciplina de programação" }
];

const lista = document.getElementById("lista-projetos");

if (lista) {
  projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");
    div.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
    `;
    lista.appendChild(div);
  });
} else {
  console.error("Elemento #lista-projetos não encontrado!");
}
