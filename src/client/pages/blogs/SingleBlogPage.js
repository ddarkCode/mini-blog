import React from 'react'
import { Link } from 'react-router-dom';

function SingleBlogPage() {
   const blog =  {
        title: 'Mentoring Opportunities',
        date: new Date(),
        author: 'John Doe',
        id: '5',
        post: `Are you a problem solver or a domain expert in a certain language/stack or field?
        Pass this knowledge on to those starting their career journey or switching from one field to another.
        The ALC gives you the opportunity to participate as a mentor where you can guide
        and unblock learners through their learning journey.`
    }
    function dateFormat(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options)
    }
  return (
    <div className='single-blog-page'>
      <h2>{blog.title}</h2>
      <p className='date'>{dateFormat(blog.date)}</p>
      <p className='author'>{blog.author}</p>
      <p className='post'>{blog.post}</p>
      <Link to={`/blogs`}>Back to all blogs</Link>
    </div>
  )
}

export default {
    component: SingleBlogPage
}