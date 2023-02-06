import React from 'react'

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
    
    console.log(note.body)
    return(
       <div>
        <h1>{note.id}</h1>
        <h3>{note.body}</h3>
        <small>{note.updated}</small>

       </div>
    );
   }
   
   export default Listitem
   