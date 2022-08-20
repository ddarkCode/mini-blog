import React, { useState } from 'react'

import Blog from './Blog'

function BlogList() {
    const [blogs, setBlogs] = useState([
        {
            title: 'Mentoring Opportunities',
            date: new Date(),
            author: 'John Doe',
            id: '1',
            post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`
        },
        {
            title: 'Mentoring Opportunities',
            date: new Date(),
            author: 'John Doe',
            id: '2',
            post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`
        },
        {
            title: 'Mentoring Opportunities',
            date: new Date(),
            author: 'John Doe',
            id: '4',
            post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`
        },
        {
            title: 'Mentoring Opportunities',
            date: new Date(),
            author: 'John Doe',
            id: '5',
            post: `Are you a problem solver or a domain expert in a certain language/stack or field?
            Pass this knowledge on to those starting their career journey or switching from one field to another.
            The ALC gives you the opportunity to participate as a mentor where you can guide
            and unblock learners through their learning journey.`
        }
    ])
  return (
    <div className='bloglist-container'>
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog}  />)
        }
    </div>
  )
}

export default BlogList