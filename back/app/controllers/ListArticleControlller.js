const { response } = require("express");
const api = require("../../api/api");
const Functions = require("../../helpers/Functions");
//models
const baseCollection = require("../../models/spaceFlytNews")

module.exports = class Controller {
    //////////////////////////////////////////////////////////////////////////////////////////////////
    static async showhome(req, res) {

        res.status(200).send({ message: "Fullstack challenge 2021  - Space Flight News (pedroorf@gmail.com)" });
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * SEARC FOR ARTICLES WITH:
     * pagina: to pagination
     * id: to show especific article
     */
    static async showarticles(req, res, next) {

        //CONFIG OF SEARCH
        var page = 1
        var limit = 10;
        var skipIndex = (page - 1) * limit;
        var sort = { _id: 1 };

        //populating

        try {
            const buscar = {}

            var single = false

            var pagination = ''

            var ID = req.params.id ? req.params.id : req.body.id

            console.log("ID: ", ID)


            if (ID == undefined) {
                //find all articles
                buscar.results = await baseCollection.find({})
                    .sort(sort)
                    .limit(limit)
                    .skip(skipIndex)
                    .exec()
                pagination = await Functions.paginanation(req.params, buscar.results);
                single = false

            }

            if (ID != undefined) {
                //show especific article e returns variable :simgle whi informe what this article can be show detailed.
                console.log("Econcontado id: ", req.params.id)

                buscar.results = await baseCollection.find({ id: parseInt(ID) }).limit(1)
                    .sort(sort)
                    .limit(limit)
                    .skip(skipIndex)
                    .exec()
                pagination = await Functions.paginanation(req.params, buscar.results);
                single = true

            }

            const data = buscar.results;
            /**this returns data and navigations */
            res.status(200).send({ message: "Fullstack challenge 2021  - Space Flight News (pedroorf@gmail.com)", data, single, pagination });
            next();

        } catch (err) {
            //console.log("////Erro de busca no bacno ", err)
            res.status(400).send({ message: "Search not result encountreds", err });
        }

    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    static async searcArticleForTitle(req, res) {

        var searchValue = (req.query.text);
        var limit = Number.parseInt(req.query.limit)
        searchValue = new RegExp(searchValue, 'gi');

        var sort = req.query.sort == '0' ? -1 : 1
        console.log("Sorte:", sort)

        await baseCollection.find({ title: { $regex: searchValue } }).limit(limit).sort({ "publishedAt": sort })

            .then(async (response) => {
                const pagination = await Functions.paginanation(req.query, response);
                res.status(200).send({ message: "Results for you search!", response, pagination });
            })
            .catch(err => {

                res.status(400).send({ message: "Error to find registers", err });

            })

    }


    /////////////////////////////////////////////////////////////////////////////
    static async Sync(req, res) {
        res.send({ message: "Starting searc at Flight News Api " })
        await api.get("articles?_limit=20000")
            .then(async ({ data }) => {

                console.log("Syncronization on Atlas/Google/Server/MongoDB");
                //res.send(data);

                const resultSync = await Functions.SyncData(data);

                console.log("Sync results ", resultSync)

                return data;
            })
            .catch((error) => {

                console.log("Error to sync ");
                console.log({ error }) // this will log an empty object with an error property
            });

        //console.log(flitgData)

    }


}
