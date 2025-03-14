// Função para apagar os dados do formulário
function clearForm() {
    document.getElementById('contactForm').reset();
}

// Função de exemplo para salvar dados (apenas um alerta)
function saveForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;

    // alert('Formulário salvo com sucesso!\n' +
    //     'Nome: ' + name + '\n' +
    //     'E-mail: ' + email + '\n' +
    //     'Senha: ' + password + '\n' +
    //     'Mensagem: ' + message);

    // Verifica se já existem dados salvos no localStorage
    let savedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Cria um objeto com os dados do formulário
    const formData = {
        name: name,
        email: email,
        password: password,
        message: message
    };

    // Adiciona os dados ao array
    savedData.push(formData);

    // Salva o array atualizado no localStorage
    localStorage.setItem('formData', JSON.stringify(savedData));

    // Exibe um alerta de sucesso
    alert('Formulário salvo com sucesso!');

    clearForm()
   
    
}