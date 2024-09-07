/**
 * Função para pesquisar heróis da independência do Brasil.
 * 
 * Esta função é chamada quando o usuário clica no botão "Pesquisar".
 * Ela obtém o valor do campo de pesquisa, filtra os dados dos heróis
 * e exibe os resultados na seção de resultados de pesquisa.
 */
function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite o nome de um herói na barra de pesquisa para aparecer aqui.</p>";
        return;
    }

    // Inicializa uma variável para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre os dados dos heróis
    for (let dado of dados) {
        // Verifica se o título ou as tags do herói incluem o termo de pesquisa
        if (dado.titulo.toLowerCase().includes(campoPesquisa) || dado.tags.toLowerCase().includes(campoPesquisa)) {
            // Adiciona o resultado encontrado à variável de resultados
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    // Exibe os resultados na seção de resultados de pesquisa
    // Se nenhum resultado for encontrado, exibe uma mensagem informando o usuário
    section.innerHTML = resultados || "<p>Nenhum herói tem o nome que você digitou, por favor digite um outro nome.</p>";
}