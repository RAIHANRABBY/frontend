import React from 'react';

import notes from '../assets/data'
import Listitem from '../Components/Listitem'




const NotesListPage = () => {

    return (
        <div>
            {notes.map(

                (note,index) =>{
                    return(
                        <Listitem key={index} note={note}    />


                    );
                }

         )}
        </div>
    );


}

export default NotesListPage;