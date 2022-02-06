import React from 'react';
import { useParams } from "react-router";
import api from '../../../api/api';


//
import './Details.css'
import Roket from './Imgs/rocket.gif'

const Details = () => {

    //meses
    const meses = {
        '01': 'Janeiro',
        '02': 'Fevereiro',
        '03': 'Março',
        '04': 'Abril',
        '05': 'Maio',
        '06': 'Junho',
        '07': 'julho',
        '08': 'Agosto',
        '09': 'Setembro',
        '10': 'Outrubro',
        '11': 'Novembro',
        '12': 'Dezembro',
    }


    const [article, setArticle] = React.useState([])
    const { id } = useParams();

    React.useEffect(async () => {

        await api.get('articles', { params: { id } }).then((response) => {
            setArticle(response.data)
            console.log(article)
        }).catch((err) => {
            console.log(err)
        })

    }, [article])

    if (article.data) {
        console.log(article)
        var { title, newsSite, publishedAt, summary, url, imageUrl } = article.data[0]
        var data = publishedAt.split("T")[0];
        var trad_date = data.split("-")
        data = "Publicado em: " + trad_date[2] + " de " + meses[trad_date[1]] + " de " + trad_date[0]



        return <div className='container'>

            <div className='articleDetails'>

                <div className='art_title'>
                    {title}
                    <div className='art_published'>{data}</div>
                </div>
                <a href={url} target='_blank' title={url}> <div className='art_site'>{newsSite}</div></a>
                <div className='art_img'>
                    <img src={imageUrl} className='img-fluid' title={imageUrl} />
                </div>
                <div className='art_summary'>{summary}</div>

            </div>
        </div>;
    } else {

        return <div className='container'><img src={Roket} className="img-fluid" /></div>
    }



}

export default Details