const projetos = [
    {
        nome: "Projeto 1",
        descricao: "Meu primeiro projeto"
    },
    {
        nome: "Projeto 2",
        descricao: "Outro projeto legal"
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const div = document.createElement("div");
    div.classList.add("projeto");

    div.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
    `;

    lista.appendChild(div);
});
