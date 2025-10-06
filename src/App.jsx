//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Navbar } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import ViewRegisteration from './components/viewregisteration';
import Clubadd from './components/clubadd';
import Home from './components/home'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Footer from './components/Footer';
import Viewclubs from './components/viewclubs';
import Team14 from './components/team14';
import Editclub from './components/clubedit';
import Clubedit from './components/clubedit';
import { clubcontext } from './clubcontext';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  },
  {
    path:"/addclubs",
    element:<div>
      <Header/>
      <Clubadd/>
      <Footer/>
      </div>
  },
  {
    path:"/view-registerations",
    element:<div>
      <Header/>
      <ViewRegisteration/>
      <Footer/>
      </div>
  },
  {
    path:"/view-clubs",
    element:<div>
    <Viewclubs/>
    <Footer/>
    </div>
  },
  {  path:"/team14",
    element:<div>
    <Header/>
    <Team14/>
    <Footer/>
    </div>
  },
  {
    path:"/edit-club",
    element:<div>
    <Clubedit/>
    <Footer/>
    </div>
  }
]);



function App() {

const [clubs, setclubs]=useState([])
const [selectedclub, setselectedclub] = useState()

const value ={clubs,setclubs,selectedclub,setselectedclub}

  return (
    <>
        <clubcontext.Provider value={value}>
        <RouterProvider router={router} />
        </clubcontext.Provider>
    </>
  )
}

export default App