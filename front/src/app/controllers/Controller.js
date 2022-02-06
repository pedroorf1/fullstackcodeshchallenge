const express = require('express')

module.exports = class Controller {

    static async calcTintaPintura(req, res) {

        res.status(410).send({ message: "Erro de requisição" });

    }

}