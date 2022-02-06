const baseCollection = require("../models/spaceFlytNews")

module.exports = class Functions {

    static async SyncData(data) {

        const baseCollection = require("../models/spaceFlytNews")

        await data.map(async (data) => {

            //constuindo objeto para criação
            const inData = {

                id: data.id,
                featured: data.featured,
                title: data.title,
                url: data.url,
                imageUrl: data.imageUrl,
                newsSite: data.newsSite,
                publishedAt: data.publishedAt,
                summary: data.summary,
                launches: [{
                    id: data.launches.id,
                    provider: data.launches.provider,
                }],
                events: [{
                    id: data.events.id,
                    provider: data.events.provider,
                }]
            }

            //testando se o objeto registro ja existe
            try {

                var RegiExiste = '';
                RegiExiste = await baseCollection.find({ id: data.id }).exec();

                if (RegiExiste == '') {

                    const result = await baseCollection.create(inData)
                        .then((newdata) => {
                            console.log("Registro criado ", newdata);
                            console.log("---------------------------");
                        }).catch((errrs) => {
                            console.log("Erro ", errrs);
                        });

                    setInterval(() => {
                        //console.log("Result ", result);
                    }, 300);

                } else {

                    setInterval(() => {
                        console.log("Registro encontrado ", RegiExiste[0].id);

                    }, 300);

                }

            } catch (err) {
                console.log("Erro ", err);
            }

        })
        return "Syncronização realizada com sucesso!";
    }
    ////////////////////////////////////////////////////////////////////////////////////

    static async paginanation(req, data) {

        const TotalRegister = data.length

        //PAGINANTION

        var page = ''
        if (req.pagina == undefined) {
            page = 1
        } else {
            page = req.pagina;
        }

        //console.log(" Page - : ", page)
        //console.log(" Data - - : ", req)


        var limit = page * 10;
        var skipIndex = (page - 1) * limit;
        var sort = { _id: 1 };

        var totalPages = Math.ceil(TotalRegister / limit)

        //console.log(" - - - - - : ", totalPages)
        //navigations
        const navigations = {
            actualpage: parseInt(page),
            backpage: page > 1 ? parseInt(page) - 1 : totalPages,
            nextpage: page >= totalPages ? 1 : parseInt(page) + 1,
            totalPages,
            registerPerPage: limit
        }

        //console.log("Pagination: ", navigations)
        return navigations
    }
}
