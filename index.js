let users = [
    {
        id: 1,
        nome: "Rafaela",
        email: "rafaela@hotmail.com",
        senha: "123456",
        expirado: false
    },
    {
        id: 2,
        nome: "Roberta",
        email: "roberta@hotmail.com",
        senha: "123456",
        expirado: true
    }
];

function realizarLogin(email, senha) {
    const user = users.find(u => u.email === email);
    if (user) {
        if (user.expirado) {
            return "Renove suas credenciais.";
        } else if (user.senha !== senha) {
            return "Senha incorreta para o usuário encontrado.";
        } else {
            return "Login realizado com sucesso.";
        }
    } else {
        return "Usuário não encontrado.";
    }
}

module.exports = { realizarLogin };
