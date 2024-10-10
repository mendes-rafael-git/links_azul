// Selecionar os botões e o wrapper dos containers
const slideButton = document.getElementById('slideButton');
const backButton = document.getElementById('backButton');
const containerWrapper = document.querySelector('.container-wrapper');

// Adicionar evento de clique para deslizar o container 1 para fora e abrir o container 2
slideButton.addEventListener('click', function() {
    containerWrapper.classList.add('active'); // Adiciona a classe 'active'
});

// Adicionar evento de clique para voltar ao container 1
backButton.addEventListener('click', function() {
    containerWrapper.classList.remove('active'); // Remove a classe 'active'
});
