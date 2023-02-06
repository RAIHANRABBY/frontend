import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Header/>
        <NotesListPage/>
        <Route path='/' exact element={<NotesListPage/>}/>
        {/* <Route path='/note' component = {<NotePage/>} />     */}

      </Routes>
    </div>

  );
}

export default App;
