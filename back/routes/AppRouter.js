const router = require("express").Router()
const ListArticleControlller = require("../app/controllers/ListArticleControlller")
const DetaislController = require("../app/controllers/ArticleDetailsController.js")
const CrudController = require("../app/controllers/Crud/CrudController")

//routes for show
router.get("/", ListArticleControlller.showhome);
router.get("/articles/:id", DetaislController.articleDetails);
router.get("/articles/:pagina?", ListArticleControlller.showarticles);
router.get("/search/articles/:text?/:limit?/:sort?", ListArticleControlller.searcArticleForTitle);

//sync data
router.get("/sync", ListArticleControlller.Sync);
//routes for crud

router.post("/articles", CrudController.newArticle);
router.put("/articles/:id", CrudController.updateArticle);
router.delete("/articles/:id?", CrudController.deleteArticle);

module.exports = router
