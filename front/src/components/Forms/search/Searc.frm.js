import React from "react";
import './Searc.frm.css'

import { useNavigate } from 'react-router-dom';
import Context from "../../../app/context/SearchConstext"

const SearchBar = () => {

    const dados = React.useContext(Context)
    const limit = dados.options.limit

    const [searchValue, setSearchValue] = React.useState('')
    const [searchSort, setSearchSort] = React.useState('')

    var data = {}

    const navigate = useNavigate();

    const handleSumbith = (e) => {

        e.preventDefault();

        const formData = new FormData(e.target)
        data = Object.fromEntries(formData)

        //console.log("Exec: ", data)
        const sort = +(searchSort)

        dados.setSearcText(searchValue)
        dados.setOptions({ sort, limit: limit })

        navigate("articles/", { params: { text: data.txtsearch, limit: dados.options.limit, sort: dados.options.sort } })

    }

    const enviar = (e) => {

        const sort = +(searchSort)

        dados.setSearcText(searchValue)
        dados.setOptions({ sort, limit: limit })

        navigate("articles/", { params: { text: data.txtsearch, limit: dados.options.limit, sort: dados.options.sort } })

    }

    return (
        <>
            <form className="frmSearc" onSubmit={handleSumbith} name="frmSearch">

                <div className="input-group">
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="form-control" type="text" name="txtsearch" id="txtsearch" placeholder="Search" aria-label="Search" />
                    <div className="input-group-prepend  google-icons">
                        <span className="material-icons-outlined btn" onClick={enviar}>
                            search
                        </span>
                    </div>


                </div>
                <div className="form-group">

                    <select name="sort" className="form-control" id="optionsSort" value={searchSort} onChange={(e) => setSearchSort(e.target.value)}>

                        <option disabled >Sort</option>
                        <option value='2'>Mais novas</option>
                        <option value='3'>Mais antigas</option>

                    </select>

                </div>

            </form>
        </>

    )

}

export default SearchBar