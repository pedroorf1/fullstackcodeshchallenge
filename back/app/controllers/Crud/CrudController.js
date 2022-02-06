const api = require("../../../api/api")
//models
const baseCollection = require("../../../models/spaceFlytNews")

module.exports = class crudController {
    //////////////////////////////////////////////////////////////////////////////////////////////////
    static async newArticle(req, res) {

        const newArt = new baseCollection({});

        var ID = 0

        baseCollection.count(function (err, count) {

            console.log("Count is", count)
            ID = +count
            console.log("Meu id: ", ID)

            newArt.id = ID;
            newArt.featured = req.body.featured;
            newArt.title = req.body.title;
            newArt.url = req.body.url;
            newArt.imageUrl = req.body.imageUrl;
            newArt.newsSite = req.body.newsSite;
            newArt.summary = req.body.summary;
            newArt.publishedAt = req.body.publishedAt;
            newArt.launches = req.body.launches;
            newArt.events = req.body.events;


            console.log("newArt", newArt, "Body: ", req.body)

            try {

                newArt.save()

                res.status(200).send(
                    { message: "Artigo criado com sucesso", newArt }
                )

            } catch (err) {
                res.status(400).send(
                    { message: "Houve erro ao tentar realizar o cadastro", err }
                )
            }


        });



    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    static async updateArticle(req, res) {
        const id = parseInt(req.body.id)
        baseCollection.findOneAndUpdate({ id }, req.body, (err) => {

            if (err) {

                res.status(400).send({ message: "Erro ao tentar realizar o update", id })
            } else {

                res.status(200).send({ message: "Artigo atualizado com sucesso", id })
            }
        })

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    static async deleteArticle(req, res) {

        var id = +(req.query.id)
        var exists = undefined

        if (!id) {
            id = parseInt(req.params.id)
        }
        if (!id) {
            id = parseInt(req.query.id)
        }

        await baseCollection.findOne({ id: id })
            .then((response) => {

                if (response) {
                    console.log("Exists: ", response.title)
                    exists = response.title

                }

            })




        if (exists !== undefined) {


            baseCollection.findOneAndDelete({ id }, (error) => {
                if (error) {

                    res.status(400).send({ message: "Erro ao exluir o arquivo", id })
                } else {

                    res.status(200).send({ message: "Artigo excluido com sucesso", id })
                }

            })
        } else {
            res.status(400).send({ message: "Este artigo não existe", id })
        }

    }

}