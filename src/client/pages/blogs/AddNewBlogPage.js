import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';

import { addNewBlog } from '../../redux/blogs/actions';
import requireAuth from '../../components/hocs/requireAuth';

function AddNewBlogPage({ addNewBlog, history }) {
  const auth = useSelector((state) => state.auth);
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    authorId: auth._id,
  });
  const [isExpanded, setExpanded] = useState(false);

  console.log('Auth State: ', auth);
  console.log(blog);
  function expand() {
    setExpanded(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setBlog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewBlog(blog);
    history.push('/blogs');
  }
  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={blog.title}
            placeholder="Title"
            required
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={blog.content}
          placeholder="Take a note..."
          required
          rows={isExpanded ? 15 : 1}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addNewBlog,
};

export default {
  component: connect(null, mapDispatchToProps)(requireAuth(AddNewBlogPage)),
};
