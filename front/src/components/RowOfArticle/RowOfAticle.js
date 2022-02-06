import React from 'react';

import './RowOfArticle.css'
import { Link } from 'react-router-dom';

const RowOfArticle = (...props) => {

    const { id, _id, imageUrl, newsSite, publishedAt, title, url, summary } = props[0].value

    const chanGeImagePositionKey = props[0].LeftOrRight
    const PosicaoImagem = chanGeImagePositionKey & 1 ? false : true //change position of image
    const data = publishedAt.split("T")[0];//extract data for base.data


    //decide and render articles
    function EsquerdaDireita() {

        if (PosicaoImagem) {
            return (
                <div className='envolve-left'>
                    <div className='article'>
                        <div className='title'>{title}</div>
                        <div className='info'>
                            <div className='data'>{data}</div>
                            <div className='news'>{newsSite}</div>
                        </div>

                        <div className='summary'>
                            {summary}
                        </div>
                        <div className='vermais'>
                            <Link to={`/articles/${id}`} title={title} className='btn btn-primary'>Ver mais</Link>
                        </div>
                    </div>

                    <div className='image'>
                        <img src={imageUrl} title={title} className='img-fluid' />
                    </div>
                </div>
            )
        } else {
            return (
                <div className='envolve-right'>
                    <div className='image'>
                        <img src={imageUrl} title={title} className='img-fluid' />
                    </div>
                    <div className='article'>
                        <div className='title'>{title}</div>
                        <div className='info'>
                            <div className='data'>{data}</div>
                            <div className='news'>{newsSite}</div>
                        </div>

                        <div className='summary'>
                            {summary}
                        </div>
                        <div className='vermais'>
                            <Link to={`/articles/${id}`} title={title} className='btn btn-primary'>Ver mais</Link>
                        </div>
                    </div>

                </div>
            )

        }

    }

    return (

        <div className='artilceLine'>
            <EsquerdaDireita />
        </div>

    )
}

export default RowOfArticle