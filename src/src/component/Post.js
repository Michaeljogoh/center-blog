import React from 'react'



const Post = () => {
  return (
<div className='bg-success'>
<div class="container mt-0">
  <form action="/action_page.php">
    <div class="mb-3 mt-">
      <label for="title"><h1>Title</h1></label>
      <input type="email" class="form-control" id="email" placeholder="Title" name="title"/>
    </div>
    <div class="mb-3">
    <label for="description"><h1>Description</h1></label>
    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <div class="mb-3">
      <label for="pwd"><h1>Author</h1></label>
      <input type="password" class="form-control" id="pwd" placeholder="Description" name="pswd"/>
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