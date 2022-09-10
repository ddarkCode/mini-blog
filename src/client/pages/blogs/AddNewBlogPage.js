import React, { useState } from 'react';
import requireAuth from '../../components/hocs/requireAuth';

function AddNewBlogPage() {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
  });
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function handleChange(e) {}
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={blog.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={blog.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
      </form>
    </div>
  );
}

export default {
  component: requireAuth(AddNewBlogPage),
};
