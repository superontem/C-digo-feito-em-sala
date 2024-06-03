let res_login = document.getElementById('res_login')
let cadastro = document.getElementById('cadastro')

cadastro.addEventListener('click', () => {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome: nome,
        email: email,
        senha: senha
    }
    console.log(dados)

    fetch('http://localhost:3000/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resposta => resposta.json())
        .then(dados => {
            // console.log(dados)
            res_login.innerHTML = "Nome = " + dados.nome + '<br>'
            res_login.innerHTML += "Email = " + dados.email + '<br>'
            res_login.innerHTML += "senha = " + dados.senha

        })
        .catch((err) => {
            console.error("Erro de busca de dados", err)
        })
})