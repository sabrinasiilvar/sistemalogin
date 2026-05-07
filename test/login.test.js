const assert = require("assert");
const { realizarLogin } = require("../index");

describe("realizarLogin", () => {
    it("1) Sucesso", () => {
        const resultado = realizarLogin("rafaela@hotmail.com", "123456");
        assert.strictEqual(resultado, "Login realizado com sucesso.");
    });

    it("2) Credencial expirada", () => {
        const resultado = realizarLogin("roberta@hotmail.com", "123456");
        assert.strictEqual(resultado, "Renove suas credenciais.");
    });

    it("3) Usuário não encontrado", () => {
        const resultado = realizarLogin("desconhecido@hotmail.com", "123456");
        assert.strictEqual(resultado, "Usuário não encontrado.");
    });

    it("4) Senha incorreta para o usuário encontrado", () => {
        const resultado = realizarLogin("rafaela@hotmail.com", "senhaerrada");
        assert.strictEqual(resultado, "Senha incorreta para o usuário encontrado.");
    });
});
