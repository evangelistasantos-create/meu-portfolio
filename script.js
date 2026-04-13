const projetos = [
  { nome: "Portfólio", descricao: "Meu primeiro site" },
  { nome: "Site Responsivo", descricao: "Funciona no celular" },
  { nome: "Projeto", descricao: "Atividade" }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>$ {projeto.nome}</h3>
    <p>$ {projeto.descricao}</p>
  `;

  lista.appendChild(div);
});
