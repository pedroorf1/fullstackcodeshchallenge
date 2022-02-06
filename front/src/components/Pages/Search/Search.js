import './Search.css';
import React from 'react';

import api from '../../../api/api';
import Context from "../../../app/context/SearchConstext"

//interface
import RowOfArticle from "../../RowOfArticle/RowOfAticle"

const List = () => {

    const dados = React.useContext(Context)

    const [articles, setArticles] = React.useState([])
    const [pagination, setPagination] = React.useState({})

    //this wil userd for change position picture and desc of articles
    var contador = 0

    var ListOfArticles = []

    React.useEffect(() => {

        api.get("/search/articles/", { params: { text: dados.searcText, limit: dados.options.limit, sort: dados.options.sort } })
            .then((response) => {

                setArticles(response.data.response)
                setPagination(response.data.pagination)

                ListOfArticles.push(response.data);
            })
            .catch((err) => {
                console.log("Erro na busca: ", err)
            })

    }, [dados.searcText, dados.options.limit])

    function moreArticles() {

        dados.setOptions({ limit: dados.options.limit + 10 })

    }

    return (
        <div className='container'>

            {articles.map((article, index) => (
                // <li key={article.title}>{article.title} - data - {article.publishedAt}</li>
                <RowOfArticle value={article} key={article.title} LeftOrRight={index} />

            ))}


            <div className='loadmore'>

                <div className='cliv' />
                <div className='cliv' />

                <button className='btn btn-primary' onClick={moreArticles}>Carregar mais</button>
                <span className='numberofarticles'>articles loade: {dados.options.limit}</span>
            </div>

        </div>
    );
}


export default List;
