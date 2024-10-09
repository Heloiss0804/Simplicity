// Selecionando o link com a palavrea menu
const botaoMenu = document.querySelector(".titulo-menu a");

// Sselecionando a lista de links menu
const listaDeLinks = document.querySelector(".links-menu");

// Ouvinte de Evento para o click no botão menu
botaoMenu.addEventListener("click", function(event){
    // Anulando o comportamneto padrão de recarregar a página através de um link.
    event.preventDefault();

    // abrimos ou fechamos a lista de links, usando toggle na classe aberto
    listaDeLinks.classList.toggle("aberto");

    if (listaDeLinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "Fechar &times;";

    }else {
        botaoMenu.innerHTML = "menu &equiv;"
    }

  
    
})