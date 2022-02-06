const baseCollection = require("../../models/spaceFlytNews")

module.exports = class DetailsController {
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     *Show details of especific article
     *
     */
    static async articleDetails(req, res) {
        const details = {};
        //console.log("Idddd: ", req.query.id)

        let art_id = 0

        if (req.params.id) { art_id = req.params.id }
        if (req.query.id) { art_id = req.query.id }



        if (art_id) {

            details.results = await baseCollection.find({ id: parseInt(art_id) }).exec();

            const data = details.results
            console.log(data)
            res.status(200).send({ message: "Article details", data });
            return details

        } else {

            res.status(400).send({ message: "Error to find article!" });
            return
        }


    }

}
