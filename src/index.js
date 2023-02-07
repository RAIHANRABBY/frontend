import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'



import App from './App';
import NotesListPage from './Pages/NotesListPage'
import NoteList from './Pages/NoteList'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      
      <Routes>

        <Route element={<App/>}>
            <Route path='/' element={<NotesListPage/>} />            
            <Route path='/note/:Id' element={<NoteList/>} />
             
            
        </Route>

      </Routes>
    
    </Router>
  // </React.StrictMode>
);


