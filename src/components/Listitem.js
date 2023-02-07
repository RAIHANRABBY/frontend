import React from 'react'
import {Link} from 'react-router-dom'
// const Listitem = (props) => {
//  return(
//     <div>
//         <h1>{props.note.id}</h1>
//         <h3>{props.note.body}</h3>
//         <small>{props.note.updated}</small>
//     </div>
//  );
// }

// export default Listitem


const Listitem = ({note}) => {
    
    
    return(
       <div>
        <Link to={`/note/${note.id}`}>{note.id}</Link>
        <h3>{note.body}</h3>
        <small>{note.updated}</small>

       </div>
    );
   }
   
   export default Listitem
   