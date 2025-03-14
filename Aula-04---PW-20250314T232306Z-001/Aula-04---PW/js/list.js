// Função para carregar os dados do LocalStorage e exibir na tabela
window.onload = function(){
    // Recuperar os dados do localStorage
    const savedData = JSON.parse(localStorage.getItem('formData')) || []

    // Obter o corpo da tabela
    const tableBody = document.querySelector('#dataTable tbody');

    // Verifica se há dados no localStorage
    if(savedData.length > 0){
        // Para cada item de dados armazenado, cria uma linha na tabela
        savedData.forEach(data => {
            const row = document.createElement('tr')

            //Cria as células da linha
            const nameCell = document.createElement('td')
            nameCell.textContent = data.name;

            const emailCell = document.createElement('td')
            emailCell.textContent = data.email;

            const passwordCell = document.createElement('td')
            passwordCell.textContent = data.password;

            const messageCell = document.createElement('td')
            messageCell.textContent = data.message;

            // Adicionar as células à linha
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(passwordCell);
            row.appendChild(messageCell);

            // Adicionar a linha ao corpo da tabela
            tableBody.appendChild(row)
        })
    }else{
        // Caso não haja dados, exibir uma mensagem de aviso
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.setAttribute('colspan', 4);
        cell.textContent = 'Nenhum dado cadastrado ainda.'
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
}