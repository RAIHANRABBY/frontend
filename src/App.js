import React from "react";
import {Outlet} from "react-router-dom";



import './App.css';
import NavBar from './Components/Navbar'
import NotesListPage from './Pages/NotesListPage'
import NoteList from './Pages/NoteList'

function App() {
  
  return (
    
    <div className="App">
      <NavBar/>
      
      <Outlet/>
    </div>


  );
}

export default App;
