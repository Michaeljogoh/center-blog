import React from 'react'

const Comment = () => {
  return (
    <div>
    <div className='container-fluid bg-success'>
    <div class="mb-3">
    <label for="description"></label>
    <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <button type="button" class="btn btn-outline-danger mb-3">Danger</button>
    </div>
    <div className='bg-success mt-5 mb-4'></div>
    </div>
  
    
  )
}

export default Comment