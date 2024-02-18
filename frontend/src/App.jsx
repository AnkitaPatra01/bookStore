import React from 'react'
import {Routes, Router} from 'react-router-dom'
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';

const App = () => {
  return(
    <Routes>
      <Router path='/' element = {<Home/>} />
      <Router path='/books/create' element = {<CreateBooks/>} />
      <Router path='/books/details/:id' element = {<ShowBook/>} />
      <Router path='/books/edit/:id' element = {<EditBook/>} />
      <Router path='/books/delete/:id' element = {<DeleteBook/>} />
    </Routes>
  )
}

export default App;
