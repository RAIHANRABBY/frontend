import React from 'react';
import { useParams } from 'react-router';
import notes from '../assets/data'

const NoteList = ()=>{

   const params = useParams();
   let noteId=notes.find(note=>note.id==params.Id);
    return(
        <div>
            
            <h1 >{noteId.id}</h1>
            <h3>{noteId.body}</h3>
            <small>{noteId.updated}</small>
        </div>
    );


}

export default NoteList;