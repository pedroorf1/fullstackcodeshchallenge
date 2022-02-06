import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom"

//interface
import Context from "../app/context/SearchConstext";
import Head from '../components/Layouts/head/Head';
//pages
import Home from "../components/Pages/Home/Home";
import List from "../components/Pages/Search/Search";
import Details from '../components/Pages/Details/Details';

const AppRoutes = () => {
  //states
  const [options, setOptions] = React.useState({ limit: 10, sort: 1 })
  const [searcText, setSearcText] = React.useState('')


  return (
    <Context.Provider value={{ options, setOptions, searcText, setSearcText }}>
      <Head />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articles/" element={<List />} />
          <Route path="articles/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default AppRoutes;
