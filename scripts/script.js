function loadContent(page) {
    // Esconde a div container
    document.querySelector(".container").style.display = "none";

    // Carrega o novo conteúdo
    fetch(page)
        .then(response => response.text())
        .then(content => {
            document.getElementById("content").innerHTML = content;
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "Erro ao carregar a página.";
        });
}