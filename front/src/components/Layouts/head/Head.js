import React from 'react';
import { NavLink } from "react-router-dom";
import './Head.css'

function Head() {




    return (
        <div className='container'>
            <div className='pagetitle'>
                <div className='microtitle' >CODESH challenge</div>
                <a href="/"><div className='hightitle'>List of news</div></a>
            </div>
        </div>
    )

}

export default Head