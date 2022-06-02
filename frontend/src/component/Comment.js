import React, {useState} from 'react';
import axios from "axios";

const Comment = () => {

   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('');
   

async function postName(e){
  e.preventDefault()
  try {
    await axios.post("http://localhost:5000/users/comment", {
      body,
      author 
    })
  } catch (err) { 
    console.log(err)
  }
}


  return (
    <div>
       <div className='container-fluid bg-success'>

     <form onSubmit= {postName}>
     <label for="comments"><h1>Comments</h1></label>
    <textarea type ="text" class="form-control" rows="5" value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
    <label for="comment"><h1>Author</h1></label>
    <input type ="text" class="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
    <br></br>
    <button type="submit" class="btn btn-danger mb-3 mt-3">Send </button>

</form>
       </div>
    </div>
  
    
  )
}
export default Comment