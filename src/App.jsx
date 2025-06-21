import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import HomePage from './component/HomePage';
import AddPhotos from './component/AddPhotos';
import Gallery from './component/Gallery';
import About from './component/About';
import Signin from './component/Signin';
import SinglePhoto from './component/SinglePhoto';
import EditPost from './component/EditPost';
import Contact from './component/Contact';


function App() {

  return (
    <>
    

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/addPhoto' element={<AddPhotos />} />
    <Route path='/Gallery/*' element={<Gallery />} />
    <Route path='/About' element={<About />} />
    <Route path='/signin' element={<Signin />} />
    <Route path='/addPhotos' element={<AddPhotos />} />
    <Route path='/contact' element={<Contact />} />

    <Route path="/edit/:id" element={<EditPost />} />

    <Route path="/post/:id" element={<SinglePhoto />} />


    </Routes>
                  <ToastContainer position='top-right' autoClose={3000} />

    </BrowserRouter>
    </>
  )
}

export default App
