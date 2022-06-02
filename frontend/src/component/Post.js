import React, {useState} from 'react';
import axios from "axios";


const Post = () => {

const [title , setTitle] = useState('');
const [body , setBody] = useState('');
const [author, setAuthor] = useState('');
//Intergrating the backend API
async function postBlog(e){
  e.preventDefault()
  try {
    await axios.post("http://localhost:5000/users/post", {
      title, 
      body,
      author
    })
  } catch (error) {
    console.log(error)
  }
}

  return (

<div className='bg-success'>
<div class="container mt-0">
  <form onSubmit={postBlog}>
    <div class="mb-3 ">
      <label for="title"><h1>Title</h1></label>
      <input type="text" value={title} class="form-control" id="email" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
    </div>
    <div class="mb-3">
    <label for="description"><h1>Description</h1></label>
    <textarea class="form-control"  value={body} rows="5" id="comment" onChange={(e) => setBody(e.target.value)}></textarea>
    </div>
    <div class="mb-3">
      <label for="pwd"><h1>Author</h1></label>
      <input type="text" value={author}  class="form-control" id="pwd" placeholder="Description" onChange={(e) => setAuthor(e.target.value)}/>
    </div>
    <div class="form-check mb-3">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"/>Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-primary mt-3 mb-3">Submit</button>
  </form>
</div>
  </div>
  )
}

export default Post